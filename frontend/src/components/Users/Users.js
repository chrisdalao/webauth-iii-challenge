import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions';
// import { Link } from 'react-router-dom';

export class Users extends Component {

    componentDidMount() {
        this.props.getAllUsers()
    }

    render() {
        return (
            <div className="home">
                <div className="users">
                    {this.props.users.map(user => {
                        return (
                            <div key={user.id}>
                                <div>{user.id}</div>
                                <div>{user.username}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
    }
}

export default connect(
    mapStateToProps,
    {
        getAllUsers,
    }
)(Users)
