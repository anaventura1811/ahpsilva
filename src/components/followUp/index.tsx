import React from 'react';
import user from '../../assets/images/user.svg';
import computerIcon from '../../assets/images/computer.svg';
import questions from '../../assets/images/questions.svg';
import { FollowUpContainer } from './styles';

type Props = {};

const FollowUp = (props: Props) => {
  return (
    <FollowUpContainer>
      <h2 className='title_underline'>Acesse seus processos</h2>
      <div className='container'>
        <div className='subcontainer'>
          <div>
            <img src={user} alt="" />
          </div>
          <h3>Área do cliente</h3>
          <p>Acompanhe o andamento do seu processo pelo nosso site</p>
        </div>
        <div className='subcontainer'>
          <div>
            <img src={computerIcon} alt="" />
          </div>
          <h3>
            Área da pessoa colaboradora
          </h3>
          <div className='separator'></div>
        </div>
        <div className='subcontainer'>
          <div>
            <img src={questions} alt="" />
          </div>
          <h3>Assessoria jurídica </h3>
          <p>Tire suas dúvidas ou nos envie sugestões</p>
        </div>
      </div>
    </FollowUpContainer>
  )
}

export default FollowUp;
