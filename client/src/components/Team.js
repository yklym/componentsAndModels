import React from 'react';

export const Team = ({ team }) => (
    <div className="card border-bottom-primary h-100 py-2 hover-up-card">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xl font-weight-bold text-info text-uppercase mb-1">{team.name}</div>
                    <div className="row no-gutters align-items-finish float-right">
                        <i className="fas fa-user"></i>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
)