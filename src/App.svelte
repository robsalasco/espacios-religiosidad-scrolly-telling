<script>
  import {onMount } from "svelte";
  import {getMotion } from "./utils.js";
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
  const mapstyle = "mapbox://styles/mapbox/light-v8";
  const mapbounds = {
    ew: [
      [-70.90639,-33.55921],
      [-70.86639,-33.51921],
    ],
    fareham: [
      [-70.7407,-33.372115],
      [-70.705799,-33.355235],
    ],
    newport: [
      [-70.778391,-33.392035],
      [-70.74349,-33.375159],
    ],
  };
  // State
  let map = null;

  // Actions for MAP scroller
  const mapActions = [
    () => {
      map.fitBounds(mapbounds.ew, { animate: animation });
    },
    () => {
      map.fitBounds(mapbounds.fareham, { animate: animation });
    },
    () => {
      map.fitBounds(mapbounds.newport, { animate: animation });
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
  <img src="images/image1.jpeg" alt="Test" style="width:100%;height:100%" />
  <span class="border-pad-title bdbc">
    <span>{$_("app_title")}</span>
  </span>
  <span class="border-pad-subtitle bdbc">
    <span>{$_("app_subtitle")}</span>
  </span>
</section>

<Section>
  <h2>{$_("section_1_title")}</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tempor
    dui. Fusce ipsum arcu, aliquet vitae pellentesque id, aliquet at dui. Nulla
    bibendum ultrices sapien vel ultricies. Vivamus vestibulum dictum magna, eu
    eleifend diam gravida vitae. Proin eget imperdiet sapien, et gravida nunc.
    Aliquam at faucibus eros. Nunc in condimentum odio. Nam nisi turpis, gravida
    quis viverra non, blandit facilisis nibh. Vestibulum auctor ligula sit amet
    neque rhoncus luctus sit amet vel urna. Nulla tincidunt ultrices nisi, ac
    tempus magna iaculis quis. Duis tempor mi sit amet aliquet lobortis. Mauris
    at ipsum nec leo faucibus bibendum. Aliquam rutrum placerat quam, nec
    ullamcorper dui pharetra ac. Vivamus nec neque fringilla, aliquet tortor
    eget, scelerisque dui. Proin non maximus arcu.
  </p>
  <p>
    Donec volutpat ante quis fermentum molestie. Etiam eleifend egestas elit in
    vehicula. Cras dapibus lorem quis felis imperdiet, eget maximus nisl cursus.
    In hac habitasse platea dictumst. Donec dapibus luctus mauris venenatis
    congue. Nullam dapibus sodales laoreet. Proin molestie cursus pellentesque.
    In hendrerit fringilla tincidunt.
  </p>
  <p>
    Curabitur eleifend lectus ut dolor pellentesque, id sollicitudin odio
    luctus. Nam ultrices ornare felis, et viverra erat lacinia ac. Ut sit amet
    dolor a tortor cursus porta. Curabitur accumsan hendrerit turpis ut mattis.
    In imperdiet purus vitae erat molestie laoreet. Pellentesque a turpis id
    nisl pharetra dictum non vitae elit. Maecenas vel metus gravida, ullamcorper
    velit vehicula, molestie leo. Aliquam in ex in erat semper facilisis. Nunc
    varius, ante sit amet gravida porttitor, lorem leo maximus nulla, eu viverra
    lorem metus in lectus. Morbi lacinia at risus a maximus. Nulla dapibus,
    nulla sed bibendum blandit, leo dui imperdiet ligula, ut efficitur purus
    urna vel orci. Phasellus ante tellus, efficitur eu tellus non, euismod
    congue est. Nullam vel dolor eu magna finibus pharetra vel in nunc.
  </p>
</Section>

<Divider />

<Section>
  <h2>Espacios religiosos</h2>
  <p class="mb">
    Praesent eget mattis ante. In auctor tellus sed ipsum pulvinar, quis semper
    sapien ultricies. Donec pulvinar feugiat lectus hendrerit porta. Cras nec
    egestas diam. Praesent consequat consectetur est in venenatis. Duis volutpat
    nisi eu tempus interdum. Vivamus convallis metus eros, consectetur porttitor
    risus viverra nec. Proin a lectus lobortis, commodo urna eget, rutrum mi.
    Donec blandit quam sit amet diam laoreet, eu facilisis urna laoreet. Aliquam
    aliquam augue nisi, ac feugiat justo volutpat ut. Cras pulvinar facilisis
    rutrum. Nulla mollis tellus in nunc pharetra, quis scelerisque ipsum
    tristique. Nulla bibendum turpis consequat aliquam porta. Integer viverra
    neque tincidunt nulla elementum euismod. Morbi ultrices aliquam dui nec
    ultrices. Sed commodo nulla et nunc condimentum tempor.
  </p>
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
        <img src="images/card1.jpg" alt="Municipalidad" />
        <h3>Parroquia San Juan Pablo II</h3>
        <p>
          Actualmente imparte misas con alta regularidad. De martes a domingo a las 20:00 horas y el Domingo imparte tres misas durante la mañana. Esta parroquia es frecuentada por creyentes haitianos.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
      <img src="images/card2.jpg" alt="Parroquia" />
      <p>
          Nam suscipit lectus mi, eu pretium purus pretium in. Aenean facilisis
          id felis at pulvinar. Phasellus commodo vulputate elit, nec finibus
          tellus porttitor sed. Etiam consectetur malesuada bibendum. Mauris
          nibh ex, consectetur quis sollicitudin pharetra, porttitor et tellus.
          Nulla vel urna leo. Nulla vel mauris aliquet, hendrerit tortor in,
          mattis lectus. Maecenas sed diam pellentesque, scelerisque eros ac,
          dictum augue. Fusce suscipit metus ac sapien blandit, facilisis
          ullamcorper purus blandit. Aliquam ac luctus ex. Duis sit amet
          scelerisque tortor. Integer tincidunt lacus venenatis fringilla
          viverra. Aliquam pulvinar orci non consectetur lacinia. Aenean quis
          posuere ipsum.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card3.jpg" alt="Cementerio" />
        <p>
          Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate.
          Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis,
          laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi.
          Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus,
          at rhoncus magna viverra semper.
        </p>
      </div>
    </section>
  </div>
</Scroller>

<Divider />

<Section>
  <h2>Conclusiones</h2>
  <p class="mb">
    Ut interdum a lorem at lacinia. Aliquam at nulla ac dui elementum
    consectetur vitae non orci. Nam et nisi convallis, laoreet felis at,
    eleifend augue. Curabitur ac nibh mauris. In suscipit diam quis leo
    pulvinar, vitae ultricies lacus suscipit. Donec non lacus neque. Aliquam
    molestie quis dui sit amet cursus. Proin porta a nibh at efficitur. Cras
    dictum volutpat accumsan. Ut sollicitudin venenatis purus a rutrum. Maecenas
    in ante a ante fringilla rhoncus. Nullam non commodo dui. Proin bibendum
    sapien accumsan massa fermentum iaculis vehicula feugiat elit. Duis quis mi
    urna. Sed rutrum justo sapien, vitae sagittis ante cursus sit amet.
  </p>
</Section>

<Footer />

