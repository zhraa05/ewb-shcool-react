import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assests/images/hero-img1.png'
import './hearosection.css'

const Herosection = () => {
    return (
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2 className="mb-4 hero__title">
                            Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                        </h2>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                            Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                            quas officiis et repellat!
                        </p>
                    </div>
                    < div className="search">
                        <input type="text" placeholder="Search" />
                        <button className="btn">Search</button>
                    </div>
                </Col>
                <Col md='6' lg='6'>
                    <img src={heroImg} className='w-100' />
                </Col>
            </Row>
        </Container >
    )
}

export default Herosection
