import React from 'react';
import {
  Button,
  Alignment,
} from '@blueprintjs/core';
import { Navbar } from './styles';

export const Header = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>
        comlink-example
      </Navbar.Heading>
      <Navbar.Divider />
      <a
        href="https://github.com/neetjn/react-comlink-example"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="bp3-minimal"
          icon="git-repo"
          text="Source Code"
        />
      </a>
    </Navbar.Group>
  </Navbar>
);

export default Header;
