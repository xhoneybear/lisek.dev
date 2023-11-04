<svelte:head>
    <title>Camille - the foxy dev!</title>
</svelte:head>

<style lang="postcss">
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        & h1 {
            font-size: 2rem;
        }
        & h2 {
            font-size: 1rem;
        }
        & p {
            display: inline;
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
    <h1 style="font-family: monospace; margin: 1rem 0;">
        <p _="on load
        fetch /script/intro
        set arr to result.split('\n')
        repeat forever
            repeat until temp != i
                set temp to Math.floor(Math.random() * arr.length)
            end
            set i to temp
            set line to arr[i]
            for char in line
                put char at the end of me
                wait 50ms
            end
            wait 5s
            repeat until me.innerHTML.length is 0
                put me.innerHTML.slice(0, -1) into me
                wait 30ms
            end
        end"></p><p class="blinker">█</p>
    </h1>
    <h2 style="font-family: monospace;">digital polyglot; computer virtuoso; medical fanatic</h2>
</header>
