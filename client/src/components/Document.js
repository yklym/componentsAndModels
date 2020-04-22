import React from 'react';
import * as moment from 'moment';
import { AuthService } from '../services/authService';


const getDoctypeColorClass = type => {
    const typesColors = {
        'xls': 'text-success',
        'xlsx': 'text-success',
        'pdf': 'text-danger',
        'doc': 'text-info',
        'pptx': 'text-danger'
    }

    return typesColors[type] || 'text-dark';
}

const getDoctypeIconClass = type => {
    const typesIcons = {
        'xls': 'file-excel',
        'xlsx': 'file-excel',
        'pdf': 'file-pdf',
        'csv': 'file-pdf',
        'doc': 'file-word'
    }

    return typesIcons[type] || 'file-alt';
}

const IconWithType = ({ type }) => (
    <i className={'fas fa-' + getDoctypeIconClass(document.type) + ` ${getDoctypeColorClass(type)}`}>{type}</i>
)

const formatDate = (date) => moment(date).startOf('minute').fromNow();

// title: { type: String, trim: true }, 
//     url: { type: String, required: true }, 
//     type: { type: String, trim: true }, 
//     author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }

export const Document = ({ document }) => (
    <div className="card border-left-info h-100 py-2 hover-right-card">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xl font-weight-bold text-info text-uppercase mb-1">{document.title}</div>
                    <div className="text-secondary">{document.bio}</div>
                    <div className="text-info">Author: {document.author._id === 
                                                    AuthService.getCurrentUser()._id ?
                                                    'You' :
                                                    `${document.author.firstName} ${document.author.lastName}`}</div>
                    <div className="d-flex justify-content-between mt-2">
                        <datetime>Created {formatDate(document.date)}</datetime>
                        <IconWithType type={document.type} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)