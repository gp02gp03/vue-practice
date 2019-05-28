import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username: '',
    list: [],
    editor: {
      text: ''
    }
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload
      Vue.set(state.editor, 'loading', true);
      // state.editor = { ...state.editor,
      //   loading: true
      // };
    }
  }
})

export default store
