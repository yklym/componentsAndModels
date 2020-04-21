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
        const { user } = await postData(url, userData).json();
        console.log(user);
        return user;
    }

    static async loginUser(userData) {
        const url = apiLink + '/auth/login';
        const { token } = (await postData(url, userData).json()).response;
        localStorage.setItem('token', token);
        return  AuthService.getCurrentUser();
    }

    static logout() {
        localStorage.removeItem('token');
    }
}

