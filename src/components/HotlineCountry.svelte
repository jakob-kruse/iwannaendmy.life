<script lang="typescript">
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import MdExpandMore from "svelte-icons/md/MdExpandMore.svelte";
  import MdPhone from "svelte-icons/md/MdPhone.svelte";
  import { slide } from "svelte/transition";
  import type { IHotline, IHotlineCountry } from "../hotlines";
  import Flag from "./Flag.svelte";
  import Hotline from "./Hotline.svelte";
  import MdLink from "svelte-icons/md/MdLink.svelte";

  export let hotlineCountry: IHotlineCountry;

  let isExpanded = true;
  let quickHotline: IHotline = hotlineCountry?.hotlines[0];

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

<div class="hotline_country">
  <div class="hotline_country_header">
    <div on:click={toggleExpand}>
      <Flag countryCode={hotlineCountry.code} />
    </div>
    <div class="hotline_country_header_country" on:click={toggleExpand}>
      {hotlineCountry.name}
    </div>
    {#if quickHotline}
      {#if quickHotline.phone}
        <a href="tel:{quickHotline.phone}" class="icon" transition:slide>
          <MdPhone />
        </a>
      {/if}
      {#if quickHotline.mail}
        <a href="mailto:{quickHotline.mail}" class="icon" transition:slide>
          <MdEmail />
        </a>
      {/if}
      {#if quickHotline.website}
        <a href="{quickHotline.website}" class="icon" transition:slide>
          <MdLink />
        </a>
      {/if}
      <div
        class="icon"
        style="transform: rotate({isExpanded ? '180' : '0'}deg);"
        on:click={toggleExpand}
      >
        <MdExpandMore />
      </div>
    {/if}
  </div>
  {#if isExpanded}
    <div class="hotline_country_info" transition:slide>
      {#each hotlineCountry.hotlines as hotline}
        <Hotline {hotline} />
      {/each}
    </div>
  {/if}
</div>

<style scoped type="text/scss">
  .hotline_country {
    display: flex;
    flex-direction: column;
    transition: padding-left 0.25s;
    cursor: pointer;

    &_header {
      display: flex;
      flex-direction: row;
      align-items: center;

      &_country {
        padding-left: 4px;
        color: black;
        font-size: x-large;
        flex-grow: 1;
      }
    }
  }
</style>
