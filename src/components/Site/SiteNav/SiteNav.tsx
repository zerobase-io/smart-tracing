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
            <Navbar bg="indigo-100" expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Navbar.Brand className="pt-1 pb-2" href="/">
                            <Image alt="Zerobase Logo" src={Logo} height="31" width="150" />
                        </Navbar.Brand>
                        <Nav
                            variant="tabs"
                            activeKey={location.pathname}
                            className="border-0 align-items-lg-center justify-content-around w-50"
                        >
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavDropdown
                                color="indigo-100"
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
                                toggleText="Users"
                            />
                            <NavLink to="/policies/privacy">Privacy</NavLink>
                            <NavLink to="/team">Team</NavLink>
                            <Nav.Item>
                                <Nav.Link href="https://airtable.com/shrnYjRudkIBlXzr9">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default SiteNav;
