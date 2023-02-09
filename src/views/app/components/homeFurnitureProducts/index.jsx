import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SofaData from '../../data/sofa.json';
import CotData from '../../data/cot.json';
import CenterTableData from '../../data/centertable.json';
import NightStandData from '../../data/nightstand.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ProductEnquiryResponse } from "../../helpers/FormResponse";
// import { API_URL } from "../../constant/apiRoute";

const HomeFurnitureProducts = () => {   

    const initialShowState = Object.fromEntries(
        SofaData.map((sofas) => [sofas.title, false]),
        CotData.map((cots) => [cots.title, false]),
        CenterTableData.map((centertables) => [centertables.title, false]),
        NightStandData.map((nightstands) => [nightstands.title, false])
    );
    const [show, setShow] = React.useState(initialShowState);
    const toggleShow = (id) =>
        setShow((prev) => {
            return { ...prev, [id]: !prev[id] };
        });


        const {
            register,
            formState: { errors },
            handleSubmit,
            reset,
          } = useForm();
        
          const onSubmit = (data) => {
            console.log(data);
            var formdata = new FormData();
            formdata.append("name", data.name);
            formdata.append("email", data.email);
            formdata.append("mobile", data.mobile);
            formdata.append("companyname", data.companyname);
            formdata.append("city", data.city);
        
            var requestOptions = {
              method: "POST",
              body: formdata,
              redirect: "follow",
            };
        
            fetch(
              "http://192.168.0.56/7hillAdmin/public/api/contact-us",
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => {
                ProductEnquiryResponse();
                reset();
              })
              .catch((error) => console.log("error", error));
          };
        
        return (
            <>
            <section className="orange-bg">            
              <Container>
                <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={5}>
                  <h2 className="heading2 mar-bot-30 text-center">Our Range of Furniture</h2>
                </Col>
                </Row>
                <Row>
                  <Col className="home-tabs products-tab">
                    <Tabs defaultActiveKey="sofa" id="home-tabs">
                      <Tab eventKey="sofa" title="Sofa">
                        <Row className="justify-content-center">
                            {SofaData.map((sofas, key) => {
                                    return (
                              <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                                  <div className="products-div">
                                      <div className="product-image">
                                        <a href={sofas.image} data-fancybox="gallery1" data-caption={sofas.title}>
                                          <img src={sofas.image} alt="" className="img-fluid" />
                                        </a>
                                      </div>
                                      <h4 className="text-center">{sofas.title}</h4>
                                      <div className="products-buttons">
                                          <Button className="enquire-btn" onClick={() => toggleShow(sofas.title)}>Enquire Now</Button>
                                      </div>
                                  </div>
                              </Col>
                              );
                            })}
                        </Row>                        
                      </Tab>
                      <Tab eventKey="cot" title="Cot">
                        <Row className="justify-content-center">
                            {CotData.map((cots, key) => {
                                    return (
                              <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                                  <div className="products-div">
                                      <div className="product-image">
                                        <a href={cots.image} data-fancybox="gallery2" data-caption={cots.title}>
                                          <img src={cots.image} alt="" className="img-fluid" />
                                        </a>                                        
                                      </div>
                                      <h4 className="text-center">{cots.title}</h4>
                                      <div className="products-buttons">
                                          <Button className="enquire-btn" onClick={() => toggleShow(cots.title)}>Enquire Now</Button>
                                      </div>
                                  </div>
                              </Col>
                              );
                            })}
                        </Row>
                      </Tab>
                      <Tab eventKey="center-table" title="Center Table">
                        <Row className="justify-content-center">
                              {CenterTableData.map((centertables, key) => {
                                      return (
                                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <div className="products-div">
                                        <div className="product-image">
                                          <a href={centertables.image} data-fancybox="gallery3" data-caption={centertables.title}>
                                            <img src={centertables.image} alt="" className="img-fluid" />
                                          </a>  
                                        </div>
                                        <h4 className="text-center">{centertables.title}</h4>
                                        <div className="products-buttons">
                                            <Button className="enquire-btn" onClick={() => toggleShow(centertables.title)}>Enquire Now</Button>
                                        </div>
                                    </div>
                                </Col>
                                );
                              })}
                          </Row>                     
                      </Tab>
                      <Tab eventKey="night-stand" title="Night Stand">
                        <Row className="justify-content-center">
                              {NightStandData.map((nightstands, key) => {
                                      return (
                                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <div className="products-div">
                                        <div className="product-image">
                                          <a href={nightstands.image} data-fancybox="gallery4" data-caption={nightstands.title}>
                                            <img src={nightstands.image} alt="" className="img-fluid" />
                                          </a>  
                                        </div>
                                        <h4 className="text-center">{nightstands.title}</h4>
                                        <div className="products-buttons">
                                            <Button className="enquire-btn" onClick={() => toggleShow(nightstands.title)}>Enquire Now</Button>
                                        </div>
                                    </div>
                                </Col>
                                );
                              })}
                          </Row>
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
              </Container>
            </section>               
               

          {SofaData.map(sofamodel => {
                    return (
                        <Modal show={show[sofamodel.title]} onHide={() => toggleShow(sofamodel.title)} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>                             
                        </Modal.Header>
                            <Modal.Body>
                            <Container>
                              <Row className="align-items-center">
                                  <Col>
                                      <div className="px-3 mob-pad-bot-20">
                                          <h3 className="heading3">Product Enquiry</h3>
                                          <Form onSubmit={handleSubmit(onSubmit)} className="career-form">
                                            <Form.Group className="mar-bot-30 position-relative" controlId="name">
                                                <Form.Control
                                                type="text"
                                                placeholder="Name *"
                                                {...register("name", {
                                                    required: "Enter your Name",
                                                })}
                                                />
                                                <ErrorMessage
                                                errors={errors}
                                                name="name"
                                                render={({ message }) => (
                                                    <small className="text-danger ml-2">* {message}</small>
                                                )}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mar-bot-30 position-relative" controlId="email">
                                                <Form.Control
                                                type="email"
                                                placeholder="Email *"
                                                {...register("email", {
                                                    required: "Enter your Email ID",
                                                    pattern: {
                                                    value:
                                                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                    message: "Invalid email address!",
                                                    },
                                                })}
                                                />
                                                <ErrorMessage
                                                errors={errors}
                                                name="email"
                                                render={({ message }) => (
                                                    <small className="text-danger ml-2">* {message}</small>
                                                )}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mar-bot-30 position-relative" controlId="contactnumber">
                                                <Form.Control
                                                type="tel"
                                                placeholder="Contact Number *"
                                                {...register("mobile", {
                                                    required: "Enter your Contact Number",
                                                    pattern: {
                                                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                                    message: "Not a valid Phone Number",
                                                    },
                                                })}
                                                />
                                                <ErrorMessage
                                                errors={errors}
                                                name="mobile"
                                                render={({ message }) => (
                                                    <small className="text-danger ml-2">* {message}</small>
                                                )}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mar-bot-30 position-relative" controlId="companyname">
                                                <Form.Control
                                                type="text"
                                                placeholder="Company Name *"
                                                {...register("companyname", {
                                                    required: "Enter your Company Name",
                                                })}
                                                />
                                                <ErrorMessage
                                                errors={errors}
                                                name="companyname"
                                                render={({ message }) => (
                                                    <small className="text-danger ml-2">* {message}</small>
                                                )}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mar-bot-30 position-relative" controlId="city">
                                                <Form.Control
                                                type="text"
                                                placeholder="City *"
                                                {...register("city", {
                                                    required: "Enter your City",
                                                })}
                                                />
                                                <ErrorMessage
                                                errors={errors}
                                                name="city"
                                                render={({ message }) => (
                                                    <small className="text-danger ml-2">* {message}</small>
                                                )}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mar-bot-30" controlId="product">
                                                <Form.Control type="text" value={sofamodel.title} disabled />
                                              </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            </Form>
                                          
                                      </div>
                                  </Col>
                              </Row>
                            </Container>
                          </Modal.Body>
                    </Modal>
                    );
                })}


                {CotData.map(cotmodel => {
                    return (
                        <Modal show={show[cotmodel.title]} onHide={() => toggleShow(cotmodel.title)} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>                             
                        </Modal.Header>
                            <Modal.Body>
                            <Container>
                              <Row className="align-items-center">
                                  <Col>
                                      <div className="px-3 mob-pad-bot-20">
                                          <h3 className="heading3">Product Enquiry</h3>
                                          <Form>
                                              <Form.Group className="mar-bot-30" controlId="name">
                                                  <Form.Control type="text" placeholder="Name *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="contactnumber">
                                                  <Form.Control type="tel" placeholder="Contact Number *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="email">
                                                  <Form.Control type="email" placeholder="Email ID *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="companyname">
                                                  <Form.Control type="text" placeholder="Company Name" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="city">
                                                  <Form.Control type="text" placeholder="City *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="product">
                                                <Form.Control type="text" value={cotmodel.title} disabled />
                                              </Form.Group>
                                              <p className="text-center mb-0">
                                                  <Button variant="primary" type="submit">Submit</Button>
                                              </p>
                                          </Form>
                                      </div>
                                  </Col>
                              </Row>
                            </Container>
                          </Modal.Body>
                    </Modal>
                    );
                })}


                {CenterTableData.map(centertablemodel => {
                    return (
                        <Modal show={show[centertablemodel.title]} onHide={() => toggleShow(centertablemodel.title)} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>                             
                        </Modal.Header>
                            <Modal.Body>
                            <Container>
                              <Row className="align-items-center">
                                  <Col>
                                      <div className="px-3 mob-pad-bot-20">
                                          <h3 className="heading3">Product Enquiry</h3>
                                          <Form>
                                              <Form.Group className="mar-bot-30" controlId="name">
                                                  <Form.Control type="text" placeholder="Name *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="contactnumber">
                                                  <Form.Control type="tel" placeholder="Contact Number *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="email">
                                                  <Form.Control type="email" placeholder="Email ID *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="companyname">
                                                  <Form.Control type="text" placeholder="Company Name" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="city">
                                                  <Form.Control type="text" placeholder="City *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="product">
                                                <Form.Control type="text" value={centertablemodel.title} disabled />
                                              </Form.Group>
                                              <p className="text-center mb-0">
                                                  <Button variant="primary" type="submit">Submit</Button>
                                              </p>
                                          </Form>
                                      </div>
                                  </Col>
                              </Row>
                            </Container>
                          </Modal.Body>
                    </Modal>
                    );
                })}


                {NightStandData.map(nightstandmodel => {
                    return (
                        <Modal show={show[nightstandmodel.title]} onHide={() => toggleShow(nightstandmodel.title)} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>                             
                        </Modal.Header>
                            <Modal.Body>
                            <Container>
                              <Row className="align-items-center">
                                  <Col>
                                      <div className="px-3 mob-pad-bot-20">
                                          <h3 className="heading3">Product Enquiry</h3>
                                          <Form>
                                              <Form.Group className="mar-bot-30" controlId="name">
                                                  <Form.Control type="text" placeholder="Name *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="contactnumber">
                                                  <Form.Control type="tel" placeholder="Contact Number *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="email">
                                                  <Form.Control type="email" placeholder="Email ID *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="companyname">
                                                  <Form.Control type="text" placeholder="Company Name" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="city">
                                                  <Form.Control type="text" placeholder="City *" />
                                              </Form.Group>
                                              <Form.Group className="mar-bot-30" controlId="product">
                                                <Form.Control type="text" value={nightstandmodel.title} disabled />
                                              </Form.Group>
                                              <p className="text-center mb-0">
                                                  <Button variant="primary" type="submit">Submit</Button>
                                              </p>
                                          </Form>
                                      </div>
                                  </Col>
                              </Row>
                            </Container>
                          </Modal.Body>
                    </Modal>
                    );
                })}
            </>
        );
}

export default HomeFurnitureProducts;
