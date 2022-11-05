import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      lang: 'es',
      wernerParameter: 0,
      strategy: {
        playerA: '0',
        playerB: '0'
      }
    },
    results: {
      years_playerA: 0,
      years_playerB: 0
    },

    lang: {

      en: {
        navbar: {
          title: "Quantum Prisoner's Dilemma",
          home: "Home",
          about: "About"
        },
        controls: {
          wernerParameter: "Werner Parameter",
          buttonsTitle: "Pick your strategy",
          playerATitle: "Player A",
          playerBTitle: "Player B",
          buttons: {
            c: "Cooperate",
            d: "Defect",
            q: "Quantum"
          },
          rounds: "How many rounds you want to play?",
          run: "Run",
        },
        characters: {
          title: "YOUR STRATEGY",
          strategy: {
            c: "Cooperate",
            d: "Deflect",
            q: "Quantum"
          }
        }
      },

      es: {
        navbar: {
          title: "Dilema Cuantico de los prisioneros",
          home: "Inicio",
          about: "Acerca de"
        },
        controls: {
          wernerParameter: "Parametro W",
          buttonsTitle: "Selecciona tu estrategia",
          playerATitle: "Jugador A",
          playerBTitle: "jugador B",
          buttons: {
            cooperate: "Cooperar",
            deflect: "Delatar",
            quantum: "Cuantico"
          },
          rounds: "¿Cuantas rondas deseas jugar?",
          run: "Correr"
        },
        characters: {
          title: "TU ESTRATEGIA",
          strategy: {
            cooperate: "Coopera",
            deflect: "Delata",
            quantum: "Cuantico"
          }
        }
      }
    }
  },
  getters: {
    getLang(state) {
      return state.settings.lang === 'en'?
      state.lang.en : state.lang.es;
    }
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
      state.results.years_playerA = payload.years_playerA
      state.results.years_playerB = payload.years_playerB
    }
  },
  actions: {
    async setEntanglementLevel({commit}, payload) {
      return commit("setEntanglementLevel", payload);
    },
    async setStrategy({commit}, payload) {
      payload.player === 'A'?
      commit("setStrategyPlayerA", payload.strategy) :
      commit("setStrategyPlayerB", payload.strategy)
    },
    async run({commit}, payload) {
      const reqBody = {
        strategy_pA: payload.strategy.playerA,
        strategy_pB: payload.strategy.playerB,
        w: payload.w
      }
      const response = await fetch(
        "http://localhost:5000/years2pay",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody)
        }
      );
      const result = await response.json();
      console.log(reqBody);
      console.log(result);
      commit("setResults", result);
    }
  },
  modules: {
  }
})
