import { apiLink } from '../shared/apiLink';

export class TeamsService {
    static getUserTeams(userId) {
        return Promise.resolve([
            {
                name: 'superMega', members: [
                    {
                        _id: '1',
                        firstName: 'Andrii',
                        lastName: 'Koval',
                        email: 'mail@mail.com',
                    },
                    {
                        _id: '2',
                        firstName: 'Someone',
                        lastName: 'Else',
                        email: 'mail@mail.com',
                        avaUrl: 'https://i.ytimg.com/vi/RkeMc3gXsvY/hqdefault.jpg'
                    }
                ], documents: []
            },
            {
                name: 'megaTeamNuPiamApple', members: [], documents: [
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
                ]
            },
        ])
    }

    static getTeamById(teamId) {
        return Promise.resolve(
            {
                name: 'megaTeamNuPiamApple',
                members: [
                    {
                        _id: '2',
                        firstName: 'Someone',
                        lastName: 'Else',
                        email: 'mail@mail.com',
                        avaUrl: 'https://i.ytimg.com/vi/RkeMc3gXsvY/hqdefault.jpg'
                    },
                    {
                        _id: '1',
                        firstName: 'Andrii',
                        lastName: 'Koval',
                        email: 'mail@mail.com',
                    }
                ],
                documents: [
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
                ]
            }
        )
    }
}