<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	let isDarkMode = false;

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		document.body.classList.toggle('dark-mode', isDarkMode);
	}

	onMount(() => {
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		if (prefersDarkScheme.matches) {
			isDarkMode = true;
			document.body.classList.add('dark-mode');
		}
	});
</script>

<header>
	<p>lisek.dev</p>
	<nav>
		<a href={resolve('/')}>Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
	<div class="theme-slider">
		<label for="theme-toggle">Dark Mode</label>
		<input type="checkbox" id="theme-toggle" onchange={toggleTheme} />
	</div>
</header>

<style>
	header {
		/* position: fixed;
		top: 1rem;
		right: 1rem;
		width: calc(40vw - 2rem);
		padding: 1.5rem; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: span 5;
	}

	nav a {
		margin-left: 1rem;
		text-decoration: none;
	}
</style>
