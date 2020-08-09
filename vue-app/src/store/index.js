import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var FakeMessages = [
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

export default new Vuex.Store({
  state: {
    auth: 2,
    user: {
      name: 'Unknown'
    },
    chats: [1, 2, 3],
    contacts: [1 ,2 , 3],
    messages: FakeMessages,
    // _fake: FakeMessages
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value
      localStorage.setItem('auth', value)
    },
    setUser(state, user) {
      state.user = user
      localStorage.setItem('last', user.email)
      localStorage.setItem('user', JSON.stringify(user))
    },
    setChats(state, chats) {
      state.chats = chats
    }
  },
  actions: {
  },
  modules: {
  }
})
