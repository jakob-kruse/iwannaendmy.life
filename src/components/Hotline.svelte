<script lang="ts">
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import MdExpandMore from "svelte-icons/md/MdExpandMore.svelte";
  import MdPhone from "svelte-icons/md/MdPhone.svelte";
  import MdLink from "svelte-icons/md/MdLink.svelte";
  import { slide } from "svelte/transition";
  import type { IHotline } from "../hotlines";
  import HotlineAttribute from "./HotlineAttribute.svelte";

  export let hotline: IHotline;

  let isExpanded = false;

  let hasAttributes = Object.values(hotline).length > 1;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

{#if hasAttributes}
  <div class="hotline_card">
    <div class="hotline_card_header" on:click|self={toggleExpand}>
      <div class="hotline_card_header_label" on:click={toggleExpand}>
        {hotline.label}
      </div>
      {#if !isExpanded}
        {#if hotline.phone}
          <a
            href="tel:{hotline.phone}"
            class="hotline_card_header_action"
            transition:slide
          >
            <MdPhone />
          </a>
        {/if}
        {#if hotline.mail}
          <a
            href="mailto:{hotline.mail}"
            class="hotline_card_header_action"
            transition:slide
          >
            <MdEmail />
          </a>
        {/if}
        {#if hotline.website}
          <a
            href={hotline.website}
            target="_blank"
            class="hotline_card_header_action"
            transition:slide
          >
            <MdLink />
          </a>
        {/if}
      {/if}
      <div
        class="hotline_card_header_expand"
        style="transform: rotate({isExpanded ? '180' : '0'}deg);"
        on:click={toggleExpand}
      >
        <MdExpandMore />
      </div>
    </div>

    {#if isExpanded}
      <div class="hotline_card_data" transition:slide>
        {#if hotline.description}
          <div class="hotline_card_data_description">
            &#8222;{hotline.description}&#8220;
          </div>
        {/if}
        <div class="hotline_card_data_attributes">
          {#if hotline.phone}
            <HotlineAttribute
              label="phone"
              values={hotline.phone}
              hrefPrefix="tel"
            />
          {/if}
          {#if hotline.mail}
            <HotlineAttribute
              label="mail"
              values={hotline.mail}
              hrefPrefix="mailto"
            />
          {/if}
          {#if hotline.website}
            <HotlineAttribute label="website" values={hotline.website} />
          {/if}
          {#if hotline.customAttributes}
            {#each hotline.customAttributes as attribute}
              <HotlineAttribute
                label={attribute.label}
                values={attribute.values}
                hrefPrefix={attribute.hrefPrefix}
              />
            {/each}
          {/if}
        </div>
      </div>
    {/if}
  </div>
{/if}

<style scoped type="text/scss">
  .hotline_card {
    padding-bottom: 0.5rem;

    &_header {
      display: flex;
      padding: 0.5rem;
      background: black;
      align-items: center;

      &_label {
        color: white;
        flex-grow: 1;
        cursor: pointer;
      }

      &_action {
        color: white;
        width: 16px;
        height: 16px;
        cursor: pointer;
        padding: 2px 4px;
      }

      &_expand {
        color: white;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    &_data {
      border: 1px solid black;
      border-top: none;
      padding: 0.5rem;

      &_description {
        font-style: italic;
        color: gray;
        margin-bottom: 8px;
      }

      &_attributes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
</style>
