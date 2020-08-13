import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

export const FooterContainer = styled.footer`
  flex-shrink: 0;
  padding: 2rem;
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAY3};
`;

export const Message = styled.h1`
  text-align: center;
  a {
    color: ${Colors.WHITE};
    text-decoration: underline;
    position: relative;
    bottom: 0.2rem;
  }
`;
