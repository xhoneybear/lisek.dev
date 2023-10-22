<svelte:head>
    <title>sad face :(</title>
</svelte:head>

<style>
    :global(html, body) {
        min-height: 100vh;
    }
    div {
        min-height: 100vh;
        background-color: black;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 20vh;
        image-rendering: pixelated;
    }
</style>

<div>
    <img src="/error.png" alt="A legacy macOS icon that represents an error" />
</div>
