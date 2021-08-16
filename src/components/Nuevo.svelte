<script>
    import { ganador, marcados } from "../stores";
    
    const nuevo = () => {
        $ganador = ''
        $marcados = ['','','','','','','','','']        
    }

</script>

<button on:click="{nuevo}">
    Nuevo
</button>

<style>
    button {
        background-color: #00bfff;
        width: 300px;
        padding: 10px 20px;
        border-radius: 20px;
        font-family: inherit;
        font-size: 15px;
        color: #2e3440;
        border: none;
        display:block;
		margin:auto;
    }
</style>