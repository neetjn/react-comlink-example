import React from 'react';
import {
  Button,
} from '@blueprintjs/core';
// eslint-disable-next-line
import Worker from 'comlink-loader!../../workers/worker';
import {
  Container,
  InnerContainer,
  Code,
} from './styles';

export const Form = () => {
  const worker = new Worker();
  const onClick = async (e) => {
    const check = await worker.addStuff(1, 1);
    window.alert(`Confirming 1 + 1 = ${check}!`);
  };
  return (
    <Container>
      <InnerContainer>
        <h1>Code</h1>
        <Code>
          function addStuff(a, b) {'{'}
            return a + b;
          {'}'}
        </Code>
        <Button
          rightIcon="double-chevron-right"
          intent="success"
          text="Run"
          onClick={onClick}
         />
      </InnerContainer>
    </Container>
  )
};

export default Form;
