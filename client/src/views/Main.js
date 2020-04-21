import React from 'react'
import { Link } from 'react-router-dom';
import { Team } from '../components/Team';
import { Document } from '../components/Document';


const Teams = ({ teams }) => {
    teams = teams || [];
    const message = (teams).length > 0 ?
        'Continue work with one of your teams!' :
        'Begin with creating your first team or joining one!';
    teams = teams.map(t => (
        <li className="list-item">
            <Link key={t.id} to={'/teams/' + t.id}>
                <Team team={t} />
            </Link>
        </li>
    ));
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Teams</h6>
            </div>
            <div className="card-body">
                <p>{message}</p>
                <ul className="list-group">
                    {teams}
                </ul>
            </div>
        </div>
    )
}

const Documents = ({ documents }) => {
    documents = documents || [];
    const message = document.length ?
        'Continue work with your docs' :
        'Start your work by adding a new document!';
    documents = documents.map(doc => (
        <li className="list-item">
            <Link key={doc.id} to={'/documents/' + doc.id}>
                <Document document={doc} />
            </Link>
        </li>
    ));

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Documents</h6>
            </div>
            <div className="card-body">
                <p>{message}</p>
                <ul className="list-group">
                    {documents}
                </ul>
            </div>
        </div>
    )
}


export const Main = ({ teams, documents }) => { 
    return ( 
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <div className="container-fluid">

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <Teams teams={teams} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <Documents documents={documents} />
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}