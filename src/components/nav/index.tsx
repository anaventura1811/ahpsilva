import React from 'react';
import { NavContainer } from './styles';
import logo from '../../assets/logo/ahpsilva-site-logo.png';

type Props = {};

export default function Nav(props: Props) {
  return (
    <NavContainer>
      <div className='logo-container'>
        <img src={logo} alt="Logo do site AHP Silva"/>
      </div>
      <div className='space' />
      <ul>
        <li>
          Artigos
        </li>
        <li>
          Nossa História
        </li>
        <li>
          Atuação
        </li>
        <li>
          Processos
        </li>
        <li>
          Contato
        </li>
      </ul>
    </NavContainer>
  );
};
