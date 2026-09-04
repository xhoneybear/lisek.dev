<script lang="ts">
	let { color, border, size, distance = 0, rings = false } = $props();

	const latitudeCount = 12;
	const latitudeSlices = Array.from({ length: latitudeCount - 1 }, (_, index) => {
		const angle = ((index + 1) / latitudeCount) * Math.PI - Math.PI / 2;

		return {
			diameter: Math.cos(angle) * 100,
			depth: (Math.sin(angle) * size) / 2
		};
	});

	const longitudeCount = 6;
	const longitudes = Array.from(
		{ length: longitudeCount },
		(_, index) => (index / longitudeCount) * 180
	);
</script>

<div
	class="orbit"
	style="
        --distance: {distance}vw;
        --size: {size}vw;
        --duration: {Math.sqrt(distance ** 3)}s;
        --rotation: {Math.random() * 360}deg;
    "
>
	<div
		class:planet={distance > 0}
		class:sun={distance === 0}
		class:rings
		class="body"
		style="--size: {size}vw; --color: {color}; --border: {border};"
	>
		{#each latitudeSlices as slice (slice)}
			<div
				class="slice latitude"
				style="--diameter: {slice.diameter}%; --depth: {slice.depth}vw;"
			></div>
		{/each}
		{#each longitudes as angle (angle)}
			<div class="slice longitude" style="--angle: {angle}deg;"></div>
		{/each}
	</div>
</div>

<style>
	.orbit {
		display: flex;
		align-items: center;
		justify-content: start;
		position: absolute;
		width: max(var(--distance), var(--size));
		height: max(var(--distance), var(--size));
		border-radius: 50%;
		background-color: #2221;
		animation: orbit var(--duration) linear infinite;
		rotate: var(--rotation);
		transform-style: preserve-3d;
	}
	.body {
		position: absolute;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: #8888;
		transform-style: preserve-3d;
		animation: rotate 60s linear infinite;
	}
	.planet {
		left: calc((100% - var(--size) / 2));
		background-color: transparent;
	}
	.sun {
		background-color: transparent;
	}
	.sun .slice {
		box-shadow: 0 0 calc(var(--size) * 0.25) #fc86;
	}
	.slice {
		border-color: var(--border);
		background-color: var(--color);
	}
	.latitude {
		position: absolute;
		top: 50%;
		left: 50%;
		width: var(--diameter);
		aspect-ratio: 1;
		border-width: max(1px, calc(var(--size) * 0.025));
		border-radius: 50%;
		transform: translate(-50%, -50%) translateZ(var(--depth));
		backface-visibility: visible;
	}
	.longitude {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		aspect-ratio: 1;
		border-width: max(1px, calc(var(--size) * 0.025));
		border-radius: 50%;
		transform: translate(-50%, -50%) rotateX(90deg) rotateY(var(--angle));
		backface-visibility: visible;
	}

	@keyframes orbit {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		0% {
			transform: rotateZ(0deg);
		}
		100% {
			transform: rotateZ(360deg);
		}
	}
</style>
