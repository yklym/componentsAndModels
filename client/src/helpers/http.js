export function postData(url, data = {}) {
    const token = localStorage.getItem('token') || '';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    })
}