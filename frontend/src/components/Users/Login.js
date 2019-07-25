import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Link } from 'react-router-dom';

export class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(res => {
                if (res) {
                    this.props.history.push('./users');
                }
            })
    }

    render() {
        return (
            <div className="login">
                <div className="login-section">
                    <div className="login-label">
                        Login
                    </div>
                    <form className="login-form" onSubmit={this.login}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                        <button className="login-btn">
                            Login
                        </button>
                        <Link className="redirect-register" to="/instructor/register">Don't have an Account? Sign up here</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.loginReducer.error,
        loggingIn: state.loginReducer.loggingIn,
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)
