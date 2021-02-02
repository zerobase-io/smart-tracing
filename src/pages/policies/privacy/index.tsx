/* Bootstrap */
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

/* Local Components */
import Commitment from "./components/Commitment";
import Policy from "./components/Policy";

const Privacy = () => (
  <>
    <Row>
      <Col>
        <Tab.Container defaultActiveKey="commitment">
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="commitment">
                  <Commitment />
                </Tab.Pane>
                <Tab.Pane eventKey="policy">
                  <Policy />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
          <hr className="my-5" />
          <Row className="mb-5">
            <Col>
              <Nav
                variant="pills"
                className="text-center justify-content-center"
              >
                <Nav.Item className="mr-5">
                  <Nav.Link eventKey="commitment" href="#commitmentTop">
                    Our Privacy Commitment
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="ml-5">
                  <Nav.Link eventKey="policy" href="#policyTop">
                    Our Privacy Policy
                  </Nav.Link>
                  <small className="d-block text-muted">
                    Last updated: 6 April 2020
                  </small>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </Row>
  </>
);

export default Privacy;
