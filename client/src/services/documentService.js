export class DocumentService {
    static getUserDocuments(userId) {
        return Promise.resolve([
            { title: 'doc', type: 'pdf', bio: 'A simple doc to test !!!!' }, 
            { title: 'foo', type: 'doc', bio: 'Doc lalalalalalalalalalalalalalal lorem ipsum'},
        ])
    }
}