/* Props */
import { string, node, InferProps } from "prop-types";

/* Bootstrap */
import Nav from "react-bootstrap/Nav";

export default function NavLinkIcon({
    icon,
    href,
}: InferProps<typeof NavLinkIcon.propTypes>) {
    return (
        <Nav.Item>
            <Nav.Link href={href}>{icon}</Nav.Link>
        </Nav.Item>
    );
}

NavLinkIcon.propTypes = {
    icon: node.isRequired,
    href: string.isRequired,
};