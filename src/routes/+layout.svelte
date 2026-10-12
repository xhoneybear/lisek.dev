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
	import Space from '$lib/components/Space.svelte';

	let { children } = $props();
	let flag = $state(false);
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

{#if !flag}
	<Space />
{/if}

<Header bind:flag />

<main>
	{@render children()}
</main>

<Footer />

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
