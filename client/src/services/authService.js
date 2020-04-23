import { apiLink } from '../shared/apiLink';
import { postData } from '../helpers/http';
import jwtDecode from 'jwt-decode';

export class AuthService {

    static getCurrentUser() {
        try {
            return jwtDecode(localStorage.getItem('token'))
        } catch  {
            return {
                _id: '1',
                firstName: 'Andrii',
                lastName: 'Koval',
                email: 'mail@mail.com',
            };
        }
    }

    static isAuthorised() {
        return !!AuthService.getCurrentUser();
    }

    static async registerUser(userData) {
        const url = apiLink + '/auth/register';

        return postData(url, userData).then(resp => {
            return resp.json();

        }).then(userParsed => {
            return userParsed;
        }).catch(exception => {
            return Promise.reject(exception);
        });
    }

    static async loginUser(userData) {
        const url = apiLink + '/auth/login';
        return postData(url, userData).then(resp => {
            return resp.json();

        }).then(parsedResp => {
            console.log(parsedResp);
            const {token} = parsedResp.response;            
            localStorage.setItem('token', token);            

            return AuthService.getCurrentUser();
        }).catch(exception => {
            return Promise.reject(exception);
        });


        
    }

    static logout() {
        localStorage.removeItem('token');
    }
}

