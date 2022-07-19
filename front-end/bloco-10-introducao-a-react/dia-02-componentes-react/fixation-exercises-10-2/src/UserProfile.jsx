import React, { Component } from 'react';

class UserProfile extends Component {
    render() {
        const { id, name, email, avatar } = this.props.user;
        return (
            <div>
                <img src={avatar} alt="UserPhoto" />
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        )
    }
}

export default UserProfile;