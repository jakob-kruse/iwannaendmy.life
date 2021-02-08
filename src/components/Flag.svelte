<script lang="ts">
  export let countryCode: string;

  $: flagUrl = `https://www.countryflags.io/${countryCode}/flat/64.png`;
</script>

<div class="flag">
  <img
    class="flag_image"
    src={flagUrl}
    alt={countryCode}
    width="64"
    height="64"
  />
</div>

<style scoped>
  .flag {
    width: 64px;
    height: 64px;
  }
</style>
