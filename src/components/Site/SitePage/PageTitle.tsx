/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export type PageTitleProps = {
    id?: string;
    subtext?: string;
    title: string;
};

const PageTitle = ({ id = '', subtext, title }: PageTitleProps) => (
    <Row className="mb-5 text-p-dark">
        <Col xs={9}>
            <h1 className="display-4" id={id}>
                {title}
            </h1>
            <h5>{subtext}</h5>
        </Col>
    </Row>
);

export default PageTitle;
