<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import PixelGlimmer from '$lib/components/PixelGlimmer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		rel="preload"
		href="/fonts/ShareTech-Regular.ttf"
		as="font"
		type="font/ttf"
		crossorigin="anonymous"
	/>
</svelte:head>

<PixelGlimmer />
<!-- <div class="crt"></div> -->
<Header />
{@render children()}
<Footer />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>

<style>
	.crt {
		position: absolute;
		top: -6px;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: auto 3px;
		background-image: linear-gradient(to bottom, #8888 0px, transparent 1px);
		pointer-events: none;
		z-index: 20;
		animation: crt 0.1s infinite;
	}

	@keyframes crt {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 0 2px;
		}
	}
</style>
