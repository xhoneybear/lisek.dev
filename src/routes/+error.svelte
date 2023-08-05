<svelte:head>
    <title>Fox confused?</title>
</svelte:head>

<script>
    import Layout from '$lib/Layout.svelte'
</script>

<Layout>
<main class="flex flex-col gap-2 justify-center items-center py-16 grow">
    <div class="flex flex-col gap-4 justify-center items-center pb-4 mx-auto w-full h-full rounded-2xl backdrop-blur-3xl grow bg-white/50">
        <img class="logo" src="/404.png" alt="An art of a confused red fox with a question mark next to its head" />
        <p class="font-bold">Are you sure you should be here?</p>
        <p>Because this page doesn't exist.</p>
        <a href="/" class="p-3 mt-2 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-600 active:bg-blue-700">Back to home page</a>
    </div>
</main>
</Layout>
