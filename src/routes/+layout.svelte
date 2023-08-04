<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');
    :global(html) {
        min-height: 100vh;
        background-image: url(/bg.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    :global(body) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>

<nav class="flex gap-4 items-center p-4 backdrop-blur-3xl bg-white/50">
    <img src="/logo.png" alt="A pixel art of a red fox sleeping" />
    <p class="text-2xl font-bold">lisek.dev</p>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main class="flex flex-col gap-2 justify-center items-center py-16 grow">
    <slot />
</main>

<footer class="flex flex-col gap-2 items-center px-16 py-4 m-auto rounded-2xl backdrop-blur-3xl w-fit bg-white/50">
    <p>© 2023 lisek.dev | All rights reserved.</p>
    <p>Made with ❤️ in Svelte</p>
</footer>
