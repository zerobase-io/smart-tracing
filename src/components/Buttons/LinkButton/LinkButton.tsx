/* Routing */
import { Link, LinkProps } from 'react-router-dom';

/* Bootstrap */
import Button, { ButtonProps } from 'react-bootstrap/Button';

const LinkButton = ({ ...props }: LinkProps & ButtonProps) => <Button as={Link} {...props} />;

export default LinkButton;
