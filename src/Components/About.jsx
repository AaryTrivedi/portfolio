import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import resume from '../assets/resume.docx';
import cv from '../assets/cv.docx';

export default class About extends Component {
    render() {
        return (
            <Row className="flex-grow-1 py-5 d-flex justify-content-center align-items-center" noGutters >
                <Col
                    className="d-flex justify-content-center align-items-center py-4"
                    md={6}>
                    <img
                        height={500}
                        width={450}
                        src="./images/code.jfif"
                        alt="Code" />
                </Col>
                <Col
                    className="d-flex justify-content-between py-4 flex-column h-500"
                    md={6}>
                    <div className="intro">
                        <h3>Aary Trivedi</h3>
                        <div className="skills">
                            <span>Developer</span> | <span>Designer</span> | <span>Problem Solver</span>
                        </div>
                    </div>
                    <div className="greeting">
                        <h4>Problems Solved Right!</h4>
                        <p className="f-14">
                            Whatever your problems might be, get the correct <strong>solution</strong> for it!
                        </p>
                        <p className="f-14">
                            I <strong>design</strong> and <strong>develop</strong> <strong>web-based</strong> and <strong>platform-targeted</strong> solutions for your problems.
                        </p>
                        <p className="f-14">
                            My skills cover both the <strong>user</strong> and <strong>data</strong> handling for you!
                        </p>
                        <p className="f-14">
                            I write <strong>human readable</strong> code, so next developers can <strong>understand</strong> it.
                        </p>
                        <p className="f-14">
                            <a name="contact" className="link cursor-pointer" onClick={this.props.navigate}>Hire Me!</a> and get all <strong>solutions</strong> at <strong>one</strong> place.
                        </p>
                    </div>
                    <div className="actions">
                        <Button as={'a'} href={resume} download variant="primary" className="rounded-0">
                            Resume
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button as={'a'} href={cv} download variant="info" className="rounded-0 cv-button">
                            CV
                        </Button>
                    </div>
                </Col>
            </Row>
        )
    }
}
