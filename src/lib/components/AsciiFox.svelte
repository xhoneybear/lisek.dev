<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import logotype from '$lib/assets/logotype.svg';
</script>

<div>
  <img src={favicon} style="width: 100%;" alt="STRAYS logo" />
  <img src={logotype} alt="STRAYS logo" />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
		filter: drop-shadow(1px 1px 4px #222);
  }
</style>
