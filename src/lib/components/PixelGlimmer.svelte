<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		density?: number; // Stars per 10,000 px^2 (default: ~0.8)
		minCount?: number;
		maxCount?: number;
	}

	let { density = 0.8, minCount = 80, maxCount = 250 }: Props = $props();

	let canvas: HTMLCanvasElement;

	interface Star {
		x: number; // 0 to 1 ratio
		y: number; // 0 to 1 ratio
		size: number; // 1 or 2 px
		colorIndex: number;
		baseAlpha: number;
		maxAlpha: number;
		speed: number;
		phase: number;
		flareChance: number;
		flareProgress: number;
	}

	const PALETTE = [
		'#ffffff', // Pure white
		'#dcebff', // Cool white / starlight
		'#fff0dc', // Warm white
		'#ea36af', // Glitch magenta (accent)
		'#75fa69', // Cyber green (accent)
		'#38bdf8' // Cyan (accent)
	];

	function createStars(count: number): Star[] {
		const stars: Star[] = [];
		for (let i = 0; i < count; i++) {
			const isAccent = Math.random() < 0.15;
			const colorIndex = isAccent
				? 3 + Math.floor(Math.random() * 3)
				: Math.floor(Math.random() * 3);

			stars.push({
				x: Math.random(),
				y: Math.random(),
				size: Math.random() < 0.8 ? 1 : 2,
				colorIndex,
				baseAlpha: 0.08 + Math.random() * 0.25,
				maxAlpha: 0.65 + Math.random() * 0.35,
				speed: 0.8 + Math.random() * 2.2,
				phase: Math.random() * Math.PI * 2,
				flareChance: 0.0008 + Math.random() * 0.002,
				flareProgress: 0
			});
		}
		// Sort stars by colorIndex so fillStyle only changes at most 6 times per frame
		stars.sort((a, b) => a.colorIndex - b.colorIndex);
		return stars;
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		let width = 0;
		let height = 0;
		let dpr = 1;
		let stars: Star[] = [];
		let isVisible = !document.hidden;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = window.innerWidth;
			height = window.innerHeight;

			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);

			const area = (width * height) / 10000;
			const targetCount = Math.min(Math.max(Math.floor(area * density), minCount), maxCount);

			stars = createStars(targetCount);
		};

		resize();
		window.addEventListener('resize', resize);

		let lastTime = performance.now();

		const render = (time: number) => {
			if (!isVisible) return;

			const delta = Math.min((time - lastTime) / 1000, 0.1);
			lastTime = time;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			let currentColorIndex = -1;

			for (let i = 0; i < stars.length; i++) {
				const star = stars[i];

				if (!prefersReducedMotion) {
					star.phase += star.speed * delta;

					// Occasional sharp flare/glimmer burst
					if (star.flareProgress > 0) {
						star.flareProgress += delta * 3;
						if (star.flareProgress >= 1) {
							star.flareProgress = 0;
						}
					} else if (Math.random() < star.flareChance) {
						star.flareProgress = 0.01;
					}
				}

				// Calculate twinkle opacity using smooth sine + optional flare peak
				const sine = (Math.sin(star.phase) + 1) * 0.5;
				let alpha = star.baseAlpha + (star.maxAlpha - star.baseAlpha) * sine;

				if (star.flareProgress > 0) {
					const flareMultiplier = Math.sin(star.flareProgress * Math.PI);
					alpha = Math.min(1, alpha + flareMultiplier * 0.5);
				}

				if (star.colorIndex !== currentColorIndex) {
					ctx.fillStyle = PALETTE[star.colorIndex];
					currentColorIndex = star.colorIndex;
				}

				ctx.globalAlpha = alpha;
				const screenX = Math.floor(star.x * width * dpr);
				const screenY = Math.floor(star.y * height * dpr);
				const pixelSize = star.size * dpr;

				ctx.fillRect(screenX, screenY, pixelSize, pixelSize);
			}

			if (!prefersReducedMotion) {
				animationId = requestAnimationFrame(render);
			}
		};

		const handleVisibilityChange = () => {
			isVisible = !document.hidden;
			if (isVisible && !prefersReducedMotion) {
				lastTime = performance.now();
				cancelAnimationFrame(animationId);
				animationId = requestAnimationFrame(render);
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);

		if (prefersReducedMotion) {
			render(performance.now());
		} else {
			animationId = requestAnimationFrame(render);
		}

		return () => {
			window.removeEventListener('resize', resize);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<canvas bind:this={canvas} class="glimmer-canvas" aria-hidden="true"></canvas>

<style>
	.glimmer-canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 0;
		image-rendering: pixelated;
	}
</style>
