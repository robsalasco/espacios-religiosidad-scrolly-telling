<script>
  import { onMount } from "svelte";
  import { getMotion } from "./utils.js";
  import { addMessages, init, _ } from "svelte-i18n";

  import Header from "./Header.svelte";
  import Scroller from "./Scroller.svelte";
  import Map from "./map/Map.svelte";
  import Section from "./Section.svelte";
  import Divider from "./Divider.svelte";
  import Footer from "./Footer.svelte";

  // Languages

  import es from "./lang/es.json";
  import ht from "./lang/ht.json";

  addMessages("es", es);
  addMessages("ht", ht);

  init({
    initialLocale: "es",
  });

  // SCROLLYTELLING CONFIG
  // Config
  const threshold = 0.65;
  // State
  let index = [];
  let indexPrev = [];
  onMount(() => {
    indexPrev = [...index];
  });

  let animation = getMotion(); // Set animation preference depending on browser preference

  // MAP CODE
  // Config
  const mapstyle = "mapbox://styles/robsalasco/ckvuzcvvf05k014qa4om6ldop";
  const mapbounds = {
    one: [-70.74942, -33.35468],
    two: [-70.7611, -33.3631],
    three: [-70.74917, -33.36477],
    four: [-70.72975, -33.36544],
    five: [-70.71925, -33.36972],
    six: [-70.73216, -33.36904],
    seven: [-70.7363, -33.37752],
    eight: [-70.7412, -33.38473]
  };
  // State
  let map = null;

  // Actions for MAP scroller
  const mapActions = [
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 1",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.one, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 2",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.two, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 3",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.three, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 4",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.four, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 5",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.five, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 6",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.six, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 7",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.seven, zoom: 15});
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 8",
        "red",
        "grey",
      ]);
      map.flyTo({center: mapbounds.eight, zoom: 15});
    },
  ];

  // Reactive code to trigger MAP actions
  $: if (map && index[1] != indexPrev[1]) {
    if (mapActions[+index[1]]) {
      mapActions[+index[1]]();
    }
    indexPrev[1] = index[1];
  }
</script>

<Header />
<section style="margin-top:180px;position: relative;">
  <img
    src="images/image1.jpeg"
    alt="Imagen"
    style="width:100%;height:100%;z-index:-1000"
  />
  <span class="border-pad-title bdbc">
    <span>{$_("app_title")}</span>
  </span>
  <span class="border-pad-subtitle bdbc">
    <span>{$_("app_subtitle")}</span>
  </span>
</section>

<Section>
  <h2>{$_("section_1_title")}</h2>
  <p>{@html $_("section_1_text")}</p>
</Section>

<Divider />

<Section>
  <h2>{$_("section_2_title")}</h2>
  {@html $_("section_2_text")}
</Section>

<Scroller {threshold} bind:index={index[1]}>
  <div slot="background">
    <figure>
      <div class="col-full height-full">
        <Map style={mapstyle} bind:map interactive={true} />
      </div>
    </figure>
  </div>

  <div slot="foreground">
    <section>
      <div class="col-medium card">
        <img src="images/card1.jpg" alt="Parroquia San Juan Pablo II" />
        <h3>{$_("card_1_title")}</h3>
        <p>{$_("card_1_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card2.jpg" alt="Iglesia Evangélica Tabernaclé de la Grace" />
        <h3>{$_("card_2_title")}</h3>
        <p>{$_("card_2_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card3.jpg" alt="Iglesia Sagrada Familia de Quilicura" />
        <h3>{$_("card_3_title")}</h3>
        <p>{$_("card_3_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card4.jpg" alt="Parroquia Nuestra Señora del Carmen" />
        <h3>{$_("card_4_title")}</h3>
        <p>{$_("card_4_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card5.jpg" alt="Parroquia San Alberto Hurtado" />
        <h3>{$_("card_5_title")}</h3>
        <p>{$_("card_5_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card6.jpg" alt="I. Municipalidad de Quilicura" />
        <h3>{$_("card_6_title")}</h3>
        <p>{$_("card_6_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card7.jpg" alt="Cerro Renca" />
        <h3>{$_("card_7_title")}</h3>
        <p>{$_("card_7_text")}</p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card8.jpg" alt="Cementerio Municipal de Quilicura" />
        <h3>{$_("card_8_title")}</h3>
        <p>{$_("card_8_text")}</p>
      </div>
    </section>
  </div>
</Scroller>

<Divider />

<section class="col-full centered">
  <h2 style="position:absolute;z-index:-1000">{$_("section_3_title")}</h2>
  <div class="card-container">
    <div class="card-child">
      <img src="images/leader1.png" alt={$_("leader_1_name")} />
      <h3>{$_("leader_1_name")}</h3>
      <h4>{$_("leader_1_title")}</h4>
      {@html $_("leader_1_bio")}
    </div>
    <div class="card-child">
      <img src="images/leader2.png" alt={$_("leader_2_name")} />
      <h3>{$_("leader_2_name")}</h3>
      <h4>{$_("leader_2_title")}</h4>
      {@html $_("leader_2_bio")}
    </div>
    <div class="card-child">
      <img src="images/leader3.png" alt={$_("leader_3_name")} />
      <h3>{$_("leader_3_name")}</h3>
      <h4>{$_("leader_3_title")}</h4>
      {@html $_("leader_3_bio")}
    </div>
  </div>
</section>

<Divider />

<section class="col-full centered">
  <h2 style="position:absolute;z-index:-1000">{$_("section_4_title")}</h2>
  <div class="card-container">
    <div class="card-child">
      <img src="images/researcher1.jpg" alt="investigador" />
      <h3>{$_("researcher_1_name")}</h3>
      <h4>{$_("researcher_1_title")}</h4>
      {@html $_("researcher_1_bio")}
    </div>
  </div>
</section>

<Divider />

<Section>
  <h2>{$_("section_5_title")}</h2>
  {@html $_("section_5_text")}
</Section>

<Footer text={$_("footer_text")} />
