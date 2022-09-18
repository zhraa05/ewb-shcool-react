import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './news.css'

const News = () => {
    return (

        <section>
            <Container className="newsletter">
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="mb-4">Subscribe Our Newsletter</h2>
                        <div className="subscribe">
                            <input type="text" placeholder="Email" />

                        </div>
                        <button className="btn">Subscribe</button>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default News
