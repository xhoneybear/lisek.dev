<script lang="ts">
	import { onMount } from 'svelte';
	import Body from '$lib/components/StellarBody.svelte';

	let perspective: HTMLDivElement;

	onMount(() => {
		const updateRatio = (width: number, height: number) => {
			perspective.style.setProperty('--x-ratio', String(width / height));
		};

		const resizeObserver = new ResizeObserver(([entry]) => {
			const { width, height } = entry.contentRect;
			updateRatio(width, height);
		});

		const { width, height } = perspective.getBoundingClientRect();
		if (height > 0) {
			updateRatio(width, height);
		}

		resizeObserver.observe(perspective);
		return () => resizeObserver.disconnect();
	});
</script>

<div class="perspective" bind:this={perspective}>
	<div class="scene">
		<div class="space">
			<div class="grid"></div>
			<Body color="#fc83" border="#fc9c" size={6} />
			<Body color="#4444" border="#222c" size={0.5} distance={8} />
			<Body color="#c956" border="#fb78" size={1.25} distance={12} />
			<Body color="#3902" border="#27bc" size={1.25} distance={16} />
			<Body color="#a424" border="#831c" size={1} distance={20} />
			<Body color="#f944" border="#fb7c" size={3} distance={28} />
			<Body color="#dca4" border="#fdbc" size={3} distance={36} rings={true} />
			<Body color="#adf4" border="#ccec" size={2.5} distance={44} />
			<Body color="#46b8" border="#037c" size={2.5} distance={52} />
		</div>
	</div>
</div>

<style>
	.perspective {
		position: fixed;
		bottom: 10%;
		left: 10%;
		width: 100%;
		height: 100%;
		perspective: 420px;
	}
	.scene {
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transform: rotateX(calc(atan(var(--x-ratio)) + 18deg)) rotateY(14deg) rotateZ(10deg);
	}
	.grid {
		position: absolute;
		width: 100vw;
		height: 200vh;
		background-size: 1rem 1rem;
		background-image:
			linear-gradient(to left, #8882 1px, transparent 1px),
			linear-gradient(to top, #8882 1px, transparent 1px);
		-webkit-mask-image: radial-gradient(circle, black 0%, transparent 50%);
		mask-image: radial-gradient(circle, black 0%, transparent 50%);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
	.space {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
	}
</style>
