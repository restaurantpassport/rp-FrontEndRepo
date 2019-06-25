import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import { register } from '../actions';

class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            email: ''
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

    register = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
        // .then(() => this.props.history.push("/login"));
    }
    
    render() {
        return(
            <div>
                <Form onSubmit={this.register}>
                    <FormGroup >
                        <Label for='username'>Username: </Label>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    </Col>
                    </FormGroup>

                    <FormGroup >
                        <Label for='password'>Password: </Label>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Input
                    type='text'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    </Col>
                    </FormGroup>

                    <FormGroup >
                        <Label for='email'>Email: </Label>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                    />
                    </Col>
                    </FormGroup>

                <Button color='info' onClick={this.register}>Submit
                    </Button>
                </Form>

            </div>
        )
    }
}

    const mapStateToProps = state => ({
        // error: state.error,
        registering: state.registering
    })

    export default connect(
        mapStateToProps,
        { register }
    )(Register);
