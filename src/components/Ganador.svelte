<script>
    import {ganador} from '../stores'
</script>

<p>
    Ganador:
    {#if $ganador == ''}
        <span> 👀</span>
    {:else}
        <span> {$ganador}</span>
    {/if}
</p>

<style>
    p {        
        text-align: center;
        font-size: 20px;
    }
</style>

