<script lang="ts">
	import AsciiFox from '$lib/components/AsciiFox.svelte';
	import Space from '$lib/components/Space.svelte';
</script>

<div class="ascii">
	<AsciiFox />
</div>
<div class="space">
	<Space />
</div>
<div class="panel bio">
	<h1>Hi!</h1>
	<p>My name is Camille.</p>
	<br />
	<p>
		I'm a software engineer from Poland, founder of an app you might know - <a
			href="https://lisek.dev">meetly</a
		>!
	</p>
	<br />
	<p>
		I don't specialise in one area - I'd describe myself as an architect with a multi-language
		knowledge. Most comfortable with Python and Kotlin now, some C, too, and occasionally webdev in
		Svelte and Vue.
	</p>
	<br />
	<p>
		By profession, my expertise is medical informatics and mobile app development. I've dabbled in
		DSP, robotics, embedded systems and gamedev, too, to more or less success.
	</p>
	<br />
	<p>
		Nowadays just doing what I have to. What I started, mostly. Cause it's not a question of IF you
		will be burnt out. It's a question of WHEN.
	</p>
</div>
<div class="panel">
	<p>
		I've had a few endeavours in my life. Biology major in 2021 for a semester, then a year of
		biotechnology, finally ending up in medical informatics, which I still study.
	</p>
	<br />
	<p>
		Worked for Nokia and Dolby throughout that time, too - though now I prefer my own venture. That
		just feels a bit more... human.
	</p>
</div>
<div class="panel">
	<p>
		I'm a person of art, interested in tongues, music, art, and poetry. By fate, my interest has
		peaked in IT, though, so I try to be artful through code as well.
	</p>
	<br />
	<p>
		Solid, well-structured code that makes beautiful works. Games, websites, apps, independent
		software.
	</p>
	<br />
	<p>
		I still practice analog forms of expression, too. I play the guitar, sing some, and try to draw
		some. I have a tome of poetry. Private for now.
	</p>
</div>
<div class="panel">
	<h2>Card 7</h2>
	<p>This is the content of card 7.</p>
</div>
<div class="panel">
	<h2>Card 8</h2>
	<p>This is the content of card 8.</p>
</div>
<div class="panel">
	<h2>Card 9</h2>
	<p>This is the content of card 9.</p>
</div>
<div class="panel trunic">
	<p>
		:danger: dha koprat werld zi_ ca mashin.cdu not let ti_ ful ju.cdha mo pleznt ti_ siimz, dha wes
		ti_ zi_.cti_ dreinz ju.cti_ cheindjiz ju. ti_ sips no_ jo paeshn nae_d livz ju holau.cnau dhaet
		dha folt uz not jozc0cti_z dha sistam.cdu not let dhem ful ju.cdjoin dha ribelina_ nae_d pa_zau_
		dha steitas kwau! :sword:
	</p>
</div>

<style>
	.ascii {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		z-index: 10;
		grid-column: span 2;
	}

	.space {
		grid-column: span 3;
		grid-row: span 2;
	}

	.bio {
		grid-row: span 2;
	}

	.trunic {
		font-family: 'Tunic';
		font-size: 1.5rem;
		grid-column: span 5;
	}

	.trunic p {
		text-align: center;
	}

	h1 {
		font-size: 5em;
		text-align: center;
	}

	a {
		color: white;
	}
</style>
