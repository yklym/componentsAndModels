import React from 'react';



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

// title: { type: String, trim: true }, 
//     url: { type: String, required: true }, 
//     type: { type: String, trim: true }, 
//     author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }

export const Document = ({ document }) => (
    <div className="card border-left-info shadow h-100 py-2 item-card">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xl font-weight-bold text-info text-uppercase mb-1">{document.title}</div>
                    <div className="text-secondary">{document.bio}</div>
                    <div className="d-flex justify-content-end">
                        <IconWithType type={document.type} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)