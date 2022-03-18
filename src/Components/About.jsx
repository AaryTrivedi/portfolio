import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import resume from '../assets/resume.pdf';
import cv from '../assets/cv.docx';

export default class About extends Component {
    render() {
        return (
            <Row
                className="flex-grow-1 py-5 d-flex code-bg"
                noGutters>
                {/* <Col
                    className="d-flex justify-content-center align-items-center py-4"
                    md={6}>
                    <img
                        height={500}
                        width={450}
                        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
                        alt="Code" />
                </Col> */}
                <Col
                    className="d-flex mx-5 text-align-center py-4 px-4 flex-column intro-container bg-white"
                    md={5}>
                    <div className="intro py-2">
                        <h3>Aary Trivedi</h3>
                        <div className="skills">
                            <span>Developer</span> | <span>Designer</span> | <span>Problem Solver</span>
                        </div>
                    </div>
                    <div className="greeting mt-4">
                        <p className="f-14">
                            I <strong>design</strong> and <strong>develop</strong> <strong>web-based</strong> and <strong>native</strong> solutions for your problems.
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
                    <div className="actions mt-4 d-flex">
                        <Button as={'a'} href={resume} download variant="primary" className="rounded-0 px-4">
                            Resume
                        </Button>
                    </div>
                </Col>
            </Row>
        )
    }
}
