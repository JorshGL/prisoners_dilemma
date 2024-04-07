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
          p1: `
          
          <div class='flex flex-col justify-center text-3xl lg:text-5xl my-5'>
          <div class='lg:indent-12 flex justify-center text-center font-semibold'><p>Quantum Computers Are Powerful,<br/> but...</p></div>
            <div class='flex justify-center text-center'>
            <strong class="text-5xl lg:text-8xl italic bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-200">
            How much?
            </strong>
            </div>
          </div>
          
          <p>
          Over 40 years ago, Paul Benioff introduced <span class='italic'>'Quantum Computing'</span>. 43 years later, it is a new way of processing information
           that promises to <strong class='text-xl italic'>revolutionize the world of machines</strong>. 
          </p><br/>
          

          <p>
          They are capable of running algorithms that would take DECADES on conventional systems in <span class='font-semibold'>a matter of seconds</span>,
          improving the banking security worldwide and optimizing strategies in video games achieving an immersive experience 
          thanks to the graphics rendering and even more with the new global trend:
            <span class='italic text-sky-400'><strong> Artificial Intelligence </strong></span>.
        </p>
        <br />
        <p>
          A problem that can explain more clearly the importance of quantum computing is the
          <span
            class="bg-gradient-to-r from-rose-400 to-purple-400 font-bold bg-clip-text text-transparent"
            >prisoner's dilemma</span
          >, which is a useful model for analyzing a variety of strategic decision-making situations in which
          <strong>cooperation</strong> and <strong>betrayal</strong> are key factors.
        </p> <br/>
  `,
          p2: `The prisoner's dilemma is a problem in which there are two prisoners who have committed a crime together.`,
          p3: `Suppose the prisoners are separated and each is told that their sentence will be reduced to 3 years if and only if both
          <span class="text-rose-400 font-semibold">betray</span>
          each other.`,
          p4: `
          Otherwise, if both
          <span class="text-rose-400 font-semibold">keep quiet</span>,
          they will have a sentence of only 1 year in prison.`,
          p5: `
          The last case is that if the prisoners <span class='font-medium'><i>give different answers</i></span>, the sentence for the one who did not betray will be 5 years and the
          other will go <span class="bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-400">free</span>.`,
          p6: `The results are listed in the following matrix:`,
          p7: `Analyzing it, what would be the best option? For both prisoners, the best option is to
          <span class="text-rose-400 italic">betray</span> since both will be in a 
          <span class="font-semibold italic">advantageous condition</span> than the other possible ones,
          in which they will not risk being imprisoned for 5 years.`,
          p8: `However, thanks to
          <span class="text-[#00f7ff] italic"> quantum theory</span>, the
          probabilities of obtaining each of these sentences
          <span class="text-3xl font-bold italic">change</span>.`,
          prisoner: "Prisoners",
          yearOne: "1 year",
          yearThree: "3 years",
          yearFive: "5 years",
          optionOne: "Betray",
          optionTwo: "Keep Quiet",
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
          
          <div class='flex flex-col justify-center text-3xl lg:text-5xl my-5 '>

          <div class='flex justify-center text-center font-semibold'><p>Las computadoras cuánticas son poderosas, pero...</p></div>
          <div class='flex justify-center'>
            <strong class="lg:text-8xl text-5xl italic mt-2 bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-200 text-center ">
            ¿Qué tanto?
            </strong>
            </div>
          </div>
          
          <p>
          Hace más de 40 años Paul Benioff introdujo la <span class='italic'>'Computación Cuántica'</span>. 43 años más tarde, es una nueva forma de procesamiento de la información
           que promete <strong class='text-xl italic'>revolucionar el mundo de las máquinas</strong>. 
          </p><br/>
          

          <p>
          Son capaces de ejecutar en <span class='font-semibold'>cuestión de segundos</span> algoritmos que tomarían DECADAS en sistemas convencionales,
          de mejorar la seguridad bancaria del mund y de optimizar estrategias en videojuegos logrando una experiencia inmersiva 
          gracias a la renderización de los gráficos y más aún con la nueva tendencia mundial:
            <span class='italic text-sky-400'><strong> La Inteligencia Artificial </strong></span>.
        </p>
        <br />
        <p>
          Un problema que puede explicar de una manera más clara la importancia de la computación
          cuántica es el
          <span
            class="bg-gradient-to-r from-rose-400 to-purple-400 font-bold bg-clip-text text-transparent"
            >dilema del prisionero</span
          >, el cual es un modelo útil para analizar una variedad de situaciones
          de toma de decisiones estratégicas en las que la
          <strong>cooperación</strong> y <strong>la traición</strong> son
          factores clave.
        </p> <br/>`,
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
                    El último caso es que si los prisioneros <span class='font-medium'><i>tienen respuestas
                    distintas</i></span>, la pena del que no delató será de 5 años y el
                    otro saldrá <span class="bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-400">libre</span>.`,
          p6: `Los resultados obtenidos se colocan en la siguiente matriz:`,
          p7: `Si analizamos la matriz, ¿Qué sería lo mejor?. Para los dos
              prisioneros, lo mejor es que
              <span class="text-rose-400 italic">delataran</span> ya que ambos 
              quedarían en una condición
              <span class="font-semibold italic">de ventaja</span> que las demás posibles,
              en la que no correran el riesgo de ser encarcelados por 5 años.`,
          p8: `Sin embargo, gracias a la
              <span class="text-[#00f7ff] italic"> teoría cuántica</span> las
              probabilidades de obtener cada una de estas condenas
              <span class="text-3xl font-bold italic">cambian</span>.`,
          prisoner: "Prisioneros",
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
