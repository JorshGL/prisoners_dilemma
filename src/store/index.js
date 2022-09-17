import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      entanglementLevel: 0,
      strategy: {
        playerA: undefined,
        playerB: undefined
      }
    }
  },
  getters: {
  },
  mutations: {
    setEntanglementLevel(state, payload) {
      state.settings.entanglementLevel = payload;
    },
    setStrategyPlayerA(state, payload) {
      state.settings.strategy.playerA = payload.playerA;
    },
    setStrategyPlayerB(state, payload) {
      state.settings.strategy.playerB = payload.playerB;
    }
  },
  actions: {
    async setEntanglementLevel({commit}, payload) {
      return commit("setEntanglementLevel", payload);
    },
    async setStrategy({commit}, payload) {
      payload.player === "A"?
      commit("setStrategyPlayerA", payload.strategy) :
      commit("setStrategyPlayerB", payload.strategy)
    }
  },
  modules: {
  }
})
