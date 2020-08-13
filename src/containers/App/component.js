import React from 'react';
import { Container, Content } from './styles';
import Header from '../../components/Header/component';
import Footer from '../../components/Footer/component';
import Form from '../../components/Form/component';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Form />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
