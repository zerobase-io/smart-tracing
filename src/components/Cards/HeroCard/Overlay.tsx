/* Bootstrap */
import Card from 'react-bootstrap/Card';

type OverlayProps = {
    children: React.ReactNode;
};

const Overlay = ({ children }: OverlayProps) => (
    <Card.ImgOverlay className="text-white d-flex align-items-center">
        <Card.Body children={children} />
    </Card.ImgOverlay>
);

export default Overlay;
