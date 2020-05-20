import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const navStyle = styled.div`
  .navbar{
    background-color: #A8577E;
    color: white;
  }
`;

const Navigation = () => (
  <navStyle>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        Around the World
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  </navStyle>
);

export default Navigation;
