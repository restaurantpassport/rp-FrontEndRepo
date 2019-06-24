import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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
        this.props.login(this.state.credentials)
        .then(res => {
            if (res) {
                this.props.history.push('/cities');
            } else {
                return 'Error'
            }
        })
    }
    
    render() {
        return(
            <div>
                <Form onSubmit={this.login}>
                    <FormGroup row>
                        <Label for='username'>Username: </Label>
                    <Input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    </FormGroup>

                    <FormGroup row>
                        <Label for='password'>Password: </Label>
                    <Input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    </FormGroup>

                <Button color='primary' onClick={this.login}>Login
                    </Button>
                </Form>

            </div>
        )
    }
}

    const mapStateToProps = state => ({
        error: state.error,
        loggingIn: state.loggingIn
    })

    export default connect(
        mapStateToProps,
        { login }
    )(Login);






