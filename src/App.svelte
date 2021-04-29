<script>
	import Login from './Login.svelte'
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
	main {
		margin: 20px;
	}
</style>

<main class="content">
	<h1> Welcome to { name }</h1>
	<Login />
</main>