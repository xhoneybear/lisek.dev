<script lang=ts>
    import { writable } from 'svelte/store';
    import { setContext } from 'svelte';

    const tab = writable();
    setContext('tab', tab);
</script>

<style lang="postcss">
    nav {
        & > a {
            @apply p-2 w-1/3 text-center rounded-xl;
            transition-duration: 0.25s;
            &:hover {
                @apply bg-white/50;
            }
        }
        &:hover > a {
            @apply rounded-none;
        }
    }
    .bg-white-50 {
        @apply bg-white/50;
    }
</style>

<div class="flex overflow-hidden flex-col items-center self-center pb-4 m-2 h-[34rem] rounded-2xl backdrop-blur-3xl bg-white/50 shadow-xl" style="width: min(100%, 56rem);">
    <div class="flex gap-2 self-stretch p-2 backdrop-blur-3xl bg-white/50">
        <div class="p-2 bg-red-500 rounded-full hover:bg-red-600 active:bg-red-700" />
        <div class="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 active:bg-yellow-700" />
        <div class="p-2 bg-green-500 rounded-full hover:bg-green-600 active:bg-green-700" />
        <h1 class="text-xs font-bold text-center basis-full">Who am I?</h1>
        <div class="w-16" /> <!-- Normalizer to center the title -->
    </div>
    <nav class="flex overflow-hidden self-stretch m-2 rounded-xl backdrop-blur-3xl">
        <a href="/about" class:bg-white-50={ $tab === 1 }>Personal info</a>
        <a href="/about/experience" class:bg-white-50={ $tab === 2 }>Experience</a>
        <a href="/about/contact" class:bg-white-50={ $tab === 3 }>Contact</a>
    </nav>
    <div class="flex self-stretch items-start p-2 h-[28rem] max-md:flex-col max-md:items-center">
        <slot />
    </div>
</div>
