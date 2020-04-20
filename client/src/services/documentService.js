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
}