import React from 'react';
import { Link } from 'react-router-dom';
import { SummaryContainer } from './styles';
import photo from './justice.png';
type Props = {};

export default function Summary(props: Props) {


  return (
    <SummaryContainer>
      <div className='image-container'>
        <img  src={photo} alt="Justiça"/>
      </div>
      <div className='history-text'>
        <h2>Nossa História</h2>
        <p>O Escritório AHP Silva nasceu de um projeto denominado Advocacia do Cidadão, idealizado em 2005 pelo então estudante de Direito, Antônio Henrique Pereira da Silva. 
        Esta nova plataforma de advocacia, voltada para o acolhimento humanizado do jurisdicionado, contou com as instruções e ensinamentos de inúmeros professores e colegas da PUC Minas - Betim. Com isso, há mais de quinze anos o Escritório destaca-se pela atuação eficiente na prestação de serviços jurisdicionais.
        </p>
        <Link to="/nossa-historia"  className='summary-btn'>
          Saiba mais
        </Link>
      </div>
    </SummaryContainer>
  );
};
