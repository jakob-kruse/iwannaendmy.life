<script lang="ts">
  import HotlineCountry from "../components/HotlineCountry.svelte";
  import { hotlineCountries } from "../hotlines";

  let searchTerm: string = "";

  $: filteredHotlineCountries = hotlineCountries.filter(
    (hotlineCountry) =>
      hotlineCountry.name.includes(searchTerm) ||
      hotlineCountry.code.includes(searchTerm)
  );
</script>

<div>
  <input
    class="search_input"
    placeholder="Search Countries"
    autocomplete="country-name"
    bind:value={searchTerm}
  />

  <div class="hotlines">
    {#if filteredHotlineCountries.length === 0}
      <div class="hotlines_empty">No Results</div>
    {:else}
      {#each filteredHotlineCountries as hotlineCountry}
        <HotlineCountry {hotlineCountry} />
      {/each}
    {/if}
  </div>
</div>

<style scoped type="text/scss">
  .search_input {
    border: 1px black solid;
    border-radius: 0;
    padding: 0.5rem 0.75rem;
    width: 100%;
  }

  .hotlines {
    width: 100%;

    &_empty {
      padding-left: 8px;
    }
  }
</style>
