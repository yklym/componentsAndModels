import { apiLink } from '../shared/apiLink';
import { postData } from '../helpers/http';

export class AuthService {

    static getCurrentUser() {
        return {
            _id: '1',
            firstName: 'Andrii', 
            lastName: 'Koval', 
            email: 'mail@mail.com', 
        };
    } 

    static isAuthorised() {
        return !!AuthService.currentUser;
    }

    static async registerUser(userData) {
        const url = apiLink + '/auth/register';
        const reponse = await postData(url, userData).json();
        // localStorage.setItem()
        return reponse;
    }
}

