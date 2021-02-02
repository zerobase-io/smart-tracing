/* Bootstrap */
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const Policy = () => (
  <Container>
    <Row className="my-5 justify-content-center align-content-center">
      <Col className="text-center" xs="auto">
        <h3 className="mb-0" id="policyTop">
          Privacy Policy
        </h3>
        <small className="text-muted">Last updated: 6 April 2020</small>
      </Col>
    </Row>
    <hr className="my-5" />
    <Row className="mb-5 justify-content-center">
      <Tab.Container defaultActiveKey="#introduction">
        <Row>
          <Col lg={4} xs={12}>
            <ListGroup>
              <ListGroup.Item action href="#introduction">
                <strong>Introduction</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="#whatData">
                <strong>What data we collect from you</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="#howData">
                <strong>How we use your data</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="#whenData">
                <strong>When we share your data</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="#storeData">
                <strong>How we store and protect your data</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="#cookies">
                <strong>Cookies</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="#contact">
                <strong>How to contact us</strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="mt-lg-0 mt-3" lg={8} xs={12}>
            <Tab.Content>
              <Tab.Pane eventKey="#introduction">
                <h3>
                  <strong>Introduction</strong>
                </h3>
                <p>
                  Zerobase Foundation (“Zerobase”) is committed to protecting
                  your privacy. This privacy policy was created in order to
                  demonstrate Zerobase’s prioritization of your privacy as a
                  user of the Zerobase platform (the “Platform”). This policy
                  explains what information is collected and how this
                  information is used. As our technology evolves and laws
                  change, we may update this notice and any supplemental privacy
                  notices to reflect changes in our practices and applicable
                  law. If we update this policy, we will post a notice of any
                  material updates on our site and revise the “Last Updated”
                  date above.
                </p>
                <h5>
                  <strong>Links to Third Part Sites</strong>
                </h5>
                <p>
                  This notice does not apply to any third-party sites that may
                  link to, or be accessible from, our sites. Your interactions
                  with these sites are governed by the third parties’ applicable
                  privacy notices, statements, or policies. We encourage you to
                  read them.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#whatData">
                <h3>
                  <strong>What data we collect from you</strong>
                </h3>
                <h5>
                  <strong>Data we collect automatically</strong>
                </h5>
                <p>
                  We may collect what is called a device “fingerprint,” which
                  tells us about the kind of phone you are using and its browser
                  settings. Such data does not uniquely identify the device,
                  meaning that many devices will have the same fingerprint.
                </p>
                <h5>
                  <strong>Data you provide about yourself</strong>
                </h5>
                <p>
                  You may voluntarily provide your email or phone number for the
                  sole purpose of receiving notifications. If you contact us via
                  email, you may give us your email address and any personal
                  data contained in any comments, photos, feedback, or other
                  information you submit. We will not use this information for
                  any purpose except to respond to inquiries.
                </p>
                <h5>
                  <strong>Data concerning health</strong>
                </h5>
                <p>
                  When you check in to a certain kind of provider of public
                  health services, we may associate your anonymous ID with a
                  record of the fact that you visited such a provider. With your
                  explicit permission, we may also associate your anonymous ID
                  with an identifier associated with a medical test result.
                </p>
                <h5>
                  <strong>Other special categories of data</strong>
                </h5>
                <p>
                  We will not intentionally or unintentionally collect other
                  “special categories of data” under the EU General Data
                  Protection Regulation (“GDPR”) without your explicit consent
                  for one or more specified purposes or as otherwise permitted
                  or required by applicable law. Special categories of data
                  include personal data (a) revealing racial or ethnic origin,
                  political opinions, religious or philosophical beliefs, or
                  trade union membership; or (b) concerning a natural person’s
                  sex life or sexual orientation.
                </p>
                <h5>
                  <strong>Minors</strong>
                </h5>
                <p>
                  Our site is not intended for minors (individuals under the age
                  of 13, or equivalent minimum age depending on jurisdiction).
                  We do not knowingly have users that are minors and do not
                  knowingly collect information from minors.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#howData">
                <h3>
                  <strong>How we use your data</strong>
                </h3>

                <h5>
                  <strong>Purposes</strong>
                </h5>
                <p>
                  The data is being collected for purposes of disease control,
                  epidemic response, and public health research. We may use your
                  personal data to: send you information you have expressly
                  chosen to receive [with your consent], contribute to our
                  archive of information in the public interest [for our
                  legitimate interests]; and/or comply with applicable law,
                  court order, subpoena, or legal process served on us [to
                  comply with legal obligations]. We may use data concerning
                  health because processing is necessary for the purposes of:
                  preventive or occupational medicine; the provision of health
                  or social care or treatment; or the management of health or
                  social care systems and services. We may use your IP address
                  to find out your broad region, such as country or state, to
                  determine whether we need to comply with GDPR or other privacy
                  laws.
                </p>
                <h5>
                  <strong>Legal bases under the GDPR</strong>
                </h5>
                <p>
                  If you are in the European Union, we will collect and use your
                  personal data only if we have one or more legal bases for
                  doing so under the GDPR. This means we collect and use your
                  personal data only where: you have given your consent for one
                  or more specific purposes; it is necessary to perform a
                  contract we are about to enter into or have entered into with
                  you; it is necessary for our legitimate interests (or those of
                  a third party) and your interests and fundamental rights do
                  not override those interests; it is necessary to protect the
                  vital interests of you or another natural person; or it is
                  necessary to comply with a legal obligation. We will indicate
                  in brackets the legal basis or bases on which we are relying
                  following each purpose. Where we are relying on consent as the
                  legal basis, we will notify you and seek additional consent
                  before using your personal data for a new purpose that is
                  inconsistent with the original purpose for which we collected
                  it. (However, due to the purposes of Zerobase, this is
                  unlikely.)
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#whenData">
                <h3>
                  <strong>When we share your data</strong>
                </h3>

                <h5>
                  <strong>
                    Relevant authorities in the interest of public health
                  </strong>
                </h5>
                <p>
                  If you voluntarily provided your email or phone number, we may
                  provide your email or phone number to relevant local, state,
                  or federal authorities, as well as healthcare providers, in
                  the interest of public health, for example contacting you to
                  inform you that you may have been exposed to an infectious
                  disease.
                </p>
                <h5>
                  <strong>Law enforcement</strong>
                </h5>
                <p>
                  We may share your data with law enforcement, other government
                  agencies or authorities, or third parties as required by
                  applicable law or legal process served on us.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#storeData">
                <h3>
                  <strong>How we store and protect your data</strong>
                </h3>

                <h5>
                  <strong>Storage and transfers</strong>
                </h5>
                <p>
                  By default, we store the anonymous ID that is generated the
                  first time you use the Platform. We store your email or phone
                  number if you choose to provide one of them for purposes of
                  notification.
                </p>
                <h5>
                  <strong>Storage period</strong>
                </h5>
                <p>
                  We will store data until it is no longer needed to fulfill the
                  purpose(s) for which it was collected or as otherwise required
                  or permitted by law. At such time, this data will be deleted.
                  If this is not possible, we will securely store your personal
                  data and isolate it from any further use until deletion is
                  possible. We may dispose of any data at our discretion without
                  notice, subject to applicable law.
                </p>
                <h5>
                  <strong>Protection</strong>
                </h5>
                <p>
                  As the transmission of data via the internet is not completely
                  secure, we cannot guarantee the security of your information
                  transmitted to our sites and any such transmission is at your
                  own risk. However, we maintain appropriate technical and
                  organizational measures to prevent unauthorized disclosure of,
                  or access to, data. For example, all data transmitted to and
                  stored by our system is encrypted in transit and at rest.
                </p>
                <h5>
                  <strong>Deletion</strong>
                </h5>
                <p>
                  If you provided your email or phone number and would like it
                  to be deleted, simply contact us and we will no longer store
                  them.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#cookies">
                <h3>
                  <strong>Cookies</strong>
                </h3>

                <p>
                  Our site may use cookies, which are small text files stored on
                  your device when you access a website. We use cookies to
                  remember your device’s random ID number to help Zerobase work
                  better.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#contact">
                <h3>
                  <strong>How to contact us</strong>
                </h3>

                <p>
                  You can contact us at info@zerobase.io or our Data Protection
                  Officer (“DPO”) at{" "}
                  <a href="mailto:david@zerobase.io">david@zerobase.io</a>.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Row>
  </Container>
);

export default Policy;
