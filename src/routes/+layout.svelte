<script>
    import '../app.css'
</script>

<style lang="postcss">
    :global(html) {
        min-height: 100vh;
        background-image: url(bg.webp);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    :global(body) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>

<nav class="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-3xl">
    <img src="logo.png" alt="A pixel art of a red fox sleeping" />
    <p class="font-bold text-2xl">lisek.dev</p>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main class="grow py-16 flex items-center">
    <slot />
</main>

<footer class="flex flex-col w-fit m-auto items-center gap-2 py-4 px-16 bg-white/50 backdrop-blur-3xl rounded-2xl">
    <p>© 2023 lisek.dev | All rights reserved.</p>
    <p>Made with ❤️ in Svelte</p>
</footer>