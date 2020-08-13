import React from 'react';
import {
  Button,
} from '@blueprintjs/core';
import {
  Container,
  InnerContainer,
  Code,
} from './styles';

export const Form = () => (
  <Container>
    <InnerContainer>
      <h1>Code</h1>
      <Code>
        function () {'{'}
          console.log('Called from comlink!');
        {'}'}
      </Code>
      <Button
        rightIcon="double-chevron-right"
        intent="success"
        text="Run"
       />
    </InnerContainer>
  </Container>
);

export default Form;
