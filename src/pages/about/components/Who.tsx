/* Bootstrap */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

/* Local Components */
import InfoCard from "@/components/Cards/InfoCard/InfoCard";

/* Images */
import Earth from "@/images/earth.png";
import Logo from "@/images/branding/zerobase/logo.svg";

const Who = () => (
  <>
    <Row className="mb-3 justify-content-center" id="whoTop">
      <Col xs="auto">
        <h3>Everything You Need To Know About</h3>
      </Col>
    </Row>
    <Row className="mb-5 justify-content-center">
      <Col xs="auto">
        <Image src={Logo} width={500} />
      </Col>
    </Row>
    <Row className="mb-5" md={2}>
      <Col>
        <h3>
          <p>
            Zerobase is a free, privacy-first contact tracing platform that
            empowers both individuals and local officials to stop the spread of
            COVID-19.
          </p>
        </h3>
      </Col>
      <Col>
        <p>
          Contact tracing is the identification of likely disease-spreading
          interaction between individuals－it is a crucial part of modern
          pandemic response.
        </p>
        <p>
          Zerobase enables local communities to establish their first line of
          defense against COVID-19 outbreaks in a way that is private, easy to
          use, and helps to alleviate the manual issues involved in contact
          tracing and individualized testing.
        </p>
        <Button
          variant="outline-s-indigo"
          href="https://www.who.int/news-room/q-a-detail/contact-tracing"
        >
          More about contact tracing
        </Button>
      </Col>
    </Row>
    <hr />
    <Row className="my-5">
      <Col>
        <h2 className="text-center">Built to help real people</h2>
      </Col>
    </Row>
    <Row className="mb-5 align-items-center justify-content-center">
      <Col xs="auto">
        <Image src={Earth} width={250} />
      </Col>
      <Col lg={8} xs="auto">
        <Container>
          <Row>
            <Col>
              <InfoCard
                info="We provide an effective tracing solution for local governments and communities without compromising individual privacy or reducing trust."
                title="Privacy First"
              />
              <InfoCard
                info="Zerobase’s coverage is worldwide, supporting Edge (low-speed cellular), 3G, 4G, or WiFi. We offer no-internet solutions as well. Anyone in the world can immediately use it, no matter where they are."
                title="Accessible"
              />
            </Col>
            <Col>
              <InfoCard
                info="Anyone with a smartphone can use Zerobase by simply opening their camera. New users are enrolled immediately without any signup process."
                title="Easy to Use"
              />
              <InfoCard
                info="Our infrastructure is free to use. From New York City to Nairobi, anyone can use Zerobase to begin keeping themselves and their community safe. Zerobase has been organized as a nonprofit effort and labor has been donated."
                title="Free"
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </>
);

export default Who;
