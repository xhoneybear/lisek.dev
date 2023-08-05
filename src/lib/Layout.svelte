<script lang="ts">
    import '$lib/../app.css';
</script>

<style lang="postcss">
    :global(html, body) {
        min-height: 100vh;
        @apply flex flex-col;
        @apply overflow-x-hidden;
    }
    nav > a:hover {
        @apply bg-amber-500;
    }
    .logo {
        width: 76px;
        height: 64px;
        image-rendering: pixelated;
    }
</style>

<header class="grid sticky top-0 z-10 grid-cols-3 gap-4 justify-between items-center px-8 h-20 backdrop-blur-3xl justify-items-between bg-white/50">
    <a class="flex gap-4 justify-self-start items-center text-6xl" href="/">
        <img class="logo" src="/logo.png" alt="A pixel art of a red fox sleeping" />
        <p style="font-family: 'VT323', monospace;">lisek.dev</p>
    </a>
    <nav class="flex justify-self-center h-full text-xl">
        <a class="flex items-center px-8 rounded-l-xl" href="/">Home</a>
        <a class="flex items-center px-8 rounded-r-xl" href="/about">About</a>
    </nav>
    <div class="flex overflow-hidden justify-self-end bg-black rounded-full cursor-pointer">
        <div class="w-8 h-8" onclick="toggleDarkMode()" />
        <div class="w-8 h-8" onclick="toggleDarkMode()" />
        <div class="absolute w-8 h-8 bg-amber-500 rounded-full"></div>
    </div>
</header>

<slot />

<footer class="flex flex-col gap-2 items-center px-16 py-4 backdrop-blur-3xl bg-white/50">
    <p>© 2023 lisek.dev | All rights reserved.</p>
    <p>Made with ❤️ in Svelte</p>
</footer>
