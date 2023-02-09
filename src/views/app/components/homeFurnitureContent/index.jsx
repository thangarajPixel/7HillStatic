import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeFurnitureContent = () => {

    return (
        <>
          <section>
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={10} xl={8}>
                <h1 className="heading2 mar-bot-20 text-center">Home Furniture</h1>
                <p className="text-center mar-bot-20">Our Home Furniture range is an exhaustive list of aesthetic and elegant home furniture from comfy sofas to sleek shoe racks and pooja mandapams to kid’s bookshelves, fulfilling everyone’s requirement.</p>
              </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default HomeFurnitureContent;