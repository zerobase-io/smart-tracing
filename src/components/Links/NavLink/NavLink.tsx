/* Routing */
import { Link, LinkProps } from 'react-router-dom';

/* Bootstrap */
import Nav from 'react-bootstrap/Nav';
import { NavLinkProps } from 'react-bootstrap';

const NavLink = ({ ...props }: NavLinkProps & LinkProps) => (
    <Nav.Item>
        <Nav.Link as={Link} {...props} />
    </Nav.Item>
);

export default NavLink;
