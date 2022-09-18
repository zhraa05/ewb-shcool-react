import React, { useState } from 'react'
import chooseImg from "../../assests/images/why-choose-us.png";
import { Col, Container, Row } from 'reactstrap'
import { AiFillPlayCircle } from 'react-icons/ai'
import './choosus.css'
import ReactPlayer from "react-player";
const Choosus = () => {

    const [showVideo, setShowVideo] = useState(false);
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="choose__content">
                            <h2>Why Choose Us</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores cupiditate facilis provident quidem accusamus impedit
                                tenetur laboriosam debitis nisi eius!
                            </p>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="choose__img">
                            {showVideo ? <ReactPlayer url='https://youtu.be/_g45BJCAXu4' controls
                                width="100%"
                                height="350px" /> : <img src={chooseImg} alt="" className="w-100" />}

                            {
                                !showVideo && (
                                    <span className="play__icon">
                                        <AiFillPlayCircle onClick={() => {
                                            setShowVideo(!showVideo)
                                        }} />
                                    </span>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choosus
