<script>
    import Layout from '$lib/Layout.svelte'
</script>

<style lang="postcss">
    main {
        background-image: url(/bg.jpg);
        background-position: center;
        background-size: 25%;
    }
</style>

<Layout>
<main class="flex flex-col gap-2 justify-center items-center py-16 grow">
    <slot />
</main>
</Layout>
