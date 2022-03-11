import React from 'react';
import Nav from '../../components/nav';
import { Container } from './styles';

type Props = {}

export default function Home(props: Props) {

  return (
    <div>
      <Container>
        <Nav />
      </Container>
      <div className='main-content'>
          Home
      </div>
    </div>
  );
};
