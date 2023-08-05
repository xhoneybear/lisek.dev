<script lang="ts">
    import '$lib/../app.css';
</script>

<style lang="postcss">
    :global(html, body) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>

<nav class="flex sticky top-0 z-10 gap-4 items-center p-4 w-full backdrop-blur-3xl h-18 bg-white/50">
    <img src="/logo.png" alt="A pixel art of a red fox sleeping" />
    <p class="text-2xl font-bold">lisek.dev</p>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<slot />

<footer class="flex flex-col gap-2 items-center px-16 py-4 m-auto rounded-2xl backdrop-blur-3xl w-fit bg-white/50">
    <p>© 2023 lisek.dev | All rights reserved.</p>
    <p>Made with ❤️ in Svelte</p>
</footer>
