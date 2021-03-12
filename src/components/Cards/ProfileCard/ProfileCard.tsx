/* Bootstrap */
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export type ProfileCardProps = {
    name: string;
    src: string;
    title: string;
};

const ProfileCard = ({ name, src, title }: ProfileCardProps) => (
    <Card className="border-0 text-center">
        <Card.Body className="pt-0 px-0 text-center">
            <Image className="mb-2" roundedCircle src={src} width="150" />
            <Card.Title className="h6 mb-1 text-p-dark">
                <strong>{name}</strong>
            </Card.Title>
            <Card.Text>
                <small>{title}</small>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default ProfileCard;
