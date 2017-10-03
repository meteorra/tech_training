export default class LoginApi {
    static fetchLogin(creds) {
        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            body: `username=${creds.username}&password=${creds.password}`
        };

        return fetch('apiurl', config)
            .then(response => response.json())
            .catch(error => error);
    }
}
