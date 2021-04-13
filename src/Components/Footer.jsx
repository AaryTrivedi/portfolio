import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Contact from './Contact'
import Links from './Links'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer" id="#footer">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="justify-content-around">
                            <Contact />
                        </Col>
                        <Col md={3} className="">
                            <Links />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
