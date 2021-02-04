import React from 'react';

/* Routing */
import { useLocation } from 'react-router-dom';

/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* Local Components */
import NavDropdown from '@/components/Dropdowns/NavDropdown/NavDropdown';
import NavLink from '@/components/Links/NavLink/NavLink';

/* Images */
import Logo from '@/images/branding/zerobase/logo.svg';

const SiteNav = () => {
    const location = useLocation();

    return (
        <header>
            <Navbar variant="light" bg="indigo-100" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Navbar.Brand href="/">
                            <Image
                                alt="Zerobase Logo"
                                className="d-inline-block align-top"
                                src={Logo}
                                height="30"
                                width="150"
                            />
                        </Navbar.Brand>
                        <Nav variant="tabs" activeKey={location.pathname} className="w-100 mr-2">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavDropdown
                                id="nav-dropdown-info"
                                items={[
                                    { text: 'Individuals', to: '/info/individuals' },
                                    { text: 'Community Officials', to: '/info/communities' },
                                    {
                                        text: 'Business or Public Locations',
                                        to: '/info/businesses',
                                    },
                                    {
                                        text: 'Healthcare Testing Sites',
                                        to: '/info/testingSites',
                                    },
                                ]}
                                title="Info for..."
                            />
                            <NavDropdown
                                id="nav-dropdown-policies"
                                items={[
                                    { text: 'Privacy & Cookies', to: '/policies/privacy' },
                                    { text: 'Terms of Use', to: '/policies/terms' },
                                ]}
                                title="Policies"
                            />
                            <NavLink to="/team">Team</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default SiteNav;
