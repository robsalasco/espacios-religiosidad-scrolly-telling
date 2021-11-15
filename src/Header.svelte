<script>
  import Headroom from "svelte-headroom";
  import Button from "./Button.svelte";
  import ButtonGroup from "./ButtonGroup.svelte";
  
  let values = { preselected: ["es"] };
</script>

<Headroom duration="350ms" offset={50} tolerance={5}>
  <header>
    <div class="wrapper col-full">
      <div class="logo">
        <img
          src="images/logo.png"
          alt=""
          width="80"
          title="blue-cite"
        />
      </div>
      <div class="lang-container">
        <ButtonGroup bind:value={values.preselected}>
          <Button value="es" lang="es">
            Español
          </Button>
          <Button value="ht" lang="ht"}>
            Kreyòl
          </Button>
        </ButtonGroup>
      </div>
    </div>
  </header>
</Headroom>
