
export default class API {
    vue_instance = null
    constructor() {
        this.opts_post = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        this.opts_get = {
            method: 'GET',
        }
    }
    get(url) {
        let self = this
        return new Promise(function (resolve, reject) {
            fetch(url, self.opts_get).then(res =>{
                console.log(res.status===404, res.ok)
                if(res.status !== 200 && !res.ok){
                    self.vue_instance.setOfflineMode(true)
                }
                return res.json()
            }).then(res => {
                return resolve(res)
            }).catch(err => {
                return reject(err)
            })
        })
    }
    post(url, body = {}) {
        let self = this
        this.opts_post.body = JSON.stringify(body)
        return new Promise(function (resolve, reject) {
            fetch(url, self.opts_post).then(res => res.json()).then(res => {
                return resolve(res)
            }).catch(err => {
                return reject(err)
            })
        })
    }
    Auth(email, password) {
        return this.post('/api/auth', { email: email, password: password })
    }
    SignOut() {
        return this.get('/api/auth/signout')
    }
    getUserProfile() {
        return this.get('/api/user/profile')
    }
    getChats() {
        return this.get('/api/user/chats')
    }
    getContacts() {
        return this.get('/api/contacts')
    }
    getVueInstance(){
        return this.vue_instance
    }
    setVueInstance(app){
        this.vue_instance = app
    }
}