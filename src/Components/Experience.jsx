import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Chrono } from 'react-chrono';

export default class Experience extends Component {

    items = [
        {
            cardTitle: "Modern Requirements",
            courseName: "Full Stack Developer",
            year: "2020 - Present",
            cardDetailedText: "Modern Requirements is a requirements management company where I am working as a full-stack developer. Here I work on Express, React, Angular, Node and Neo4j.",
            duties: [
                "Create SPA app using React",
                "Maintain SPA app written in Angular",
                "Handle Neo4j Database",
                "Create REST API using Node and Express"
            ]
        }
    ];

    render() {
        return (
            <Row className="flex-row justify-content-around">
                <div className="education">
                    <h3>Experience</h3>
                    <Chrono
                        hideControls
                        mode="VERTICAL"
                        theme={{
                            primary: "black",
                            secondary: "white"
                        }}>
                        {
                            this.items.map((item, index) => (
                                <div className="edu-card" key={index}>
                                    <div className="edu-card-heading d-flex justify-content-between">
                                        <h5>{item.cardTitle}</h5>
                                        <p>{item.year}</p>
                                    </div>
                                    <div className="edu-card-subheading">
                                        <p>{item.courseName}</p>
                                    </div>
                                    <br />
                                    <div className="edu-card-desc">
                                        <p>{item.cardDetailedText}</p>
                                        Duties:
                                        <ul>
                                            {
                                                item.duties.map((duty, index) => (
                                                    <li key={index}>{duty}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </Chrono>
                </div>
            </Row>
        )
    }
}
