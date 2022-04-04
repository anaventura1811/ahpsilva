import { NavContainer } from './styles';
import logo from '../../assets/logo/logo2.svg';
// import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {};

export default function Nav(_props: Props) {
  return (
    <NavContainer>
      <Link to="/">
        <div className='logo-container'>
          <img src={logo} alt="Logo do site AHP Silva"/>
        </div>
      </Link>
      <div className='space' />
      <ul>
        {/* <li>
          Artigos
        </li> */}
        <li>
          <Link to="/nossa-historia">
            Nossa História
          </Link>
        </li>
        <li>
          <Link to="/atuacao">
            Atuação
          </Link>
        </li>
        {/* <li>
          Processos
        </li> */}
        <li>
          <Link to="/contato">
            Contato
          </Link>
        </li>
      </ul>
      <div>
        {/* <FaUserCircle color="#f4f4f4" size={25} /> */}
      </div>
    </NavContainer>
  );
};
