<script>
    import Layout from '$lib/Layout.svelte'
</script>

<style lang="postcss">
    main {
        background-image: url(/bg.jpg);
        background-position: center;
        background-size: 512px;
    }
</style>

<Layout>
    <main class="flex flex-col gap-2 justify-center items-center p-2 grow">
        <div class="h-20" /> <!--Navbar compensator-->
        <slot />
        <div class="h-24" /> <!--Footer compensator-->
    </main>
</Layout>
