import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.GRAY5};
`;

export const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
`;
