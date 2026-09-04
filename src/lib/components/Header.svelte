<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="fullpad"></div>
<header>
	<nav>
		<a href={resolve('/')}>Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: calc(100% - 2rem);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 20;
	}

	div.fullpad {
		grid-column: span 5;
		height: 4.5rem;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: calc(20% - 2rem);
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		background-color: #222;
	}

	@media (max-width: 1280px) {
		nav {
			width: 100%;
		}
	}
</style>
