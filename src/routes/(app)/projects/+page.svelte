<script lang="ts">
    import { onMount } from "svelte";

    async function getRepos(username: string) {
        return await fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json())
            .then(res => res.filter((repo: any) => (!repo.fork && !repo.archived && repo.name !== username)));
    }
    async function getName(url: string) {
        return await fetch(url)
            .then(res => res.text())
            .then(res => res.split('\n')[0])
            .then(res => res.substring(2, res.length));
    }
    async function makeTiles(username: string) {
        const repos = await getRepos(username);
        const tiles = document.createElement('div');
        tiles.setAttribute('class', 'full');
        for (const repo of repos) {
            const tile = document.createElement('a');
            tile.setAttribute('href', repo.html_url);
            tile.setAttribute('class', 'project');
            const bg = `https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`;
            if (await fetch(bg).then(res => res.status === 200)) {
                tile.style.backgroundImage = `url(${bg})`;
            }
            const content = document.createElement('div');
            content.setAttribute('class', 'project');
            const name = document.createElement('h2');
            name.textContent = await getName(`https://raw.githubusercontent.com/${username}/${repo.name}/main/README.md`);
            content.appendChild(name);
            const desc = document.createElement('p');
            desc.textContent = repo.description;
            content.appendChild(desc);
            tile.appendChild(content);
            tiles.appendChild(tile);
        }
        return tiles;
    }
    onMount(async () => {
        const tiles = await makeTiles('xhoneybear');
        const projects = document.getElementById('projects');
        if (projects) {
            projects.innerHTML = '';
            projects.appendChild(tiles);
        }
    });
</script>

<style lang="postcss">
    :global(#projects > div.full) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: fit-content;
    }

    .project {
        :global(a&) {
            width: max(320px, 20vw);
            height: max(240px, 15vw);
            margin: 0 max(12px, 0.75vw) max(24px, 1.5vw) max(12px, 0.75vw);
            border-radius: max(32px, 2vw);
            overflow: hidden;
            text-decoration: none;
            background-color: white;
            background-image: url('/404.png');
            background-size: cover;
            background-position: top;
        }
        div& {
            :global(&) {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: max(320px, 20vw);
                height: max(240px, 15vw);
                padding: max(16px, 1vw);
                background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1));
                background-size: cover;
            }
            :global(& > p) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                @apply text-amber-400;
            }
            :global(& > h2) {
                @apply text-2xl text-amber-400;
            }
        }
    }
</style>

<div class="content" id="projects">
    <div class="full">
        <a href='/projects' class="project">
            <div class="project">
                <h2>Fetching projects...</h2>
                <p>...this might take a while.</p>
            </div>
        </a>
    </div>
</div>
