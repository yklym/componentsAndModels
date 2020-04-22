import React, { useState } from 'react';
import { User } from '../components/User';
import { AuthContext } from '../contexts/authContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Document } from '../components/Document';
import { TeamsService } from '../services/teamService';
import { Link } from 'react-router-dom';

export const Team = (props) => {

    const { getCurrentUser } = useContext(AuthContext);
    const [team, setTeam] = useState(null);
    const { id } = useParams();
    console.log(id);

    if (!team)
        TeamsService.getTeamById(id).then(setTeam);


    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{team?.name || 'Loading...'}</h1>
            </div>
            <div className="row">
                {team ?
                    team.members.map(m => <div key={m.id} className="col-6 col-md-4 col-lg-2"> <User user={m} /></div>) :
                    'loading...'}
            </div>
            <div className="d-flex">
                <h2 className="h4 my-4 text-gray-800">Team documents</h2>
                <Link className="ml-auto" to="/documents/new">
                    <div className="nav-btn mx-3 d-flex align-items-center font-weight-bold mt-1">
                        <i className="fas fa-plus-circle fa-2x text-primary"></i>
                        <span className="mx-2 d-none d-sm-none d-md-block">Add document</span>
                    </div>
                </Link>
            </div>

            <div className="row">

                {team ?
                    team.documents.map((d, i) => <div key={i} className="col-12 col-md-6 col-lg-6"><Document document={d} /></div>) :
                    'Loading...'}
            </div>
        </div>
    )
}