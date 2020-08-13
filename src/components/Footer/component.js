import React from 'react';
import { Icon } from '@blueprintjs/core';
import {
  FooterContainer,
  Message,
} from './styles';

export const Footer = () => (
  <FooterContainer>
    <Message>
      Built with <Icon icon="heart" color="red" iconSize={Icon.SIZE_LARGE} />
      &nbsp;using <small><a href="https://reactjs.org/">React</a></small> +&nbsp;
      <small><a href="https://blueprintjs.com">Blueprintjs</a></small>
    </Message>
  </FooterContainer>
);

export default Footer;
