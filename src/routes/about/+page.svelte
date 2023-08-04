<script lang="ts">
    let size_x = 960;
    let size_y = size_x * Math.sqrt(3);
</script>

<style>
    #paper-wrap {
        filter: drop-shadow(6px 14px 10px rgb(0 0 0 / 0.1));
        transform: rotate(-2deg);
    }
    .paper {
        @apply text-3xl;
        @apply rounded;
        @apply bg-stone-50;
        background-image: linear-gradient(to left, red 2px, transparent 1px), linear-gradient(to top, #ccd 1px, transparent 1px);
        background-size: 90% 2.25rem;
        clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 200px, 760px 0);
        padding: 5rem 5vw;
        font-family: Caveat, cursive;
    }
    .paper:before {
        @apply bg-stone-100;
        @apply rounded;
        @apply shadow-xl;
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 200px;
        content: '';
        background-image: linear-gradient(red 2px, transparent 1px), linear-gradient(to left, #ccd 1px, transparent 1px);
        background-size: 2.25rem 50%;
    }
    .paper > p, h2, h3 {
        @apply pb-9;
    }
    /* TODO: add animated link underline */
</style>

<div id="paper-wrap">
    <div style="width: {size_x}px; height: {size_y}px;" class="paper">
        <h1 class="pb-7 text-7xl font-semibold text-center">About me!</h1>
        <h2>Hi! I'm Camille. The very owner of this page!</h2>
        <p>
            I'm a passionate programmer and web developer, currently studying medical informatics
            at Wrocław University of Science and Technology and working as a DevOps engineer at Nokia.
        </p>
        <p>
            Aside from programming, my second biggest passion is biochemistry and radiophysics.
            I love the concept of evolution, genetic engineering and the application of it in medicine.
            I also like the topic of radioactivity, particularly radioisotopes and radiotherapy.
        </p>
        <h3 class="font-semibold">What's up with the foxes?</h3>
        <p>
            Lisek is my surname! It means "little fox" in Polish.
            Together with cats they are one of my favourite animals.
            I particularly love red, marble and swift foxes!
        </p>
        <h3 class="font-semibold">I'm on social media:</h3>
        <div class="text-2xl leading-9">
            <p>E-mail: <a href="mailto:camille@lisek.dev" target="_blank" rel="noopener noreferrer">camille@lisek.dev</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/camille-lisek/" target="_blank" rel="noopener noreferrer">Camille Lisek</a></p>
            <p>GitHub: <a href="https://github.com/camille-lisek" target="_blank" rel="noopener noreferrer">xhoneybear</a></p>
            <p>Discord: <a href="https://discord.gg/yE5jgj6txW" target="_blank" rel="noopener noreferrer">xhoneybear</a></p>
            <p>Fediverse: <a href="https://kitsunes.club/@honey" target="_blank" rel="noopener noreferrer">honey@kitsunes.club</a></p>
            <p>Matrix: <a href="https://matrix.org/" target="_blank" rel="noopener noreferrer">@honey:kitsunes.club</a></p>
        </div>
        <img class="absolute bottom-16" style="transform: scaleX(-1);" src="quill.png" alt="A quill" />
    </div>
</div>
