import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { RiDraftLine, RiDiscussLine, RiContactsBookLine } from "react-icons/ri"
import './feature.css'
const FeatureData = [
    {
        title: "Quick Learning",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: <RiDraftLine />,
    },

    {
        title: "All Time Support",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: <RiDiscussLine />,
    },

    {
        title: "Certification",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: <RiContactsBookLine />
    },
];

const Feuature = () => {
    return (
        <section>
            <Container>
                <Row>
                    {FeatureData.map((item, index) => (
                        <Col lg="4" md="6" key={index}>
                            <div className="single__feature text-center px-4">
                                <h2 className="mb-3">
                                    <i> {item.icon}</i>

                                </h2>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Feuature
