/* Bootstrap */
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';


/* Local Components */
import { Link } from 'react-router-dom';

type NavDropdownProps = { color?: string; items: { text: string; to: string }[]; toggleText: string };

const NavDropdown = ({ color, items, toggleText }: NavDropdownProps) => (
    <Dropdown as={Nav.Item} className={`${color ? `bg-${color}` : ''} border-0`}>
        <Dropdown.Toggle className={`${color ? `bg-${color}` : ''} border-0`} as={Nav.Link}>
            {toggleText}
        </Dropdown.Toggle>
        <Dropdown.Menu className={`${color ? `bg-${color}` : ''} border-left-0 border-right-0`}>
            {items.map((item) => (
                <Dropdown.Item as={Link} key={item.to} to={item.to}>
                    {item.text}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>

);

export default NavDropdown;
