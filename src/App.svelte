<script>
	import Tablero from "./components/Tablero.svelte"
	import Ganador from "./components/Ganador.svelte";
	import Nuevo from "./components/Nuevo.svelte";
</script>

<main>
	<h1>Tres en raya</h1>
	<img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="svelte" width="150">
	<Tablero/>
	<Ganador/>
	<Nuevo/>
</main>

<style>	
	:global(body){
		background: #2e3440;
		color: #f8f8f2;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Helvetica, sans-serif;
    }
	h1{
		text-align: center;
		color: #00bfff;
		margin-bottom: 10px;
		font-size: 45px;
	}
	img{
		display:block;
		margin:auto;
		margin-bottom: 10px;
	}
</style>