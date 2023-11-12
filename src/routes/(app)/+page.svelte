<svelte:head>
    <title>Camille - the foxy dev!</title>
</svelte:head>

<script lang="ts">
    import intro from './intro.txt?raw';

    const greets = intro.split('\n');
    var line = greets[0];
    var greet = '';

    function nextChar(index: number = 0) {
        if (index < line.length) {
            greet += line[index];
            setTimeout(() => nextChar(++index), 50);
        } else {
            setTimeout(clearLine, 5000);
        }
    }

    function clearLine() {
        if (greet.length > 0) {
            greet = greet.substring(0, greet.length - 1);
            setTimeout(clearLine, 30);
        } else {
            changeLine();
        }
    }

    function changeLine() {
        do {
            var temp = greets[Math.floor(Math.random() * greets.length)];
        } while (temp == line);
        line = temp;
        nextChar();
    }

    nextChar();
</script>

<style lang="postcss">
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > h1 {
            font-size: 2rem;
            margin: 1rem 0;
        }
        & > h2 {
            font-size: 1rem;
        }
        & > h1, & > h2 {
            color: azure;
            font-family: monospace;
        }
    }

    .blinker {
        animation: blinker 1s step-end infinite;
    }

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
</style>

<header class="container-fluid">
    <h1 role="img" aria-label="Hello! I'm Camille">
        {greet}<span class="blinker">█</span>
    </h1>
    <h2>digital polyglot; computer virtuoso; medical fanatic</h2>
</header>
