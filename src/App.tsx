import './App.css';
import './global.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import FieldsOfWorkPage from './pages/fieldsOfWork';
import Login from './pages/login';
import FieldOfWork from './pages/field';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nossa-historia" element={<About />}/>
          <Route path="/atuacao" element={<FieldsOfWorkPage />}/>
          <Route path="/atuacao/:id" element={<FieldOfWork />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
