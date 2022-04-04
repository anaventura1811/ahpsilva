import React from 'react';
import Nav from '../../components/nav';
import { Container } from '../home/styles';
import { LoginContainer } from './styles';

type Props = {};

const Login = (props: Props) => {
  return (
    <LoginContainer>
      <Container>
        <Nav />
      </Container>
      <form onSubmit={(ev) => { ev.preventDefault(); console.log('click')}}>
        <input type="text" />
        <input type="password"/>
        <button onClick={() => { console.log('click do btn')}}>
          Entrar
        </button>
        <div>
          <span>Não possui uma conta? Crie a sua conta aqui</span>
        </div>
      </form>
    </LoginContainer>
  );
}

export default Login;
