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
  }
	img {
		animation-duration: 0.8s;
		animation-name: textflicker;
    animation-timing-function: steps(1);
		animation-iteration-count: infinite;
		filter: drop-shadow(1px 1px 4px #222) blur(2px);
	}

  @keyframes textflicker {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    10% {
      transform: translate3d(-1.6px, 0.8px, 0);
      opacity: 0.99;
    }
    20% {
      transform: translate3d(0.8px, -1.4px, 0);
      opacity: 0.98;
    }
    30% {
      transform: translate3d(-0.7px, -0.9px, 0);
      opacity: 0.97;
    }
    40% {
      transform: translate3d(1.2px, 0.6px, 0);
      opacity: 1;
    }
    50% {
      transform: translate3d(-1.9px, -0.3px, 0);
      opacity: 0.95;
    }
    60% {
      transform: translate3d(0.9px, 0.9px, 0);
      opacity: 0.96;
    }
    70% {
      transform: translate3d(-0.1px, -0.7px, 0);
      opacity: 0.99;
    }
    80% {
      transform: translate3d(1.7px, -0.2px, 0);
      opacity: 0.96;
    }
    90% {
      transform: translate3d(-0.4px, 1.7px, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 0.98;
    }
  }
</style>
