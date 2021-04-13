import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Links extends Component {
    render() {
        return (
            <div className="links">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <p>
                                <a target="_blank" href="https://www.github.com/AaryTrivedi">
                                    <i className="fab fa-github"></i>  Github
                                </a>
                            </p>
                            <p>
                                <a target="_blank" href="https://www.linkedin.com/in/aary-trivedi-b7b912147/">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </p>
                            <p>
                                <a target="_blank" href="https://twitter.com/aary_trivedi">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
