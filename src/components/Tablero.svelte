<script>
    import Casillero from "./Casillero.svelte"
    const casilleros = [0,1,2,3,4,5,6,7,8]
</script>

<div>
    {#each casilleros as pos}
        <Casillero {pos}/>    
    {/each}  
</div>

<style>
    div{
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 300px;
    }
</style>