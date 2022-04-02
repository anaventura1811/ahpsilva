import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';
import { FieldsContainer } from './styles';

type Props = {};

const FieldsOfWork = (props: Props) => {
  const [clicked, setClick] = useState<any | string>(null);

  const handleClickOnField = (param: any | string) => {
    if(!clicked) {
      setClick(param);
    } else {
      setClick(null);
    }
  };

  return (
    <FieldsContainer>
      <h2>Áreas de atuação</h2>
      <ul>
          <li className={clicked && clicked !== 'criminal' ? 'inactive' : ''} onClick={() => handleClickOnField("criminal")}>
            {clicked === "criminal" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito criminal
          </li>
            {clicked === 'criminal' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'civil' ? 'inactive' : ''} onClick={() => handleClickOnField("civil")}>
          {clicked === "civil" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito civil
          </li>
            {clicked === 'civil' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'familia' ? 'inactive' : ''} onClick={() => handleClickOnField("familia")}> 
          {clicked === "familia" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito de família
          </li>
            {clicked === 'familia' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'previdenciario' ? 'inactive' : ''} onClick={() => handleClickOnField("previdenciario")}>
          {clicked === "previdenciario" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito previdenciário
          </li>
            {clicked === 'previdenciario' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'sucessorio' ? 'inactive' : ''} onClick={() => handleClickOnField("sucessorio")}>
          {clicked === "sucessorio" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito sucessório
          </li>
            {clicked === 'sucessorio' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'consumidor' ? 'inactive' : ''} onClick={() => handleClickOnField("consumidor")}>
          {clicked === "consumidor" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito do consumidor
          </li>
            {clicked === 'consumidor' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'trabalhista' ? 'inactive' : ''} onClick={() => handleClickOnField("trabalhista")}>
          {clicked === "trabalhista" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito trabalhista
          </li>
            {clicked === 'trabalhista' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'administrativo' ? 'inactive' : ''} onClick={() => handleClickOnField("administrativo")}>
          {clicked === "administrativo" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito administrativo
          </li>
            {clicked === 'administrativo' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'empresarial' ? 'inactive' : ''} onClick={() => handleClickOnField("empresarial")}>
            {clicked === "empresarial" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito empresarial ou comercial
          </li>
            {clicked === 'empresarial' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
          <li className={clicked && clicked !== 'eleitoral' ? 'inactive' : ''} onClick={() => handleClickOnField("eleitoral")}>
          {clicked === "eleitoral" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito eleitoral
          </li>
            {clicked === 'eleitoral' &&
              (<div className='description' >
                <p>Defesa em Processo e/ou Inquérito Penal</p>
                <p>Liberdade Provisória</p> 
                <p>Habeas Corpus</p>
                <p>Revogação de Prisão Preventiva </p>
                <p>Revogação de Prisão Temporária</p>
                <p>Relaxamento de Prisão em Flagrante</p>
                <p>Revisão Criminal</p>
                <p>Atuação em 1ª e 2ª Instância e Instâncias, além de sermos, atualmente, referência em atuação perante o STJ e STF</p>
              </div>)
            }
      </ul>
    </FieldsContainer>
  );
}

export default FieldsOfWork;
