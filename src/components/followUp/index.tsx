import React from 'react'

type Props = {};

const FollowUp = (props: Props) => {
  return (
    <div>
      <h2>Acesse seus processos</h2>
      <div className='container'>
        <div className='subcontainer'>
          <h3>Área do cliente</h3>
          <p>Acompanhe o andamento do seu processo pelo nosso site</p>
        </div>
        <div className='subcontainer'>
          <h3>
            Área da pessoa colaboradora
          </h3>
        </div>
        <div className='subcontainer'>
          <h3>Assessoria jurídica </h3>
          <p>Tire suas dúvidas ou nos envie sugestões</p>
        </div>
      </div>
    </div>
  )
}

export default FollowUp;
