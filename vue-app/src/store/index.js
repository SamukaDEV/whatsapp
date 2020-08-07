import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: 2,
    contacts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    messages: [
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none',
        time: new Date(),
        self: false
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, ',
        time: new Date(),
        self: true
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, ',
        time: new Date(),
        self: true
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, ',
        time: new Date(),
        self: false
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, ',
        time: new Date(),
        self: false
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, Lorem ipsun dollor sit amet none, ',
        time: new Date(),
        self: true
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none',
        time: new Date(),
        self: false
      },
      {
        _id: 0,
        content: 'Lorem ipsun dollor sit amet none',
        time: new Date(),
        self: true
      },
      {
        _id: 0,
        content: 'Are u here?',
        time: new Date(),
        self: true
      },
      {
        _id: 0,
        content: 'Hi',
        time: new Date(),
        self: true
      },
    ]
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value
    }
  },
  actions: {
  },
  modules: {
  }
})
