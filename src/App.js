import './App.css';
import {Container} from 'reactstrap';
import MainNavBar from './components/MainNavBar/MainNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import CreatNewPaciente from './components/Paginas/Cadastro/CadastroPaciente';
import FirstPage from './components/Paginas/FirstPage/FirstPage';
import EmDev from './components/Paginas/EmDev/EmDesenvolvimento';


function App() {
  return (
    <div className="App">
      <MainNavBar></MainNavBar>
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={FirstPage}/>
            <Route exact path='/cadastroPaciente' component={EmDev}/>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
