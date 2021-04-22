import { spreadsheetId, googleApi } from '../config/key.json'

export const state = () => ({
  team: [],
  dedication: [],
  meps: [],
  collab: [],
  links: [],
  isLoading: false
})
export const getters = {
  dedication: (state) => {
    return state.dedication
  },
  meps: (state) => {
    return state.meps
  },
  collab: (state) => {
    return state.collab
  },
  team: (state) => {
    return state.team
  },
  links: (state) => {
    return state.links
  },
  isLoading: (state) => {
    return state.isLoading
  }
}
export const mutations = {
  SET_DEDICATION (state, payload) {
    state.dedication = payload
  },
  SET_MEPS (state, payload) {
    state.meps = payload
  },
  SET_COLLAB (state, payload) {
    state.collab = payload
  },
  SET_TEAM (state, payload) {
    state.team = payload
  },
  SET_LINKS (state, payload) {
    state.links = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getLinks')
  },
  async getDedication ({ dispatch, commit }) {
    const params = {
      part: 'snippet,contentDetails',
      playlistId: 'PLAwlsUFueMd_jAA3tEPQ30liTkVdRQDP3',
      key: googleApi,
      maxResults: 10
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$youtube.get('playlistItems', { params })
      const data = res.data.items
      commit('SET_DEDICATION', data)
    } catch (err) {
      commit('SET_DEDICATION', [])
    } finally {
      dispatch('setLoading', false)
    }
  },
  async getCollab ({ dispatch, commit }) {
    const params = {
      part: 'snippet,contentDetails',
      playlistId: 'PLAwlsUFueMd-xNEfwUXXECQrMP-VdsfFN',
      key: googleApi,
      maxResults: 10
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$youtube.get('playlistItems', { params })
      const data = res.data.items
      commit('SET_COLLAB', data)
    } catch (err) {
      commit('SET_COLLAB', [])
    } finally {
      dispatch('setLoading', false)
    }
  },
  async getMeps ({ dispatch, commit }) {
    const params = {
      part: 'snippet,contentDetails',
      playlistId: 'PLAwlsUFueMd9OGF-XQsXCCxEQAbCpVOZ6',
      key: googleApi,
      maxResults: 10
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$youtube.get('playlistItems', { params })
      const data = res.data.items
      commit('SET_MEPS', data)
    } catch (err) {
      commit('SET_MEPS', [])
    } finally {
      dispatch('setLoading', false)
    }
  },
  async getTeam ({ dispatch, commit }) {
    const params = {
      id: spreadsheetId
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$spreadsheet.get('', { params })
      const data = res.data.rows
      commit('SET_TEAM', data)
    } catch (err) {
      commit('SET_TEAM', [])
    } finally {
      dispatch('setLoading', false)
    }
  },
  async getLinks ({ dispatch, commit }) {
    const params = {
      id: spreadsheetId,
      sheet: 2
    }
    try {
      dispatch('setLoading', true)
      const res = await this.$spreadsheet.get('', { params })
      const data = res.data.rows
      commit('SET_LINKS', data)
    } catch (err) {
      commit('SET_LINKS', [])
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
