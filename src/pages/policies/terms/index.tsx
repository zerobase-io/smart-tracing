/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Terms = () => (
    <Container>
        <Row className="my-5 justify-content-center align-content-center">
            <Col className="text-center" xs="auto">
                <h3 className="mb-0" id="policyTop">
                    Terms
                </h3>
                <small className="text-muted">Last updated: 16 April 2020</small>
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
                            <ListGroup.Item action href="#restrictions">
                                <strong>Restrictions on Use of Content</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#medPlatformNotifications">
                                <strong>Medical-Related; Platform Use, Notifications</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#activitiesCommissions">
                                <strong>Site Activities &amp; Commissions</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#privacy">
                                <strong>Privacy Policy</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#infringement">
                                <strong>Infringement of Our Rights or the Rights of Others</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#feedback">
                                <strong>Feedback; Your License to Us</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#indemnification">
                                <strong>Indemnification</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#warranties">
                                <strong>No Warranties, Conditions, or Other Duties</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#damages">
                                <strong>No Incidental, Consequential, or Certain Other Damages</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#remedyLimitation">
                                <strong>Exclusive Remedy; Damage Limitation</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#sites">
                                <strong>Linked Sites</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#amendments">
                                <strong>Amendments</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#jurisdiction">
                                <strong>Governing Law and Exclusive Jurisdiction</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#children">
                                <strong>Children</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#legal">
                                <strong>Legal &amp; Other Notices or Disclosures; Notice to You</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#misc">
                                <strong>Entire Agreement; Miscellaneous</strong>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="mt-lg-0 mt-3" lg={8} xs={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#introduction">
                                <h3>
                                    <strong>Introduction</strong>
                                </h3>
                                <h5>
                                    <strong>Zerobase Foundation Terms of Use</strong>
                                </h5>
                                <p>
                                    Zerobase.io is a website associated with the Zerobase Foundation, a nonprofit
                                    existing under the laws of the District of Columbia (“Foundation,” “we,” or “us”).
                                    These Terms of Use (“Terms”) are an agreement between the Foundation and you and
                                    govern your use of the Site (as defined below) and all information on or submitted
                                    through it.
                                </p>
                                <p>
                                    You understand that your use of the site, registration on the site or use of this or
                                    any other Foundation website, online portal, platform, electronic forms, surveys and
                                    interactive exhibits managed by the Foundation (collectively the “Site”),
                                    constitutes your agreement to these Terms, including but not limited to the
                                    Foundation’s Privacy &amp; Cookies Policy (the “Privacy Policy”) as amended from
                                    time to time.
                                </p>
                                <p>
                                    Do not use the Site if you do not agree to the Terms or if your jurisdiction will
                                    not honor them.
                                </p>
                                <p>
                                    References to “you” mean the “user” individually unless otherwise stated on the Site
                                    or in these Terms.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#restrictions">
                                <h3>
                                    <strong>Restrictions on Use of Content</strong>
                                </h3>
                                <p>
                                    The Site contains a variety of information, including (without limitation)
                                    information, data, text, software, photographs, graphics, video, messages or other
                                    materials (“Content”). Much of the Content on the Site is not available for
                                    downloading, such as our copyrighted works that we do not distribute or works of
                                    others that we are not permitted to distribute. However, we also may have Content
                                    that if so designated may be downloaded by you pursuant to these Terms (“Available
                                    Content”).
                                </p>
                                <p>
                                    YOU MAY REVIEW, DOWNLOAD, COPY, DISTRIBUTE AND USE THE AVAILABLE CONTENT SOLELY FOR
                                    PERSONAL, NON-COMMERCIAL PURPOSES. YOU MAY NOT SELL THE AVAILABLE CONTENT OR
                                    OTHERWISE DISTRIBUTE IT FOR A FEE. YOU WILL NOT USE OR DISCLOSE IT OR THE SITE TO
                                    ANY THIRD PARTIES EXCEPT AS EXPRESSLY PERMITTED BY THESE TERMS.
                                </p>
                                <p>
                                    This Site is controlled by us from our offices within the United States of America.
                                    If you choose to access this Site from locations outside the U.S. you do so at your
                                    own risk and you are responsible for compliance with any local laws. You may not use
                                    or export anything (including information) from the Site in violation of U.S. export
                                    laws, regulations or the Terms.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#medPlatformNotifications">
                                <h3>
                                    <strong>Medical-Related; Platform Use, Notifications</strong>
                                </h3>

                                <p>
                                    The Site and the Content, including its anonymous tracing technology (“Platform,”
                                    hereby included in the term “Content”) do not provide advice or a medical diagnosis.
                                    The Site is solely for contact tracing and informational purposes. Nothing contained
                                    in the Site is intended to substitute for professional medical advice, diagnosis, or
                                    treatment. Always seek the advice of your physician or other qualified health
                                    provider with any questions you may have regarding a medical condition.
                                </p>

                                <p>
                                    IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, YOU SHOULD DIAL 9-1-1 OR YOUR LOCAL
                                    EMERGENCY NUMBER IMMEDIATELY.
                                </p>

                                <p>
                                    If you have signed up to receive mobile notifications and have not received a
                                    notification after using the Platform for any period of time, it does not mean that
                                    you have not been exposed to the relevant illness. Reliance on the Site in any way,
                                    including reliance on the absence of a notification, is solely at your own risk.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#activitiesCommissions">
                                <h3>
                                    <strong>Site Activities &amp; Commissions</strong>
                                </h3>

                                <h5>
                                    <strong>Site Activities</strong>
                                </h5>
                                <p>
                                    The Site is provided as is and when available, and we may modify, suspend, or
                                    terminate any portion of the Content, functionality and services at our discretion
                                    at any time. We may also do this for particular activities even if you have started
                                    to participate.
                                </p>

                                <h5>
                                    <strong>No Commissions</strong>
                                </h5>
                                <p>
                                    We do not want to deal with persons desiring to be paid for something unless we
                                    intentionally enter into an express contract to do so. This means, for example, that
                                    we do not pay commissions or other sums to anyone who helps arrange a job, grant or
                                    anything else unless we have expressly contracted to do so in writing prior to any
                                    such arrangement. We may also use, delete or ignore any information you provided
                                    without paying you anything and without undertaking any duties to you or anyone
                                    else. If you do not want that result then do not submit any information without
                                    entering into a written contract with us first.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#privacy">
                                <h3>
                                    <strong>Privacy Policy</strong>
                                </h3>

                                <p>
                                    Our Privacy Policy is part of these Terms and is incorporated herein. Do not provide
                                    personal data about others unless you are authorized or required to do so by
                                    contract or applicable law.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#infringement">
                                <h3>
                                    <strong>Infringement of Our Rights or the Rights of Others</strong>
                                </h3>

                                <p>
                                    Our Site, including the Content, is protected by intellectual property laws and you
                                    agree to respect them. Any use of the Content not expressly permitted by these Terms
                                    is a breach of these Terms and may violate copyright, trademark, and other laws.
                                    Content and other features are subject to change or termination without notice at
                                    our discretion. All rights not expressly granted to you are reserved. Certain
                                    Content on this Site is patent pending under U.S. Patent No. 62/987,3281. If you
                                    violate any of these Terms, your permission to use the Content automatically
                                    terminates and you must immediately destroy any copies you have made of any portion
                                    of the Content.
                                </p>
                                <p>
                                    By using this Site, you agree to never attempt to partake in any malicious activity
                                    or other activity violating local, state or federal law in any way, shape or form
                                    related to the Content or the Platform. For example, you shall not attempt to
                                    reidentify or trace any anonymous information to a user or a facility; guess or try
                                    to determine other users’ personal information; nor use the Platform to threaten,
                                    directly or indirectly, stores, places of business, testing facilities, or
                                    healthcare providers.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#feedback">
                                <h3>
                                    <strong>Feedback; Your License to Us</strong>
                                </h3>

                                <p>
                                    We hope that you will provide input, comments, suggestions, reports or ideas
                                    (collectively, “Feedback”) so that we may better support, improve and pursue our
                                    mission. However, you agree that you will not supply Feedback that infringes or
                                    violates the rights of others, and you hereby grant the Foundation a non-exclusive,
                                    perpetual, irrevocable, royalty-free, transferable, sub-licensable, worldwide
                                    license to reproduce, display, perform, distribute, publish, modify, edit or
                                    otherwise use such Feedback as the Foundation may deem appropriate, without
                                    restriction, for any and all commercial and/or non-commercial purposes, in its sole
                                    discretion. You agree that we have no obligation to pay you or anyone else for
                                    Feedback or for the License to the Foundation.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#indemnification">
                                <h3>
                                    <strong>Indemnification</strong>
                                </h3>

                                <p>
                                    You agree to indemnify, defend and hold harmless the Foundation and third parties,
                                    from and against any and all losses, damage, liability and costs of every nature
                                    incurred by any of them in connection with any claim, damage or loss related to or
                                    arising out of: the Content, the Platform, use of the Site or related sites, any
                                    assistance or services provided by us or third parties, any alleged unauthorized use
                                    of the Site, or any breach or alleged breach by you of these Terms. You agree to
                                    cooperate fully in the defense of any of the foregoing. We reserve the right, at our
                                    own expense, to control exclusively the defense of any matter otherwise subject to
                                    indemnification by you and you will not settle any matter without our consent in a
                                    non-electronic record. Your obligation to indemnify, defend and hold harmless shall
                                    be limited to the extent that you are afforded sovereign immunity under applicable
                                    federal, state or local laws. In such cases where your obligation to indemnify may
                                    be limited due to the requirements of federal, state or local laws, you shall be
                                    responsible for the ordinary negligent acts and omissions of your agents causing
                                    harm to persons not a party to this agreement.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#warranties">
                                <h3>
                                    <strong>No Warranties, Conditions, or Other Duties</strong>
                                </h3>

                                <p>
                                    THE SITE AND ALL CONTENT, SITE FUNCTIONALITY, ASSISTANCE AND SERVICES PROVIDED BY
                                    SITE, THE FOUNDATION OR THIRD PARTIES (collectively, “COMPLETE SITE”) ARE SUBJECT TO
                                    CHANGE AND PROVIDED BY US OR THIRD PARTIES “AS IS” AND “AS AVAILABLE.” WE EXPRESSLY
                                    DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                                    LIMITED TO, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR
                                    PURPOSE, NON-INFRINGEMENT, TITLE, OPERABILITY, CONDITION, QUIET ENJOYMENT, VALUE,
                                    AND ACCURACY OF DATA. YOU AGREE THAT YOU WILL OBTAIN (INCLUDING THROUGH DOWNLOAD)
                                    ANY CONTENT ENTIRELY AT YOUR OWN RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
                                    RESULTING INFRINGEMENT, BREACH OF CONTRACT, CONSEQUENCE OR DAMAGE, INCLUDING
                                    (WITHOUT LIMITATION) TO YOUR COMPUTER SYSTEM OR LOSS OF DATA.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#damages">
                                <h3>
                                    <strong>No Incidental, Consequential, or Certain Other Damages</strong>
                                </h3>

                                <p>
                                    TO THE FULL EXTENT ALLOWED BY LAW, YOU AGREE THAT NEITHER THE FOUNDATION NOR ANY OF
                                    THE THIRD PARTIES, WILL BE LIABLE TO YOU OR ANYONE ELSE FOR ANY SPECIAL,
                                    CONSEQUENTIAL, INCIDENTAL, OR PUNITIVE DAMAGES, DAMAGES FOR LOST PROFITS, FOR LOSS
                                    OF PRIVACY OR SECURITY, FOR LOSS OF REPUTATION, FOR FAILURE TO MEET ANY DUTY
                                    (INCLUDING WITHOUT LIMITATION ANY DUTY OF GOOD FAITH OR LACK OF NEGLIGENCE), OR FOR
                                    ANY OTHER SIMILAR DAMAGES WHATSOEVER THAT ARISE OUT OF OR ARE RELATED TO ANY ASPECT
                                    OF THE COMPLETE SITE OR TO ANY BREACH OF THESE TERMS (INCLUDING WITHOUT LIMITATION,
                                    THE PRIVACY POLICY), EVEN IF WE OR A THIRD PARTY HAS BEEN ADVISED OF THE POSSIBILITY
                                    OF SUCH DAMAGES AND EVEN IN THE EVENT OF FAULT, TORT (INCLUDING NEGLIGENCE) OR
                                    STRICT OR PRODUCTS LIABILITY OR MISREPRESENTATION.
                                </p>
                                <p></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#remedyLimitation">
                                <h3>
                                    <strong>Exclusive Remedy; Damage Limitation</strong>
                                </h3>

                                <p>
                                    YOU AGREE THAT YOUR EXCLUSIVE REMEDY FOR ANY DISPUTE WITH THE FOUNDATION FOR ANY
                                    REASON RELATING TO ANY PART OF THE COMPLETE SITE, WILL BE AT OUR OPTION: (A)
                                    SUBSTITUTION, CORRECTION OR REPLACEMENT OF ALL OR PART OF THE CONTENT OR SERVICE; OR
                                    (B) THE AMOUNT OF YOUR DAMAGES THAT ARE NOT EXCLUDED IN THE PRECEDING SECTION AND
                                    WHICH YOU ACTUALLY INCUR IN REASONABLE RELIANCE, WHICH AMOUNT WILL BE THE LESSER OF
                                    THE AMOUNT YOU ACTUALLY PAID US FOR THE ITEM CAUSING THE DAMAGE OR THE AMOUNT OF
                                    SAID DAMAGES SO INCURRED.
                                </p>
                                <p>
                                    The damage exclusions and limitations in these Terms are independent and will apply
                                    even if any remedy fails of its essential purpose.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#sites">
                                <h3>
                                    <strong>Linked Sites</strong>
                                </h3>

                                <p>
                                    Our Site may contain links to web sites of third parties. We provide these links as
                                    a convenience, but do not endorse the linked sites or anything on them. While their
                                    information and services may be helpful to you, they are independent entities and we
                                    do not control them. You agree that any visits to linked sites are at your own risk
                                    and that we are not responsible or liable for the content or accuracy of the linked
                                    sites. The linked sites are governed by their terms of use, privacy policies,
                                    statements, and notices (if any). We recommend that you read them.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#amendments">
                                <h3>
                                    <strong>Amendments</strong>
                                </h3>

                                <p>
                                    You agree that we may alter (including adding or eliminating all or parts of
                                    provisions) these Terms, including but not limited to the Privacy Policy
                                    (“Amendments”), at any time and as we reasonably deem appropriate. Amended versions
                                    of these Terms will take effect on the date specified for the amended version
                                    (“Effective Date”) and will apply to all information that was collected before or
                                    after the Effective Date, including information in databases. You have no continuing
                                    right to use the Site. No other Amendments will be valid unless they are in a paper
                                    writing signed by us and by you.
                                </p>
                                <p>
                                    You are responsible for periodically reviewing the Terms for any Amendments. USE OF
                                    THE SITE AFTER THE EFFECTIVE DATE OF ANY AMENDMENTS WILL CONSTITUTE YOUR CONSENT TO
                                    THE AMENDMENTS, SO IF YOU DO NOT WANT TO BE BOUND BY AN AMENDED VERSION, DO NOT USE
                                    THE SITE AND CEASE USE OF THE CONTENT OR SERVICES.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#jurisdiction">
                                <h3>
                                    <strong>Governing Law and Exclusive Jurisdiction</strong>
                                </h3>

                                <p>
                                    These Terms and your use of the Site are governed by the laws of the District of
                                    Columbia, U.S.A., without regard to its choice of law provisions, except where you
                                    are required by published governmental law, ordinance, regulation, directive, order,
                                    or the like (collectively, “Mandate”) to contract for application of the law of your
                                    local jurisdiction. You hereby consent to exclusive jurisdiction of a state or
                                    federal court of general jurisdiction sitting in the District of Columbia, U.S.A.
                                    except to the extent you are prohibited from doing so by a Mandate.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#children">
                                <h3>
                                    <strong>Children</strong>
                                </h3>

                                <p>
                                    The Site is not intended for children under the age of 13. If you are under 13 years
                                    of age, please do not use or access the Site at any time or in any manner without
                                    the supervision of a parent or legal guardian. We do not seek to gather personal
                                    information from or about persons under the age of 13 without the consent of a
                                    parent or guardian.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#legal">
                                <h3>
                                    <strong>Legal &amp; Other Notices or Disclosures; Notice to You</strong>
                                </h3>

                                <p>
                                    You agree that we may give all notices we are required to give you by posting notice
                                    on the Site or, if we have your email address, by sending notice by email at our
                                    discretion, including (without limitation), disclosures that we are required to give
                                    you, legal notices, notice of subpoenas or other legal process (if any), and all
                                    other communications. When we communicate by email, we may use any email address you
                                    provide when communicating with us or that we otherwise have in our records, so only
                                    supply to us an email address at which you are willing to receive all
                                    communications, including “legal” or other potentially sensitive communications. You
                                    agree to check for notices posted on the Site.
                                </p>
                                <p>
                                    Notice to Us (Our Legal Notices Address): We receive many emails and not all
                                    employees are trained to deal with every kind of communication. Accordingly, you
                                    agree to send us notice by emailing it to the following (“Our Legal Notice
                                    Address”):
                                </p>
                                <p>
                                    <strong>Zerobase Foundation</strong>
                                </p>
                                <p>legal@zerobase.io</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#misc">
                                <h3>
                                    <strong>Entire Agreement; Miscellaneous</strong>
                                </h3>

                                <p>These Terms, including the Privacy Policy and any:</p>
                                <p>(a) notices, terms and items incorporated into any of them;</p>
                                <p>
                                    (b) additional terms and conditions contained on the Site for particular activities
                                    or Content; and
                                </p>
                                <p>
                                    (c) our disclosures and your consents provided on or in connection with the Site or
                                    any Content, service or other activity;
                                </p>
                                <p>
                                    constitute the entire agreement between you and the Foundation regarding the
                                    Complete Site or the subject matter of the foregoing (collectively, “Entire
                                    Agreement”). If any provision of the Entire Agreement is found by a court of
                                    competent jurisdiction to be invalid, its remaining provisions will remain in full
                                    force and effect, provided that the allocation of risks described herein is given
                                    effect to the fullest extent possible.
                                </p>
                                <p>
                                    Our failure to act with respect to a breach by you does not waive our right to act
                                    with respect to subsequent or similar breaches. Time is of the essence of the Entire
                                    Agreement and there are no third party beneficiaries of it. The provisions of
                                    Sections 3 and 4, 6 through 10, and 13 through 16, and our rights under the Privacy
                                    Policy will survive termination or cancellation of this Entire Agreement. You may
                                    not assign these Terms or any of your rights or obligations under these Terms
                                    without our prior written consent.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Row>
    </Container>
);

export default Terms;
