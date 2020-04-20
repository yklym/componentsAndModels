export class DocumentService {
    static getUserDocuments(userId) {
        return Promise.resolve([
            {
                title: 'doc',
                type: 'pdf',
                bio: 'A simple doc to test !!!!',
                date: Date.now() - 180 * 100000,
                author: { firstName: 'andrey', lastName: 'koval', _id: 'dsjjfksnvkdjv' }
            },
            {
                title: 'foo',
                type: 'doc', 
                bio: 'Doc lalalalalalalalalalalalalalal lorem ipsum', 
                date: Date.now(), 
                author: { firstName: 'andrey', lastName: 'koval', _id: '1' }
            },
        ])
    }

    static addDocument(formValue) {
        const formData = new FormData();
        const file = formValue.file[0];
        formData.append('file', file);
        formData.append('title', formValue.title || file.name);
        formData.append('bio', formValue.bio || 'No bio provided');
        
        const fileExt = file.name.slice(file.name.lastIndexOf('.') + 1) || '';
        
        formData.append('type', fileExt);
        
        return fetch('https://google.com', {
            method: 'POST', 
            body: formData
        })
        .then(res => res.json())
    }
}