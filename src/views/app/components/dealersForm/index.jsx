import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DealersForm = () => {

    return (
        <>
          <section className="orange-bg1">
            <Container>
              <Row className="justify-content-center">
              <Col xs={12} sm={12} md={12} lg={8} xl={6}>
                <h2 className="heading2 mar-bot-20 text-center">Do you wish to join our growing Dealers & Distrubutor Network</h2>
                <p className="text-center">Please sumbit your details and a member from our team willl get in touch with you.</p>
              </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={10} xl={8}>
                  <Form>
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30">
                          <Form.Select id="enquiry">
                            <option value="">Select type Enquiry</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Dealer">Distributor</option>
                            <option value="Dealer">Bulk Enquiry</option>
                            <option value="Dealer">Importer</option>
                            <option value="Dealer">Exporter</option>
                            <option value="Dealer">Retailer</option>
                            <option value="Dealer">Interior Designer</option>
                            <option value="Dealer">Architect</option>
                            <option value="Dealer">Builder</option>
                            <option value="Dealer">Project </option>
                            <option value="Dealer">Hotel </option>
                            <option value="Dealer">Restaurants</option>
                            <option value="Dealer">Hospital</option>
                            <option value="Dealer">School/ University/ Hostel</option>
                            <option value="Dealer">Others</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30">
                          <Form.Select id="enquiry">
                          <option value="">Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="location">
                          <Form.Control type="text" placeholder="Enter your Location" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="name">
                          <Form.Control type="text" placeholder="Enter your Name" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="email">
                          <Form.Control type="email" placeholder="Enter your Email" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Form.Group className="mar-bot-30" controlId="mobile">
                          <Form.Control type="tel" placeholder="Enter your Mobile Number" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default DealersForm;