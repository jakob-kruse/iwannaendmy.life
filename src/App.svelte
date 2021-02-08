<script lang="ts">
  import { fly } from "svelte/transition";
  import Hotlines from "./pages/Hotlines.svelte";

  const tabs: {
    id: number;
    label: string;
    component: any;
  }[] = [
    {
      id: 0,
      label: "Hotlines",
      component: Hotlines,
    },
  ];

  let currentTabId: number = tabs[0].id;
  $: currentTab = tabs.find((tab) => tab.id === currentTabId);

  function changeTab(tabId: number) {
    currentTabId = tabId;
  }
</script>

<nav class="app_nav">
  {#each tabs as tab}
    <div
      class="app_nav_tab{currentTabId === tab.id ? '_active' : ''}"
      on:click={() => changeTab(tab.id)}
    >
      {tab.label}
    </div>
  {/each}
</nav>

<main>
  <div transition:fly>
    <svelte:component this={currentTab.component} />
  </div>
</main>

<style scoped type="text/scss">
  main {
    padding: 6px;
  }

  .app_nav {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-left: 8px;
    border-bottom: 1px solid black;

    &_tab {
      padding: 6px 12px;
      cursor: pointer;
    }

    &_tab_active {
      padding: 6px 12px;
      color: white;
      background: black;
    }
  }
</style>
