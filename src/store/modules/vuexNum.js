const state = {
  count: 1
}
const getters = {
  getStateCount: function (state) {
    return state.count + 1
  }
}
const mutations = {
  add (state, num) {
    state.count = num !== undefined ? Number.parseFloat(state.count) + Number.parseFloat(num) : Number.parseFloat(state.count) + 1
  },
  reduce (state, num) {
    state.count = num !== undefined ? state.count - num : state.count - 1
  }
}
const actions = {
  addValue (context) {
    context.commit('add')
  },
  reduceValue (context) {
    context.commit('reduce')
  },
  addByNumber (context, num) {
    context.commit('add', num)
  },
  reduceByNumber (context, num) {
    context.commit('reduce', num)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
