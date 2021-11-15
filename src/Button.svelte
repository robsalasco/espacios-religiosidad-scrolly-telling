<script>
  import { getContext } from 'svelte';
  import { BUTTON_GROUP } from './ButtonGroup.svelte';
  import { locale } from "svelte-i18n";

  const { selectButton, values } = getContext(BUTTON_GROUP);
  
  export let value;
  export let lang;
  export let active = true;
  $: active = $values.includes(value);

  function handleLocaleChange(event) {
    locale.set(event);
  }

</script>

<style>
  .active {
    background-color: #0055CC; 
    border-color: #0055CC;
    color: white;
  }
</style>

<button on:click={() => selectButton(value)} on:click={() => handleLocaleChange(lang)} class:active>
  <slot />
</button>