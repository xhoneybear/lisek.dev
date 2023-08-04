<svelte:head>
    <title>Camille - the foxy dev!</title>
</svelte:head>

<style lang="postcss">
    .logo {
        height: 50vh;
        image-rendering: pixelated;
    }
</style>

<div class="flex overflow-hidden flex-col gap-4 items-center pb-4 mx-auto rounded-2xl backdrop-blur-3xl w-fit bg-white/50">
    <div class="flex gap-2 self-stretch p-2 backdrop-blur-3xl bg-white/50">
        <div class="p-2 bg-red-500 rounded-full hover:bg-red-600 active:bg-red-700"></div>
        <div class="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 active:bg-yellow-700"></div>
        <div class="p-2 bg-green-500 rounded-full hover:bg-green-600 active:bg-green-700"></div>
        <p class="text-xs font-bold text-center basis-full">Page under construction!</p>
        <div class="w-16"></div>
    </div>
    <img class="px-16 logo" src="logo.png" alt="A pixel art of a red fox sleeping" />
    <p>Please have a look at this cute fox in the meantime :)</p>
    <button class="px-16 py-1 text-sm font-bold bg-white rounded-xl border shadow hover:bg-blue-600 hover:border-blue-500 active:bg-blue-700 active:border-blue-600">OK</button>
</div>
