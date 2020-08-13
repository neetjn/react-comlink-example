import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InnerContainer = styled.div`
  padding: 2rem;
  max-width: fit-content;
  background-color: ${Colors.LIGHT_GRAY5};
`;

const Code = styled.pre`
  width: fit-content;
`;

Code.defaultProps = {
  className: 'bp3-code-block',
};

export {
  Code,
};
