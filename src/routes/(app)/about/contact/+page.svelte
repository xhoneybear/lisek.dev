<script lang="ts">
    import Feather from 'sveltekit-feather-icons/feather.svelte'
    import { getContext } from 'svelte';

    getContext<any>('tab').set(3);
</script>

<style lang="postcss">
    span {
        display: flex;
        margin: 0.5rem;
        & > p {
            padding-left: 0.5rem;
        }
    }
    a {
        text-decoration: underline;
    }
    .logo {
        image-rendering: pixelated;
    }
</style>

<img class="m-8 w-1/3 logo" src="/mail.png" alt="A pixel art of a red mailbox" />
<div class="overflow-auto w-2/3">
    <span>
        <b>Ways you can reach me:</b>
    </span>
    <span>
        <Feather icon="facebook" />
        <p>Facebook: <a href="https://www.facebook.com/twojprzyjaciellisek">Kamila Lisek</a></p>
    </span>
    <span>
        <Feather icon="linkedin" />
        <p>LinkedIn: <a href="https://www.linkedin.com/in/camille-lisek">Camille Lisek</a></p>
    </span>
    <span>
        <Feather icon="cloud" />
        <p>Discord: <a href="https://discord.com/users/214512726322446337">xhoneybear</a></p>
    </span>
    <span>
        <Feather icon="github" />
        <p>Github: <a href="https://github.com/xhoneybear">xhoneybear</a></p>
    </span>
    <span>
        <Feather icon="mail" />
        <p>Mail: <a href="mailto:camille@lisek.dev">camille@lisek.dev</a></p>
    </span>
    <br />
    <span>
        <Feather icon="file-text" />
        <p>My CV is available <a href="/cv.pdf">here</a>.</p>
    </span>
</div>
