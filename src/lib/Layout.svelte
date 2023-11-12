<script lang="ts">
    import '$lib/../app.css';
</script>

<style lang="postcss">
    :global(html, body) {
        @apply flex flex-col
               min-h-screen;
    }

    :global(::-webkit-scrollbar) {
        @apply w-2;
    }
    :global(::-webkit-scrollbar-thumb) {
        @apply bg-gray-400/50 rounded-full;
    }

    * {
        font-family: 'VT323', monospace;
    }
    .logo {
        @apply w-[4.75rem] h-16;
        image-rendering: pixelated;
    }

    nav {
        @apply fixed flex justify-between items-center
               w-[calc(100%-1rem)] h-20 m-2 z-50
               text-xl text-white;
        & > *:not(:last-child) {
            @apply mx-4;
        }
    }

    div.menu {
        @apply flex text-3xl;
        & > a {
            @apply mx-4 overflow-clip;
        }
    }

    .menu-button-container {
        @apply hidden w-8 h-full
               flex-col justify-center items-center
               cursor-pointer;
    }
    .menu-button {
        &, &::before, &::after {
            @apply absolute block w-8 h-1
                   bg-white rounded-sm;
            content: '';
            transition-property: transform, background-color;
            transition-duration: 400ms;
            transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1),
        }
        &::before {
            @apply -translate-y-2;
        }
        &::after {
            @apply translate-y-2;
        }
    }

    #menu-toggle {
        @apply hidden;
        &:checked + .menu-button-container .menu-button {
            @apply bg-white/0;
            &::before {
                @apply translate-y-0 rotate-45;
            }
            &::after {
                @apply translate-y-0 -rotate-45;
            }
        }
    }

    .bg {
        @apply bg-amber-500 rounded-xl transition-all;
        background: linear-gradient(to left, rgb(249, 115, 22), rgb(245, 158, 11));
    }
    
    footer {
        @apply text-xl;
        background: linear-gradient(to left, rgb(249, 115, 22), rgb(245, 158, 11));
        & img {
            @apply saturate-0 transition;
            &:hover {
                @apply saturate-100;
            }
        }
    }

    @media not all and (min-width: 768px) {
        .menu-button-container {
            @apply flex;
        }
        div.menu {
            @apply absolute top-0 left-0 w-full
                   flex-col justify-center items-center
                   rounded-xl overflow-clip;
            margin: 5rem 0 !important;
            @apply transition-all;
            & > a {
                @apply flex justify-center items-center
                    w-full h-0 m-0 px-2
                    bg-neutral-800 text-neutral-800;
                transition-property: height, color;
                transition-duration: 400ms;
                transition-timing-function: (0.23, 1, 0.32, 1);
            }
        }
        #menu-toggle:checked {
            & ~ .bg {
                @apply rounded-b-none;
            }
            & ~ div.menu {
                @apply rounded-t-none;
                & > a {
                    @apply h-16 text-white;
                    border: 1px solid #333;
                }
            }
        }
    }
</style>

<nav>
    <a href="/" class="flex gap-4 items-center text-5xl">
        <img class="logo" src="/logo.png" alt="A pixel art of a red fox sleeping" />
        <p>lisek.dev</p>
    </a>
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button" />
    </label>
    <div class="menu">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
    </div>
    <div class="absolute w-full h-full bg-black bg -z-10" />
</nav>

<slot />

<footer class="flex absolute bottom-0 w-[calc(100%-1rem)] h-24 gap-4 justify-center items-center py-4 m-2 text-white rounded-xl backdrop-blur-3xl">
    <div class="flex flex-col gap-2 items-center w-96">
        <p>© 2023 lisek.dev | All rights reserved.</p>
        <p class="flex gap-2 items-center">Made with ❤ in Svelte |
            <a href="https://svelte.dev"><img src="/svelte.svg" alt="Svelte logo" class="w-4" /></a>
            <a href="https://tailwindcss.com"><img src="/tailwind.svg" alt="Tailwind logo" class="w-5" /></a>
            <a href="https://feathericons.com"><img src="/feather.svg" alt="Feather logo" class="w-4" /></a>
            <a href="https://vercel.com"><img src="/vercel.svg" alt="Vercel logo" class="w-4" /></a>
        </p>
    </div>
</footer>
