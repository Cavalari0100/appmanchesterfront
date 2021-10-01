import './App.css';
import { Container } from 'reactstrap';
import MainNavBar from './components/MainNavBar/MainNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatNewPaciente from './components/Paginas/Cadastro/CadastroPaciente';
import FirstPage from './components/Paginas/FirstPage/FirstPage';
//import EmDev from './components/Paginas/EmDev/EmDesenvolvimento';
import ListAllPacientes from './components/Paginas/Listas/ListAllPacientes';
import LoginEnfermeiro from './components/Paginas/login/LoginEnfermeiro';
import CreatNewEnfermeiro from './components/Paginas/Cadastro/CadastroEnfermeiro';


function App() {
  return (
    <div className="App">
      <MainNavBar></MainNavBar>
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={FirstPage} />
            <Route exact path='/cadastroPaciente' component={CreatNewPaciente} />
            <Route exact path='/pacientes' component={ListAllPacientes} />
            <Route exact path='/login-enfermeiro' component={LoginEnfermeiro}/>
            <Route exact path='/register-enfermeiro' component={CreatNewEnfermeiro}/>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
