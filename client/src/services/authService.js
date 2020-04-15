import { apiLink } from '../shared/apiLink';

export const registerUser = (userData) => {
    const url = apiLink + '/auth/register';
    return postData(url, userData); 
}

async function postData(url = '', data = {}) {
    console.log(data);
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
    })
  }