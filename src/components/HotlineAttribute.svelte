<script lang="ts">
  export let label: string;
  export let values: string | string[];
  export let hrefPrefix: string | null = null;

  $: _values = values.split(';')
</script>

{#each _values as value, index}
  <div class="attribute">
    {#if _values.length > 1}
      <div class="attribute_label">{label} [{index + 1}]</div>
    {:else}
      <div class="attribute_label">{label}</div>
    {/if}

    {#if hrefPrefix}
      <a href="{hrefPrefix}:{value}" class="attribute_value">
        {value}
      </a>
    {:else}
      <a href={value} class="attribute_value">
        {value}
      </a>
    {/if}
  </div>
{/each}

<style scoped type="text/scss">
  .attribute {
    padding: 4px;

    &_label {
      font-size: x-small;
      font-weight: bold;
      color: gray;
      font-family: monospace;
      text-transform: uppercase;
    }
    &_value {
      text-overflow: ellipsis;
      color: black;
    }
  }
</style>
