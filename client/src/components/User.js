import React from 'react';
import { userAvaPlaceholer } from '../shared/placeholders';
import { Card, CardImg } from 'react-bootstrap'

export const User = ({ user, isPlaceholderToAdd }) => {
    if (isPlaceholderToAdd) {
        return (
            <Card className="border-bottom-primary p-2 hover-up-card h-100 text-center text-primary">
                <i className="fas fa-plus-circle fa-5x my-auto"></i>
            </Card>
        )
    }
    return (
        <Card className="border-bottom-primary p-2 hover-up-card h-100">
            <CardImg src={user.avaUrl || userAvaPlaceholer} className="user-img" />
            <div className="mt-auto">
                <Card.Title className="mt-2 text-center text-primary">{user.firstName} {user.lastName}</Card.Title>
                <Card.Text>{user.bio || `User description`}</Card.Text>
            </div>
        </Card>
    )
}