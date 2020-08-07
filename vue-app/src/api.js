
export default class API {
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
            fetch(url, self.opts_get).then(res => res.json()).then(res => {
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
    SignOut(){
        return this.get('/api/auth/signout')
    }
    getUserProfile(){
        return this.get('/api/user/profile')
    }
    Contacts(){
        return this.get('/api/contacts')
    }
}