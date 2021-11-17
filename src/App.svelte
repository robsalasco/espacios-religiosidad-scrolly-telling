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
  const mapstyle = "mapbox://styles/robsalasco/ckvuzcvvf05k014qa4om6ldop";
  const mapbounds = {
    one: [
      [-70.74942, -33.35468],
      [-70.74942, -33.35468],
    ],
    two: [
      [-70.7611, -33.3631],
      [-70.7611, -33.3631],
    ],
    three: [
      [-70.73630, -33.37752],
      [-70.73630, -33.37752],
    ],
    four: [
      [-70.74917, -33.36477],
      [-70.74917, -33.36477],
    ],
    five: [
      [-70.72975, -33.36544],
      [-70.72975, -33.36544],
    ],
    six: [
      [-70.71925, -33.36972],
      [-70.71925, -33.36972],
    ],
    seven: [
      [-70.74120, -33.38473],
      [-70.74120, -33.38473],
    ],
    eight: [
      [-70.73216, -33.36904],
      [-70.73216, -33.36904],
    ],
  };
  // State
  let map = null;

  // Actions for MAP scroller
  const mapActions = [
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 1', 'red', 'grey']);
      map.fitBounds(mapbounds.one, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 2', 'red', 'grey']);
      map.fitBounds(mapbounds.two, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 3', 'red', 'grey']);
      map.fitBounds(mapbounds.three, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 4', 'red', 'grey']);
      map.fitBounds(mapbounds.four, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 5', 'red', 'grey']);
      map.fitBounds(mapbounds.five, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 6', 'red', 'grey']);
      map.fitBounds(mapbounds.six, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 7', 'red', 'grey']);
      map.fitBounds(mapbounds.seven, { animate: animation });
    },
    () => {
      map.setPaintProperty('puntos-blxqan', 'circle-color', ['match', ['get', 'Name'], 'FICHA 8', 'red', 'grey']);
      map.fitBounds(mapbounds.eight, { animate: animation });
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
    La llegada de migrantes provenientes de Centroamérica y del Caribe a Chile, correspondientes a lo que se ha denominado última oleada migratoria (2010-2020), se ancló espacialmente en Quilicura y el área norte dela RM. Dentro del patrimonio inmaterial que se ha identificado portan y desarrollan estos nuevos residentes, una de las prácticas que más destacan en la comunidad haitiana es laforma de vivir su religiosidad. 
    Es por ello que el objetivo general de la presente investigación es: visibilizar los discursos, prácticas culturales-religiosas, y formas de habitar asociada a la religiosidad de los residentes haitianos de la comuna de Quilicura y el sector norte como también identificar espacios donde se realizan dichas prácticas religiosas.
  </p>
</Section>

<Divider />

<Section>
  <h2>Espacios de creencias</h2>
  <p>En el desarrollo del proyecto hemos denominado “pilares” a las instituciones religiosas que forman parte del sistema de creencias haitiano hasta el día de hoy.
  <p>El primer pilar identificado corresponde al catolisimo. Siendo cronológicamente la religión más antigua adoptada, ocurrida durante la colonización por parte de los franceses, que permanecieron poco más de un siglo.</p>
  <p>El segundo pilar, corresponde al vudú, traído por esclavos originarios del Golfo de Guinea, en África. Siendo el vudú parte del sistema de creencias de toda la población esclavizada.</p>
  <p>Y finalmente, el tercer pilar que corresponde a las iglesias protestantes, las cuales tienen una influencia mucho más trardía, en conjunto con la ocupación de Estados Unidos a comienzos del siglo XXI.</p>
  <p>También hubo ocurrió un evento socio-natural que aceleró la asimilación de la religión y que corresponde al destructivo terremoto del 12 de enero de 2010 que permitió la llegada de gran cantidad de organizaciones de beneficencia que llegaron a prestar ayuda a la devastada sociedad haitiana.</p>
  <p>Hoy en día, el catolicismo es la religión maayoritaria y muchos de sus fieles practican también, de manera sincrética, el Vudú. Por otro lado, cerca del 35% de la población haitiana es fiel a una iglesia evangélica.</p>
  <p>Hemos podido constatar, que el sistema de creencias haitiano, fundamentado en los tres pilares anteriormente descritos, después de enfretar un proyecto migratorio, como el descrito hacia Chile, permanece intacto. </p>
  <p class="mb">Particularmente, hemos evidenciado que el sector norte de Santiago y la comuna de Quilicura son espacios dónde es factibile desarrollar el sistema de creencias haitiano y que se sustenta en la presencia de 8 instituciones señaladas en la cartografía a continuación.</p>
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
      <h3>Iglesia Evangélica Tabernaclé de la Grace</h3>
      <p>
          Actualmente es una de los templos más activos y con más asistentes de Quilicura.El templo es principalmente es principalmente utilizado por la comunidad haitiana, impartiendo la oración en Creolé, sin embargo, el acceso es libre. En la iglesia se imparte la oración cada domingo, pero adicionlmente funciona un escuela dominical.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card3.jpg" alt="Cementerio" />
        <h3>Iglesia Sagrada Familia de Quilicura</h3>
        <p>
          Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate.
          Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis,
          laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi.
          Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus,
          at rhoncus magna viverra semper.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card4.jpg" alt="Cementerio" />
        <h3>Parroquia Nuestra Señora del Carmen</h3>
        <p>
          Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate.
          Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis,
          laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi.
          Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus,
          at rhoncus magna viverra semper.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card5.jpg" alt="Cementerio" />
        <h3>Parroquia San Alberto Hurtado</h3>
        <p>
          Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate.
          Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis,
          laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi.
          Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus,
          at rhoncus magna viverra semper.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card6.jpg" alt="Cementerio" />
        <h3>I. Municipalidad de Quilicura</h3>
        <p>
          Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate.
          Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis,
          laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi.
          Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus,
          at rhoncus magna viverra semper.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card7.jpg" alt="Cementerio" />
        <h3>Cerro Renca</h3>
        <p>
          Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate.
          Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis,
          laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi.
          Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus,
          at rhoncus magna viverra semper.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card8.jpg" alt="Cementerio" />
        <h3>Cementerio Municipal de Quilicura</h3>
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

