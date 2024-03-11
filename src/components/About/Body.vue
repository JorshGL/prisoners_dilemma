<template>
  <div class="flex">
    <div class="text-white flex-1 px-10 text-base">
      <h1 class="text-4xl my-3.5" id="title">{{ lang.titleOne }}</h1>
      <p class="">
        La teoría de juegos cuánticos es un campo que combina los principios de
        la mecánica cuántica y la teoría de juegos para estudiar estrategías
        entre agentes. Aunque es un campo relativamente nuevo, existen varios
        posibles avances futuros y desarrollos que se pueden explorar. Los
        futuros avances probablemente involucrarán el desarrollo de estrategias
        cuánticas más complejas y poderosas para los jugadores en los juegos
        cuánticos. Esto puede incluir la creación de nuevos algoritmos
        cuánticos, estrategias con entrelazamiento y técnicas para explotar los
        fenómenos cuánticos. Uno de los juegos más estudiados es el dilema del
        prisionero, el cual es un modelo útil para analizar una variedad de
        situaciones de toma de decisiones estratégicas en las que la cooperación
        y la traición son factores clave.
      </p>
      <br />
      <p>
        Otro enfoque relevante es la validación experimental de las estrategias
        cuánticas utilizando los computadores cuánticos que tenemos a
        disposición hasta el momento. Esto daría un soporte más sólido para la
        exploración de nuevos desarrollos. En general, este campo puede tener
        aplicaciones en economía y finanzas, especialmente en modelar mercados
        financieros complejos y el estudio de interacciones estratégicas entre
        agentes en el contexto de tecnologías cuánticas. El dilema del
        prisionero consisten en lo siguiente, dos prisioneros, A y B,
        sospechosos de cometer un robo juntos, son aislados e instados a
        confesar. A cada uno le preocupa sólo obtener la pena de prisión más
        corta posible para sí mismo; cada uno debe decidir si delatar o callar
        sin conocer la decisión de su compañero. Sin embargo, ambos prisioneros
        conocen de antemano las consecuencias de sus decisiones: (1) si ambos
        delatan, ambos van a la cárcel por tres años; (2) si ninguno delata (se
        quedan callados), ambos van a la cárcel por un año; y (3) si uno delata
        mientras que el otro no lo hace, el delator queda libre y el que calla
        va a la cárcel por 5 años. Aunque ninguno de los prisioneros puede estar
        seguro de lo que hará el otro, sabe que lo mejor que puede hacer para no
        perder es siempre delatar.
      </p>
      <br />
      <p>
        La situación cuando ambos prisioneros delatan se le conoce como
        equilibrio de Nash. Sin embargo, los dos ladrones llegarían a una
        situación óptima si ambos adoptaran la estrategia aparentemente
        irracional de callar; cada uno cumpliría entonces sólo un año en la
        cárcel. A esta última situación se le conoce como Pareto optimal En el
        desarrollo de la PEF se va a crear una interfaz para simular el dilema
        del prisionero cuántico; esto se hará a través de herramientas como
        Python y visual studio. Para la realización de este proyecto se contará
        con el apoyo de la docente Alba Marcela Herrera Trujillo. Los
        integrantes del colectivo no solo pondrán en práctica técnicas de
        programación sino que desarrollarán habilidades para presentar una nueva
        forma de comunicar conceptos científicos complejos. Esto no solo
        representa una innovación en la comunicación científica, sino que
        también brinda la oportunidad de conectar con audiencias más amplias.
        Con esta iniciativa, se facilitará el acceso a la simulación del dilema
        del prisionero cuántico, permitiendo que estudiantes, investigadores y
        entusiastas de la ciencia participen y experimenten directamente con
        conceptos cuánticos. Esto permitirá proporcionar una herramienta
        educativa valiosa donde usuarios de diferentes niveles de conocimiento
        pueden adentrarse en la complejidad del dilema del prisionero cuántico
        de manera intuitiva
      </p>
    </div>
    <div class="flex-col justify-center 2xl:justify-center my-auto">
      <div class="">
        <img :src="data.img.source" alt="Quantum box logo" class="" />
      </div>
      <div class="">
        <img :src="data.img.source" alt="Quantum box logo" class="" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const data = computed(() => {
      return {
        img: {
          source: require(`@/assets/Quantum box.png`),
        },
      };
    });
    const lang = computed(() => store.getters.getLang.acknowledgements);
    return {
      data,
      lang,
    };
  },
};
</script>
<style scoped>
#title {
  color: #eeeeee;
  text-shadow: 2px 2px 2px #e15fed, -2px -2px 2px #6edcd9;
}

.currentRoute {
  text-shadow: 1.5px 1.5px 1.5px #e15fed;
}
</style>
