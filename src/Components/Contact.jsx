import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
    }

    render() {
        return (
            <Form onSubmit={this.sendMessage}>
                <h4>Contact Me</h4>
                <br />
                <Form.Group controlId="formGroupEmail">
                    <Form.Control name="name" value={this.state.name} onChange={this.handleChange} className="contact-field" type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control name="email" value={this.state.email} onChange={this.handleChange} className="contact-field" type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control name="subject" value={this.state.subject} onChange={this.handleChange} className="contact-field" type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control name="message" value={this.state.message} onChange={this.handleChange} className="contact-field" as="textarea" placeholder="Message" rows={4} />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="primary" className="px-5 send-button">
                        Send
                    </Button>
                </Form.Group>
            </Form>
        )
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    sendMessage = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }
}
