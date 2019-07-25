import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions';
import { Link } from 'react-router-dom';

export class Register extends Component {
    state = {
        user: {
            username: "",
            department: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    };


    register = e => {
        e.preventDefault();
        this.props
            .register(this.state.user)
            .then(res => {
                if (res) {
                    this.props.history.push("/login");
                }
            });
    };

    render() {
        return (
            <div className="register">
                <div className="register-section">
                    <div className="register-label">
                        Register Page
                </div>
                    <form className="register-form" onSubmit={this.register}>

                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.user.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="department"
                            placeholder="Department"
                            value={this.state.user.department}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.user.password}
                            onChange={this.handleChange}
                        />
                        <button className="register-btn">
                            Register
                        </button>
                        <Link className="redirect-login" to="/instructor">Already have an Account? Sign in here</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.registerReducer.error,
        creatingUser: state.registerReducer.creatingUser
    };
};

export default connect(
    mapStateToProps,
    { register }
)(Register);

