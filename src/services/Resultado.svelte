<script context="module">    
    export const getGanador = (marcados) =>{
        let ganador = ""
        if(marcados[0] == marcados[1] && marcados[0] == marcados[2] && marcados[0] != ''){
            ganador = marcados[0]
        }else if(marcados[3] == marcados[4] && marcados[3] == marcados[5] && marcados[3] != ''){
            ganador = marcados[3]
        }else if(marcados[6] == marcados[7] && marcados[6] == marcados[8] && marcados[6] != ''){
            ganador = marcados[6]
        }else if(marcados[0] == marcados[3] && marcados[0] == marcados[6] && marcados[0] != ''){
            ganador = marcados[0]
        }else if(marcados[1] == marcados[4] && marcados[1] == marcados[7] && marcados[1] != ''){
            ganador = marcados[1]
        }else if(marcados[2] == marcados[5] && marcados[2] == marcados[8] && marcados[2] != ''){
            ganador = marcados[2]
        }else if(marcados[0] == marcados[4] && marcados[0] == marcados[8] && marcados[0] != ''){
            ganador = marcados[0]
        }else if(marcados[6] == marcados[4] && marcados[6] == marcados[2] && marcados[6] != ''){
            ganador = marcados[6]
        }
        return ganador 
    }
</script>