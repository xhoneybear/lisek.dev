<script lang="ts">
	interface Props {
		flag?: boolean;
		label: string;
	}

	let { flag = $bindable(false), label }: Props = $props();
</script>

<label class="switch">
	<span>{label}</span>
	<input type="checkbox" bind:checked={flag} />
	<span class="slider"></span>
</label>

<style>
	.switch {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: relative;
		display: inline-block;
		flex: 0 0 60px;
		height: 34px;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>
