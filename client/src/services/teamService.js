import { apiLink } from '../shared/apiLink';

export class TeamsService {
    static getUserTeams(userId) {
        return Promise.resolve([
            {
                name: 'Developers Team', members: [
                    {
                        _id: '1',
                        firstName: 'Yaroslav',
                        lastName: 'Klymenko',
                        email: 'mail@mail.com',
                    },
                    {
                        _id: '2',
                        firstName: 'Yaroslav',
                        lastName: 'Klymenko',
                        email: 'mail@mail.com',
                        avaUrl: 'https://i.ytimg.com/vi/RkeMc3gXsvY/hqdefault.jpg'
                    }
                ], documents: []
            },
            {
                name: 'Proj Managment', members: [], documents: [
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
                        bio: 'lorem ipsum',
                        date: Date.now(),
                        author: { firstName: 'Yaroslav', lastName: 'Klymenko', _id: '2' }
                    },
                ]
            },
        ])
    }

    static getTeamById(teamId) {
        return Promise.resolve(
            {
                name: 'Developers Team',
                members: [
                    {
                        _id: '2',
                        firstName: 'Yaroslav',
                        lastName: 'Klymenko',
                        email: 'mail@mail.com',
                        avaUrl: 'https://pbs.twimg.com/profile_images/964205320896737281/pHl1kIXg_400x400.jpg'
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
                        bio: 'Doc description',
                        date: Date.now(),
                        author: { firstName: 'Yaroslav', lastName: 'Klymenko', _id: '2' }
                    },
                ]
            }
        )
    }
}