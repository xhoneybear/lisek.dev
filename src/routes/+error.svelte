<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
</script>

<div class="error-page">
    <img src={favicon} style="height: 100%;" alt="STRAYS logo" />
    <h1>404</h1>
    <h2>Page not found</h2>
</div>

<style>
    .error-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 85vh;
        text-align: center;
        grid-column: span 5;
    }

    h1 {
        font-size: 6rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
</style>
