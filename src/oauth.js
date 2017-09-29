import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'tech-training.auth0.com',
        clientID: 'SAm3fw1mh6U1QeURqD3Ts1DdBHtlrgbk',
        redirectUri: 'http://localhost:3000/app',
        audience: 'https://tech-training.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}
