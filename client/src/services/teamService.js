import { apiLink } from '../shared/apiLink';

export class TeamsService {
    static getUserTeams(userId) {
        return Promise.resolve([
            { name: 'superMega', members: [], documents: [] },
            { name: 'megaTeamNuPiamApple', members: [], documents: [ 'kek' ] },
        ])
    }
}