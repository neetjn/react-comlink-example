import styled from 'styled-components';
import {
  Colors,
  Navbar as Nav,
} from '@blueprintjs/core';

export const Navbar = styled(Nav)`
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAY2};
  a, a > button, svg {
    color: ${Colors.WHITE} !important;
  }
`;
