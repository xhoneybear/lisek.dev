<script lang="ts">
	import { resolve } from '$app/paths';
	import logotype from '$lib/assets/logotype.svg';
	import Toggle from './Toggle.svelte';

	interface Props {
		flag?: boolean;
	}

	let { flag = $bindable(false) }: Props = $props();
</script>

<div class="fullpad"></div>
<header>
	<img src={logotype} alt="Logo" />
	<nav>
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/about')}>About</a>
		<a href={resolve('/contact')}>Contact</a>
	</nav>
	<div class="toggle">
		<Toggle bind:flag label="Please do not fry my computer" />
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 1rem;
		width: calc(100% - 2rem);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		z-index: 20;
	}

	img {
		height: 72px;
	}

	div.fullpad {
		grid-column: span 5;
		height: 4.5rem;
	}

	nav {
		justify-self: center;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 60%;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		background-color: #222;
	}

	div.toggle {
		justify-self: end;
		align-self: center;
	}

	@media (max-width: 1280px) {
		nav {
			width: 100%;
		}
	}
</style>
