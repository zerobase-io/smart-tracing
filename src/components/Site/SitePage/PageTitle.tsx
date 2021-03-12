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
        <Col xs={12}>
            <h1 className="display-4 text-center" id={id}>
                {title}
            </h1>
            <h5 className="text-center">{subtext}</h5>
        </Col>
    </Row>
);

export default PageTitle;
