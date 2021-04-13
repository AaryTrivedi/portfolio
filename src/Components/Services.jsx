import React, { Component } from 'react'
import { Card, CardDeck, Row } from 'react-bootstrap'

export default class Services extends Component {

    services1 = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            title: "React",
            description: "Front-end library for building User Interface"
        },
        {
            img: "https://surround-bg.com/wp-content/uploads/2018/10/laravel-logo.png",
            title: "Laravel",
            description: "PHP MVC Web Application Development Framework"
        },
        {
            img: "https://cdn.iconscout.com/icon/free/png-256/django-2-282855.png",
            title: "Django",
            description: "Python MTV Web Application Development Framework"
        }
    ];

    services2 = [
        {
            img: "https://1000logos.net/wp-content/uploads/2020/08/Ruby-on-Rails-Logo.jpg",
            title: "Rails",
            description: "Ruby MTV Web Application Development Framework"
        },
        {
            img: "https://cdn.worldvectorlogo.com/logos/php.svg",
            title: "PHP",
            description: "Fast Free Back-end programming language"
        },
        {
            img: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
            title: "MySQL",
            description: "One of the most popular RDBMS system."
        }
    ];

    render() {
        return (
            <Row>
                <div className="m-auto services">
                    <h3>Services</h3>
                    <br />
                    <CardDeck>
                        {
                            this.services1.map((service, index) => (
                                <Card className="service-card" key={index}>
                                    <Card.Body>
                                        <img src={service.img} />
                                        <Card.Title>{ service.title }</Card.Title>
                                        <Card.Text>
                                            { service.description }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </CardDeck>
                    <br />
                    <CardDeck>
                        {
                            this.services2.map((service, index) => (
                                <Card className="service-card" key={index}>
                                    <Card.Body>
                                        <img src={service.img} />
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>
                                            {service.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </CardDeck>
                </div>
            </Row>
        )
    }
}
