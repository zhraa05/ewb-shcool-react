import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { FaVimeoV, FaPinterest, FaDribbble, FaApple, FaGoogle, FaFileImage } from "react-icons/fa";
const Company = () => {
    return (
        <section>
            <Container >
                <Row>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <FaVimeoV />vimeo
                        </h3>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <FaPinterest />Pinterest  </h3>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <FaDribbble />Dribbble</h3>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <FaApple />Dribbble</h3>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <FaFileImage />FileImage</h3>
                    </Col>
                    <Col lg="2" md="3" sm="4" xs="6">
                        <h3 className=" d-flex align-items-center gap-1">
                            <FaGoogle />Google</h3>
                    </Col>
                </Row></Container>
        </section >
    )
}

export default Company
