import { createStore } from "vuex";

export default createStore({
  state: {
    settings: {
      lang: "es",
      wernerParameter: 0,
      strategy: {
        playerA: "0",
        playerB: "0",
      },
    },
    results: {
      years_playerA: null,
      years_playerB: null,
    },

    lang: {
      en: {
        navbar: {
          title: "Quantum Prisoner's Dilemma",
          home: "Home",
          about: "About",
          change: "EN",
        },
        controls: {
          wernerParameter: "Werner's Parameter",
          buttonsTitle: "Pick your strategy",
          playerATitle: "Player A",
          playerBTitle: "Player B",
          buttons: {
            cooperate: "Cooperate",
            deflect: "Betray",
            quantum: "Quantum",
          },
          rounds: "How many rounds would you like to play?",
          run: "Run",
        },
        characters: {
          title: "YOUR STRATEGY",
          playerATitle: "PLAYER A",
          playerBTitle: "PLAYER B",
          strategy: {
            cooperate: "Cooperate",
            deflect: "Betray",
            quantum: "Quantum",
          },
        },
        results: {
          title: "Results",
          playerATitle: "Player A",
          playerBTitle: "Player B",
        },
        acknowledgements: {
          titleOne: "What is it?",
          titleTwo: "What is it for?",
          thanksTo: "Special thanks to",
        },
        body: {
          p1: `<p class=""> The research and dissemination of quantum computing have increased in recent years; however
            , <strong>what is the purpose of this?</strong><br /><br />One of the most notable applications of this is in 
            game theory, as in the not-so-distant future, it could optimize strategies, improve application rendering, and
            work closely with AI to make the user's experience more immersive. </p> <br /> <p> A problem that can explain 
            the importance of quantum computing is the <span class="bg-gradient-to-r 
            from-rose-400 to-purple-400 font-bold bg-clip-text text-transparent" >prisoner's dilemma
            </span >, which is a useful model for analyzing a variety of strategic
              decision-making situations in which <strong>cooperation</strong> and <strong>betrayal</strong> are key factors. </p>`,
          p2: `The prisoner's dilemma is a problem in which there are two prisoners who have committed a crime together.`,
          p3: `Suppose the prisoners are separated and each is told that their sentence will be reduced to 3 years if and only if both <span class="text-rose-400 font-semibold">betray</span> each other.`,
          p4: ` Otherwise, if both <span class="text-rose-400 font-semibold">remain silent</span>, they will have a sentence of only 1 year in prison.`,
          p5: `The last case is that if the prisoners give different answers, the sentence for the one who did not betray will be 5 years and the other will go free.`,
          p6: `If the results are put into a table, we get the following matrix:`,
          p7: `If we analyze the matrix, what would be the best option? For both prisoners, the best option is to <span class="text-rose-400 italic">betray</span> since both prisoners would be in a <span class="font-semibold italic">better</span> condition than the others, in which they will not risk being imprisoned for 5 years, which is likely if they remain silent.`,
          p8: `However, thanks to <span class="text-[#00f7ff] italic">quantum theory</span>, the probabilities of obtaining each of these sentences <span class="text-3xl font-bold">change</span>.`,
          prisioner: "Prisoners",
          yearOne: "1 year",
          yearThree: "3 years",
          yearFive: "5 years",
          optionOne: "Betray",
          optionTwo: "Silent",
          optionThree: "Quantum",
          free: "Free",
        },
      },

      es: {
        navbar: {
          title: "Dilema Cuántico de los Prisioneros",
          home: "Inicio",
          about: "Acerca de",
          change: "ES",
        },
        controls: {
          wernerParameter: "Parámetro W",
          buttonsTitle: "Selecciona tu estrategia",
          playerATitle: "Jugador A",
          playerBTitle: "Jugador B",
          buttons: {
            cooperate: "Cooperar",
            deflect: "Delatar",
            quantum: "Cuántico",
          },
          rounds: "¿Cuántas rondas deseas jugar?",
          run: "Correr",
        },
        characters: {
          title: "TU ESTRATEGIA",
          playerATitle: "JUGADOR A",
          playerBTitle: "JUGADOR B",
          strategy: {
            cooperate: "Coopera",
            deflect: "Delata",
            quantum: "Cuantico",
          },
        },
        results: {
          title: "Resultados",
          playerATitle: "Jugador A",
          playerBTitle: "Jugador B",
        },
        acknowledgements: {
          titleOne: "¿Qué es?",
          titleTwo: "¿Para qué sirve?",
          thanksTo: "Agradecimientos a",
        },
        body: {
          p1: `
          
          <div class='flex flex-col justify-center text-5xl my-10 '>

          <div class='flex justify-center'><p>Las computadoras cuánticas son poderosas, pero...</p></div>
          <div class='flex justify-center'><strong class="text-8xl italic mt-2 bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-200">¿sabes cuánto?</strong></p></div>
          </div>
          
          <p>
          Hace más de 40 años Paul Benioff introdujo una expresión denominada <span class='italic'>'Computación Cuántica'</span>. 43 años más tarde, La computación cuántica 
          es reconocida como la relación entre la informática, las matemáticas y la teoría cuántica que <strong class='text-xl italic'>podrá cambiar el mundo</strong>. </p><br/>
          
<p>
          Son capaces 
          de ejecutar en segundos algoritmos que tomarían DECADAS en sistemas convencionales, capaces de optimizar estrategias de los juegos más complicados, 
          pueden mejorar la seguridad bancaria y monetaria en el mundo; renderizar gráficos a gran escala permitiendo que los juegos
           se conviertan en una realidad más allá de una PANTALLA 
          e incluso trabajar de la mano con aquello que está revolucionando el mundo: <span class='italic text-sky-400'><strong> La Inteligencia Artificial </strong></span>.
        </p>
        <br />
        <p>
          Un problema que puede explicar la importancia de la computación
          cuántica es el
          <span
            class="bg-gradient-to-r from-rose-400 to-purple-400 font-bold bg-clip-text text-transparent"
            >dilema del prisionero</span
          >, el cual es un modelo útil para analizar una variedad de situaciones
          de toma de decisiones estratégicas en las que la
          <strong>cooperación</strong> y <strong>la traición</strong> son
          factores clave.
        </p>`,
          p2: `El dilema del prisionero, es un problema en el que hay dos
              prisioneros que han cometido un crimen juntos.`,
          p3: `Suponga que los prisioneros son separados y se les dice a
                    cada uno que su pena será reducida a 3 años si y solo si,
                    los dos
                    <span class="text-rose-400 font-semibold">delatan</span>
                    al otro.`,
          p4: `
                    En caso contrario, si los dos
                    <span class="text-rose-400 font-semibold">callan</span>,
                    tendrán una pena de tan solo 1 año de prisión.`,
          p5: `
                    El último caso es que si los prisioneros tienen respuestas
                    distintas, la pena del que no delató será de 5 años y el
                    otro saldrá libre.`,
          p6: `Si los resultados son puestos en una tabla, obtenemos la
                  siguiente matriz:`,
          p7: `Si analizamos la matriz, ¿qué sería lo mejor? Para los dos
              prisioneros, lo mejor es que
              <span class="text-rose-400 italic">delataran</span> puesto que los
              dos prisioneros quedarían en una condición
              <span class="font-semibold italic">mejor</span> que las demás, en
              la que no correran el riesgo de ser encarcelados por 5 años, lo
              cual es probable en caso de que callen.`,
          p8: `Sin embargo, gracias a la
              <span class="text-[#00f7ff] italic"> teoría cuántica</span> las
              probabilidades de obtener cada una de estas condenas
              <span class="text-3xl font-bold">cambia</span>.`,
          prisioner: "Prisioneros",
          yearOne: "1 año",
          yearThree: "3 años",
          yearFive: "5 años",
          optionOne: "Delata",
          optionTwo: "Calla",
          optionThree: "Cuántico",
          free: "Libre",
        },
      },
    },
  },
  getters: {
    getLang(state) {
      return state.settings.lang === "en" ? state.lang.en : state.lang.es;
    },
  },
  mutations: {
    setEntanglementLevel(state, payload) {
      state.settings.entanglementLevel = payload;
    },
    setStrategyPlayerA(state, payload) {
      state.settings.strategy.playerA = payload;
    },
    setStrategyPlayerB(state, payload) {
      state.settings.strategy.playerB = payload;
    },
    setResults(state, payload) {
      state.results.years_playerA = payload.years_playerA;
      state.results.years_playerB = payload.years_playerB;
    },
    changeLanguage: function (state) {
      state.settings.lang === "en"
        ? (state.settings.lang = "es")
        : (state.settings.lang = "en");
    },
  },
  actions: {
    async setEntanglementLevel({ commit }, payload) {
      return commit("setEntanglementLevel", payload);
    },
    async setStrategy({ commit }, payload) {
      payload.player === "A"
        ? commit("setStrategyPlayerA", payload.strategy)
        : commit("setStrategyPlayerB", payload.strategy);
    },
    async run({ commit }, payload) {
      const reqBody = {
        strategy_pA: payload.strategy.playerA,
        strategy_pB: payload.strategy.playerB,
        w: payload.w,
      };
      const response = await fetch("http://localhost:5000/years2pay", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });
      const result = await response.json();
      console.log(result);
      commit("setResults", result);
    },
    async startServ({ commit }, payload) {
      const response = await fetch("http://localhost:5000/startServ", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });
      const result = await response.json();
      console.log(result);
      commit("setResults", result);
    },
  },
  modules: {},
});
