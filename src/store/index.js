import { createStore } from "vuex";

export default createStore({
  state: {
    modalwindow: {
      modalActive: false,
      secondTime: 1,      
    },
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
      },

      es: {
        navbar: {
          title: "Dilema Cuántico de los prisioneros",
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
      },
    },
  },
  getters: {
    getLang(state) {
      return state.settings.lang === "en" ? state.lang.en : state.lang.es;
    },
    getModal(state) {
      return state.modalwindow
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
    toggleModal: function (state) {
      if (state.modalwindow.secondTime <= 2) {
        state.modalwindow.modalActive = !state.modalwindow.modalActive;
        //state.modalwindow.secondTime += 1
      } 
      
    },
  },
  actions: {
    setModalActive({ commit }) {
      return commit("toggleModal");
    },
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
  },
  modules: {},
});
