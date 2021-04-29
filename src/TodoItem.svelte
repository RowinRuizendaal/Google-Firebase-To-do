<script>
    import { createEventDispatcher } from 'svelte'
    
    const dispatch = createEventDispatcher()

    const remove = () => {
        dispatch('remove', { id })
    }

    const toggleStatus = () => {
        let newStatus = !complete;
        dispatch('toggle', {
            id,
            newStatus
        })
    }

    export let id
    export let text
    export let complete
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<li>
    {#if complete}
        <span class="is-complete"> { text }</span>
        <button on:click={toggleStatus}>✔️</button>
    {:else}
        <span>{text}</span>
        <button on:click={toggleStatus}> ❌ </button>
    {/if}

    <button on:click={remove}></button>
</li>