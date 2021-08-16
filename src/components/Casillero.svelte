<script>
    import {ganador, turno, marcados} from '../stores'
    import {getGanador} from '../services/Resultado.svelte'

    export let pos
    let valor = ""

    const handleClick = () => {  
        if($marcados[pos] == '' && $ganador == '') {
            $turno = $turno + 1      
            valor = $turno % 2 == 0 ? "🟢" : "❌"
            $marcados[pos] = valor;
            $ganador = getGanador($marcados)
        }      
    }    
</script>

<button on:click={handleClick}>
    {$marcados[pos]}
</button>

<style>
    button{
        width: 100px;
        height: 100px;
        font-size: 40px;        
    }    
</style>