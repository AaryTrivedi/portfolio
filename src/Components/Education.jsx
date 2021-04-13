import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Chrono } from 'react-chrono';

export default class Education extends Component {

    items = [
        {
            cardTitle: "George Brown College",
            courseName: "Computer Programming and Analysis",
            year: "2020 - Present",
            GPA: "3.9",
            cardDetailedText: "In this course I learned about different web technologies such as ASP.NET, PHP and JavaScript. I also got introduced to MEAN and MERN Full-Stack environment and mobile application development. Lastly I completed a capstone project and learned machine learning."
        },
        {
            cardTitle: "Shri Vardhaman Vidyalaya",
            courseName: "High School",
            year: "2017 - 2019",
            GPA: "3.8",
            cardDetailedText: "In high school, my topic was science. I learned about physics, chemistry, maths, and calculus and its application in physics. I was also introduced to different style of writings in English. Also, I was taught C programming language."
        }
    ];

    render() {
        return (
            <Row className="flex-row justify-content-around">
                <div className="education">
                    <h3>Education</h3>
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
                                        <p>GPA: {item.GPA}</p>
                                    </div>
                                    <div className="edu-card-desc">
                                        <p>{item.cardDetailedText}</p>
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
