<script lang=ts>
    import { getContext } from 'svelte';

    getContext<any>('tab').set(2);
</script>

<style lang="postcss">
    p {
        margin: 0.5rem;
    }
    .logo {
        image-rendering: pixelated;
    }
</style>

<img class="m-8 w-1/3 logo" src="/computer.png" alt="A pixel art of an old, white computer" />
<div class="overflow-auto w-2/3">
    <p>
        I am currently working for Nokia as a Junior DevOps engineer.
        I work in a small team of 8 people responsible for developing
        and managing cloud compilation and artifact caching software,
        and a load balancer.
    </p>
    <p>
        My scope of responsibilities is mostly focused on developing
        Python web applications and tests, mostly in Bash. Less often
        I work with C code and use C++ to help myself with tooling and
        creating mocks. I am also proficient using Git and Gerrit
        and somewhat acquainted with Jenkins.
    </p>
    <p>
        Just as I like to learn many spoken languages, I love to learn
        new programming languages as well. Apart from the languages
        and tools I use at work, I learn Java at university,
        complementing that with learning Gradle at home.
        I have a decent HTML and CSS knowledge while also learning
        JavaScript and Svelte when making this website.
        I also know a little bit of Rust, Kotlin and Scala.
    </p>
    <p>
        I'm a reliable performer, able to handle wide variety of tasks.
        I adapt quite quickly to what's needed to get the job done.
    </p>
    <p>
        
    </p>
</div>
