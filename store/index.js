export const state = () => ({
  team: [],
  products: [],
  isLoading: false
})
export const getters = {
  products: (state) => {
    return state.products
  },
  team: (state) => {
    return state.team
  },
  isLoading: (state) => {
    return state.isLoading
  }
}
export const mutations = {
  SET_PRODUCTS (state, payload) {
    state.products = payload
  },
  SET_TEAM (state, payload) {
    state.team = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  // async nuxtServerInit ({ dispatch }) {
  //   await dispatch('getProducts')
  //   await dispatch('getTeam')
  // },
  async getProducts ({ dispatch, commit }) {
    const params = {
      part: 'snippet,contentDetails',
      playlistId: 'PLAwlsUFueMd_jAA3tEPQ30liTkVdRQDP3',
      key: process.env.key
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$youtube.get('playlistItems', { params })
      const data = res.data.items
      commit('SET_PRODUCTS', data)
    } catch (err) {
      commit('SET_PRODUCTS', [])
    } finally {
      dispatch('setLoading', false)
    }
  },
  async getTeam ({ dispatch, commit }) {
    const params = {
      id: '1G2sTOq6CNIIOaw2cAZ630u89iMpWZ3dhSMqCKK4IRUw'
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$axios.get('https://spreadsheet-to-json.vercel.app/api', { params })
      const data = res.data.rows
      commit('SET_TEAM', data)
    } catch (err) {
      commit('SET_TEAM', [])
    } finally {
      dispatch('setLoading', false)
    }
  },
  setLoading ({ commit, state }, newState) {
    if (state.isLoading === true) {
      setTimeout(() => {
        commit('SET_LOADING', newState)
      }, 500)
    } else {
      commit('SET_LOADING', newState)
    }
  }
}