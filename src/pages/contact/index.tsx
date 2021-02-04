/* React */
import { useState } from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type FormData = {
    email?: string;
    message: string;
    name?: string;
};

const Contact = () => {
    const [data, setData] = useState<FormData>({
        email: '',
        message: '',
        name: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        // Need to do stuff with the info
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={7}>
                    <h2 className="text-center">Let's get in touch!</h2>
                    <p>
                        Want to know more about Zerobase or how you can get started? Do you have feedback for how we can
                        help you better? We want to hear from you!
                    </p>
                    <p>
                        Any <strong>optional</strong> personal information provided is not associated with an account,
                        and is only used so we can get back to you.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center my-5">
                <Col xs={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Text>Let us know what's on your mind!</Form.Text>
                                <Form.Control
                                    as="textarea"
                                    maxLength={1500}
                                    name="message"
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    type="text"
                                    value={data.message}
                                />
                                <Form.Text className="text-muted text-right">
                                    {data.message.length}/1500 characters
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="email" xs={6}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Text>
                                    <strong>Optional</strong> - if you would like a response from us
                                </Form.Text>
                                <Form.Control name="email" onChange={handleChange} type="email" value={data.email} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name" xs={6}>
                                <Form.Label>Name</Form.Label>
                                <Form.Text>
                                    <strong>Optional</strong> - to help us address you correctly
                                </Form.Text>
                                <Form.Control name="name" onChange={handleChange} type="text" value={data.name} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="justify-content-end">
                            <Col xs="auto">
                                <Button size="lg" type="submit" variant="p-dark">
                                    Send
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
