import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Pagos from './Pages/Pagos';
import Registrate from './Pages/Registrarte';
import Reserva from './Pages/Reserva';
import Admin from './Pages/Admin'
import {BrowserRouter as Router, Switch,Route } from "react-router-dom";
import CrearUser from './Components/CrearUser';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login"><Login/></Route>
        <Route path="/Pagos"><Pagos/></Route>
        <Route path="/Registrarte"><Registrate/></Route>
        <Route path="/Reservas"><Reserva/></Route>
        <Route path="/Admin"><Admin/></Route>
        <Route path="/Crear"><CrearUser/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </Router>
  );
}
export default App;