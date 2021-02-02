/* Bootstrap */
import { default as ND, NavDropdownProps } from "react-bootstrap/NavDropdown";

/* Local Components */
import { Link } from "react-router-dom";

type DropdownProps = { items: { text: string; to: string }[] };

const NavDropdown = ({
  className,
  items,
  ...props
}: DropdownProps & NavDropdownProps) => (
  <ND {...props}>
    {items.map((item) => (
      <ND.Item className={className} as={Link} key={item.to} to={item.to}>
        {item.text}
      </ND.Item>
    ))}
  </ND>
);

export default NavDropdown;
