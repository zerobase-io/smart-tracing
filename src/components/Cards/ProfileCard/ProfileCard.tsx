/* Bootstrap */
import Card from "react-bootstrap/Card";

export type ProfileCardProps = {
  name: string;
  src: string;
  title: string;
};

const ProfileCard = ({ name, src, title }: ProfileCardProps) => (
  <Card className="border-0 text-center" style={{ width: "12rem" }}>
    <Card.Img src={src} />
    <Card.Body className="px-0">
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
