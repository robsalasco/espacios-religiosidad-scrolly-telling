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
    one: [
      [-70.74942, -33.35468],
      [-70.74942, -33.35468],
    ],
    two: [
      [-70.7611, -33.3631],
      [-70.7611, -33.3631],
    ],
    three: [
      [-70.7363, -33.37752],
      [-70.7363, -33.37752],
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
      [-70.7412, -33.38473],
      [-70.7412, -33.38473],
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
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 1",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.one, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 2",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.two, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 3",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.three, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 4",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.four, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 5",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.five, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 6",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.six, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 7",
        "red",
        "grey",
      ]);
      map.fitBounds(mapbounds.seven, { animate: animation });
    },
    () => {
      map.setPaintProperty("puntos-blxqan", "circle-color", [
        "match",
        ["get", "Name"],
        "FICHA 8",
        "red",
        "grey",
      ]);
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
  <img
    src="images/image1.jpeg"
    alt="Test"
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
  <p>
    La llegada de migrantes provenientes de Centroamérica y del Caribe a Chile,
    correspondientes a lo que se ha denominado última oleada migratoria
    (2010-2020), se ancló espacialmente en Quilicura y el área norte dela RM.
    Dentro del patrimonio inmaterial que se ha identificado portan y desarrollan
    estos nuevos residentes, una de las prácticas que más destacan en la
    comunidad haitiana es laforma de vivir su religiosidad. Es por ello que el
    objetivo general de la presente investigación es: visibilizar los discursos,
    prácticas culturales-religiosas, y formas de habitar asociada a la
    religiosidad de los residentes haitianos de la comuna de Quilicura y el
    sector norte como también identificar espacios donde se realizan dichas
    prácticas religiosas.
  </p>
</Section>

<Divider />

<Section>
  <h2>Espacios de creencias</h2>
  <p>
    En el desarrollo del proyecto hemos denominado “pilares” a las instituciones
    religiosas que forman parte del sistema de creencias haitiano hasta el día
    de hoy.
  </p>
  <p>
    El primer pilar identificado corresponde al catolisimo. Siendo
    cronológicamente la religión más antigua adoptada, ocurrida durante la
    colonización por parte de los franceses, que permanecieron poco más de un
    siglo.
  </p>
  <p>
    El segundo pilar, corresponde al vudú, traído por esclavos originarios del
    Golfo de Guinea, en África. Siendo el vudú parte del sistema de creencias de
    toda la población esclavizada.
  </p>
  <p>
    Y finalmente, el tercer pilar que corresponde a las iglesias protestantes,
    las cuales tienen una influencia mucho más trardía, en conjunto con la
    ocupación de Estados Unidos a comienzos del siglo XXI.
  </p>
  <p>
    También hubo ocurrió un evento socio-natural que aceleró la asimilación de
    la religión y que corresponde al destructivo terremoto del 12 de enero de
    2010 que permitió la llegada de gran cantidad de organizaciones de
    beneficencia que llegaron a prestar ayuda a la devastada sociedad haitiana.
  </p>
  <p>
    Hoy en día, el catolicismo es la religión maayoritaria y muchos de sus
    fieles practican también, de manera sincrética, el Vudú. Por otro lado,
    cerca del 35% de la población haitiana es fiel a una iglesia evangélica.
  </p>
  <p>
    Hemos podido constatar, que el sistema de creencias haitiano, fundamentado
    en los tres pilares anteriormente descritos, después de enfretar un proyecto
    migratorio, como el descrito hacia Chile, permanece intacto.
  </p>
  <p class="mb">
    Particularmente, hemos evidenciado que el sector norte de Santiago y la
    comuna de Quilicura son espacios dónde es factibile desarrollar el sistema
    de creencias haitiano y que se sustenta en la presencia de 8 instituciones
    señaladas en la cartografía a continuación.
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
          Actualmente imparte misas con alta regularidad. De martes a domingo a
          las 20:00 horas y el Domingo imparte tres misas durante la mañana.
          Esta parroquia es frecuentada por creyentes haitianos.
        </p>
      </div>
    </section>
    <section>
      <div class="col-medium card">
        <img src="images/card2.jpg" alt="Parroquia" />
        <h3>Iglesia Evangélica Tabernaclé de la Grace</h3>
        <p>
          Actualmente es una de los templos más activos y con más asistentes de
          Quilicura.El templo es principalmente es principalmente utilizado por
          la comunidad haitiana, impartiendo la oración en Creolé, sin embargo,
          el acceso es libre. En la iglesia se imparte la oración cada domingo,
          pero adicionlmente funciona un escuela dominical.
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

<section class="col-full centered">
  <h2 style="position:absolute;z-index:-1000">Líderes religiosos</h2>
  <div class="card-container">
    <div class="card-child">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAH0CAYAAAAT2nuAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABkKADAAQAAAABAAAB9AAAAAB3g75BAAAeuUlEQVR4Ae3dZ28jx9IGUDrnnHPCem0D/uL//xP2k2EbsOFwnXPO+UUJd4TWLEmJtdu7Ve89A6xFSexm8VRjHs4MKV9z4cKFfzc2AgQIECBwoMC1B97f3QkQIECAwJGAALEQCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICVwfWqUQa0FHnrooc2tt9569Bz+/fffzQcffLD5559/zvycrr/++qPxN9988yZuX3PNNZs//vjj6N8PP/ywiTkz26x5M7VcyTGLYeYx//zzzzMNm2U7a94zPSl3uuoCAuSqt+DKFnDXXXdtHn/88RMP+vHHH58pQGJnEeHz4IMPbq69dvvB619//bX55ptvNp988snm77//PvE4u76ZNe+ux6v285dffnmn52m1vvnmm5uffvpp591m2c6ad+cT8YuSAgKkZFvmFHXDDTdsnn766dTkN9100+b8+fObmGPfFjuWCJg777xz884772x+++23fXffzJp374MW+mV47grjs5QZR3+7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vNueg5/VExAg9XqiIgIECLQQcA2kRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAv8HttA74x7SmfMAAAAASUVORK5CYII=" alt="Lider 1" />
      <h3>Lider 1</h3>
      <p>Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate. Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis, laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi. Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus, at rhoncus magna viverra semper.</p>
    </div>
    <div class="card-child">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAH0CAYAAAAT2nuAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABkKADAAQAAAABAAAB9AAAAAB3g75BAAAeuUlEQVR4Ae3dZ28jx9IGUDrnnHPCem0D/uL//xP2k2EbsOFwnXPO+UUJd4TWLEmJtdu7Ve89A6xFSexm8VRjHs4MKV9z4cKFfzc2AgQIECBwoMC1B97f3QkQIECAwJGAALEQCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICVwfWqUQa0FHnrooc2tt9569Bz+/fffzQcffLD5559/zvycrr/++qPxN9988yZuX3PNNZs//vjj6N8PP/ywiTkz26x5M7VcyTGLYeYx//zzzzMNm2U7a94zPSl3uuoCAuSqt+DKFnDXXXdtHn/88RMP+vHHH58pQGJnEeHz4IMPbq69dvvB619//bX55ptvNp988snm77//PvE4u76ZNe+ux6v285dffnmn52m1vvnmm5uffvpp591m2c6ad+cT8YuSAgKkZFvmFHXDDTdsnn766dTkN9100+b8+fObmGPfFjuWCJg777xz884772x+++23fXffzJp374MW+mV47grjs5QZR3+7tlm2s+bd9Tz8vK7A9peRdetV2SUIPPPMM0ennA6dInZy586dOzU8xnnj9Nbzzz+/9/FmzTvWUf127IxnbLNsZ807w8Cc8wUcgcw3LvEIDz/88OaOO+5I1fLkk08eHSmMg+OaSVzv+PHHH4+uecTccdRx3XXXHd8tdjZPPfXU0ZHI8Q+HG7PmHR6i/M11gMRpv0OuR+06TTjLdta85RulwK0CAmQry/+vH8YF80cffTT1pG655ZbN3XfffWJs7ODi3Psvv/xy/PMvv/xyc+ONN25efPHFE0cdMTbm+PXXX4/vGzdmzXviQRp8sw6Qd9999yiYL6X0Wbaz5r2U52rs1RVwCuvq+k9/9Di//uyzzx69UyrzYI888shFw957770T4bHcId6J9Z///Gf59vjrvffee3x7uTFr3mX+Ll/jVN+4nXbNaLzvrtuzbGfNu+t5+Hl9AQFSv0eXVOH6lMP6SGDf5HGBNt61NW7ffffdJv7t2r7//vvNt99+e+LX99xzz4nvZ8174kFO+SZOt8VR2fhvfaS1bYoIwxgTO9M4LRhvGFiHwLZxu342HoHEkV2E8KVss2xnzXspz9XYqy8gQK5+D6ZVEDu7++6773j+OF++7Qjh+A6rG7fddttF7xDaFx7L8LguMm6xk1w+dxI/nzXv+Jin3Y6dfoTA+C/eZDDu0NdzxHOId7HFmAiRxx577Ogt0bFzzW7j4/3+++/ZaY7HzbKdNe9x4W60FBAgLdt2etFxPSKOPsYtPjB4yCvcbRfd48L5ads6QOL+t99++/GwWfMeP8AZbnzxxRdHbwAY7xqn++Ki/7YtQiJ+tw6L+AzNIUd149zxlufxTQeX4/TVLNtZ844ebvcTcBG9X89OrTh2cvFqetw5xYf74l/stM66xavOcYuL5mf55HPsCON+8S6sZRsfd9a8y2Od9Wscjb300ksnnGJH+cADD2ziTQHjFqerxqOo+F0E5eeffz7e7aDb49FHDAy36FlcrF7+hVscmcTvIqji375P+s+ynTXvQWDuXE7g7HuTcqUraJdAnGIZX/HHUUccfRy6jQEQYw85xRKPOY4fA2T8+eWc99DnFzV++OGHm6dXH66MU1NxLWc5WoudeZiO26GnA8exy+31tZO4VhSf9N/3wcIIkujltqO8mHeW7ax5Fwtfewo4hdWzbzurjuCIV8vLFq9W411Tuz4vsNxv29dxpx+/jz9TctZt/XjjDmjWvGetbbzf119/fdGbAuIoYDn9F0dzETDrU1cRPEvAjPMdcnt9BBKBsi88Yu64T3xAM2oajzCXx51lO2vepW5fewo4AunZt61Vxw4lTl2NO7vPPvts799K2jrRf3+43kEdEiDr+447oFnz7nsu+373/vvvHx2xjTXGu8/iDQgRfOtTV/EuswieS93WAXLIfFFbhE18bmTcZtnOmnes3e1+AgKkX892VhwXeePi+bL9/PPPm08//XT59qCvEULrncb6qGLfhOv7LjvnWfPuq+W030XYRYg899xzJ+4ar/LXW1zbyZwOXM8T328LkHCL02fxBxLjmlP0IAIs3i48HsXF+Djldf/992+++uqr+PbohcP/Ss+OnrD/XHUBAXLVW3B5Cogdyfh5i/hMQZy62nfBdd8jj0cxy/3WobD8fNvX9eMuf55j1rzbajjkZ/H25DiqGN/2vG18XHhfH11tu99Zfra+BhKnxN5+++2L3tUV73yLi/rxV5Sjz+P2xBNPHAVOBNss21nzjs/D7Z4CAqRn305UHTui2JGMW5yjP+Si9zg2bscOP/6N5+TH2+v7r79f33fZ6c6ad/34me/DLN6FNR7FjfPEW3/P8jbmccy+2/GuuDhiiH8RuHFks+tdbhHecZQURy3jW2rDOb6PuWbZzpp3n43f9RBwEb1Hn3ZWGa8O47rHuMOOV9PLaY2dA8/wi2Wnv9x1OQ21fL/v61hP3G+ca7wdv7tc88Zcl7LFTjqOMLZtcXQQn/m4nFsERhwlxlFH/On7XeExPmbUtz66G6/RzLKdNe/43NzuJ+AIpF/PTlQcrz7HHUj8MnZE8Unpbdv6HHncJ961tZyeip1TvNKO72Oe8dX4trHbHiN+No6L78cd0Kx543EudVsH36XOd7nHR5DFkeV4+mvs/yzbWfNebh/zXVkBAXJlva/Io8UH4Q7Z4gLtuMVpmrgAHzuNcdt20Xf8/Xh7HSDjXOPtGHO55h0fP3M7joR2fRI9nk9cg7hcF9Az9S1j4rMgY4CMF9dn2c6ad3lOvvYUcAqrZ9+uSNXrncb44cR9BcSRyjpAYqe3bLPmXebPfo3Pfow74/U8EczxRxirbeO1rlm2s+atZqmewwQcgRzm9T917/H/9xFPPIIhXvmOYbANZLzIG7+P02LjJ6dnzbutlrP+LP7w5Pgutl3j4q29r7/++vEpv133O+3ncd1qvPYTfxLlrBfox6OPeJyxH7NsZ817mpPf1xYQILX7c2p1sdOJHdpZt7joHn//adzeeuutE6erlh1SfGAuXpWPb+OMHe0nn3wyDr/odtxn3CI8lmss8fNZ846PecjtOOpYPnm+jIvQe+ONN45OW41/0n65b1z8vpQtrluMQRA+ZwmQOAocx0UNS7/i9izbWfNGzba+Ak5h9e3dceWxAznk3/HA/95Yj11+Hzu1+FDbuMX1kvGV8/i7uB1/dG/9Sn49x6x517Wc9fs4qli/QSA+gBku8dbZMfxizrMerex7/PGILO4XIbWuYdv4+Dtd6y0+dLhss2xnzbvU7WtPAQHSs29XrOr1n+yIndyu/8NhvDo+d+7cidriMwTx6nW9zZp3/Tinfb/tukb8xdv4EzCxxbn/+HzIejvtesn6/uvv1wES7/46f/78RdeOlnHx+wi69XWocIygG7dZtrPmHWt3u5eAU1i9+nXFq42jh7hIO75TKq5xxGmwOJUVO6+4YB4/i53x+m2wsSNeX4CNJzFr3kOA4jnFO6vWWxx1jJ+1iB1nHFWNp7KWd2zFZzgyW5yuirfkjm82iL/6+8ILLxy9jTquOUSQxSmz+Hkc+Y1v143HjHDe9tmUWbaz5s34GVND4JoLFy78W6MUVVwJgbie8corr5x4qFdffXXrTn65U5yWilfH47WQ5Xf7vka4xHWEcWc83n/WvONj7Lsdz2n9ij4+A7PtiCN29Ov/d0jMHWGT/dBmBELUsA7dfTWPv/voo492/v9IZtnOmnd8Xm73EXAKq0+vrlql8ZmQ9avy04qJV89xcX5XeMT4WfOeVlv8Pj48uQ6PfZ82j9/FDnu9xRHMeBSx/v2+7+MoIy7Gx5HEIVt8KDM+ub7vf2Y1y3bWvIc8f/etI+AUVp1eXLFKYoe1vOqNHfy+nfxS1HKuPT5oF6dUdm0xV9w3drbri8/bxsyad9tjLT+LI6n4Hzett/iQ4L6deRxpxKms8bMgcU0oTi9tC5f1/Nu+jz8789prrx39D6viDyWedpQXp77iz5lsOy24nn+W7ax51/X7vr6AU1j1e1SuwnjlHtcD4pV3nKOPnW68Qo9TVnHB/Cw7t21Pata82x6r4s/CMgzibbpxfSbCKa4/hWv8i6O6s4Tytuc2y3bWvNueg5/VExAg9XqiIgIECLQQcA2kRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAv8HttA74x7SmfMAAAAASUVORK5CYII=" alt="Lider 2" />
      <h3>Lider 2</h3>
      <p>Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate. Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis, laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi. Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus, at rhoncus magna viverra semper.</p>
    </div>
    <div class="card-child">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAH0CAYAAAAT2nuAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABkKADAAQAAAABAAAB9AAAAAB3g75BAAAeuUlEQVR4Ae3dZ28jx9IGUDrnnHPCem0D/uL//xP2k2EbsOFwnXPO+UUJd4TWLEmJtdu7Ve89A6xFSexm8VRjHs4MKV9z4cKFfzc2AgQIECBwoMC1B97f3QkQIECAwJGAALEQCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICUgQFJsBhEgQICAALEGCBAgQCAlIEBSbAYRIECAgACxBggQIEAgJSBAUmwGESBAgIAAsQYIECBAICVwfWqUQa0FHnrooc2tt9569Bz+/fffzQcffLD5559/zvycrr/++qPxN9988yZuX3PNNZs//vjj6N8PP/ywiTkz26x5M7VcyTGLYeYx//zzzzMNm2U7a94zPSl3uuoCAuSqt+DKFnDXXXdtHn/88RMP+vHHH58pQGJnEeHz4IMPbq69dvvB619//bX55ptvNp988snm77//PvE4u76ZNe+ux6v285dffnmn52m1vvnmm5uffvpp591m2c6ad+cT8YuSAgKkZFvmFHXDDTdsnn766dTkN9100+b8+fObmGPfFjuWCJg777xz884772x+++23fXffzJp374MW+mV47grjs5QZR3+7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vNueg5/VExAg9XqiIgIECLQQcA2kRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAgKkRZsUSYAAgXoCAqReT1REgACBFgICpEWbFEmAAIF6AgKkXk9URIAAgRYCAqRFmxRJgACBegICpF5PVESAAIEWAv8HttA74x7SmfMAAAAASUVORK5CYII=" alt="Lider 3" />
      <h3>Lider 3</h3>
      <p>Curabitur sit amet tristique ligula. Nam ornare vel leo id vulputate. Praesent varius quis libero sit amet euismod. Suspendisse arcu turpis, laoreet nec finibus vitae, mollis quis arcu. Mauris eu laoreet mi. Cras malesuada quis mi quis aliquet. Vestibulum molestie velit risus, at rhoncus magna viverra semper.</p>
    </div>
  </div>
</section>

<Divider />

<Section>
  <h2>Conclusiones</h2>
  <p class="mb">
    Dentro de los principales hallazgos, encontramos una compleja red de
    instituciones religiosas interconectas en la comuna de Quilicura que son el
    soporte de prácticas culturales. La red no sólo se compone de iglesias, sino
    también de instituciones públicas, como el Municipio de Quilicura, o el
    cementerio Municipal que permite el desarrollo de ritos como también ayuda a
    la difusión del sistema de creencias haitiano.
  </p>
  <p class="mb">
    La red, tiene un peso reconocido a nivel nacional e internacional y está
    sustenada por párrocos y religosos reconocidos. Es tan graviante el peso de
    dicha red de instituciones religiosas que atrae feligreses de distintos
    puntos de la Región Metropolitana.
  </p>
</Section>

<Footer />
