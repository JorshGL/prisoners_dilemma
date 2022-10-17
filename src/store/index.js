import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      lang: 'es',
      entanglementLevel: 0,
      strategy: {
        playerA: 'C',
        playerB: 'C'
      }
    },

    lang: {

      en: {
        navbar: {
          title: "Quantum Prisoner's Dilemma",
          home: "Home",
          about: "About"
        },
        controls: {
          entanglementLevel: "Entanglement level",
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
          entanglementLevel: "Entrelazamiento",
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
    }
  },
  modules: {
  }
})
