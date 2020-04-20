import { apiLink } from '../shared/apiLink';
import { postData } from '../helpers/http';

export class AuthService {

    static get currentUser() {
        return {
            firstName: 'Andrii', 
            lastName: 'Koval', 
            email: 'mail@mail.com', 
        };
    }

    static get isAuthorised() {
        return !!AuthService.currentUser;
    }

    static async registerUser(userData) {
        const url = apiLink + '/auth/register';
        const reponse = await postData(url, userData).json();
        // localStorage.setItem()
        return reponse;
    }
}

