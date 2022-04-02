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
        <div>
          <li onClick={() => handleClickOnField("criminal")}>
            {clicked === "criminal" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito criminal
          </li>
          <li onClick={() => handleClickOnField("civil")}>
          {clicked === "civil" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito civil
          </li>
          <li onClick={() => handleClickOnField("familia")}> 
          {clicked === "familia" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito de família
          </li>
          <li onClick={() => handleClickOnField("previdenciario")}>
          {clicked === "previdenciario" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito previdenciário
          </li>
          <li onClick={() => handleClickOnField("sucessorio")}>
          {clicked === "sucessorio" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito sucessório
          </li>
        </div>
        <div>
          <li onClick={() => handleClickOnField("consumidor")}>
          {clicked === "consumidor" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito do consumidor
          </li>
          <li onClick={() => handleClickOnField("trabalhista")}>
          {clicked === "trabalhista" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito trabalhista
          </li>
          <li onClick={() => handleClickOnField("administrativo")}>
          {clicked === "administrativo" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito administrativo
          </li>
          <li onClick={() => handleClickOnField("empresarial")}>
          {clicked === "empresarial" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito empresarial ou comercial
          </li>
          <li onClick={() => handleClickOnField("eleitoral")}>
          {clicked === "eleitoral" ? <ChevronDown size={20} strokeWidth={3} color={"#d08d57"}/> : <ChevronRight size={20} strokeWidth={3} color={"#f3efe9"} />}
            Direito eleitoral
          </li>
        </div>
      </ul>
    </FieldsContainer>
  );
}

export default FieldsOfWork;
