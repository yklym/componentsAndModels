import { apiLink } from '../shared/apiLink';
import { postData } from '../helpers/http';

export const registerUser = (userData) => {
    const url = apiLink + '/auth/register';
    return postData(url, userData)
          .then(res => res.json());
}

