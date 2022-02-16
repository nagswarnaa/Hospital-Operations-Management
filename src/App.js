
import './App.css';
import NavBar from './components/navbar';
import Prescription from './components/prescription';
import PatientTable from './components/patient';
import Transaction from './components/transaction';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className='container'>
      <Router>
        <Switch>
          <Route path="/" exact>
            <PatientTable />
          </Route>

          <Route path="/patient/:id" >
            <Prescription />
          </Route>
          <Route path="/transaction" >
            <Transaction />
          </Route>
        </Switch>
      </Router>
      {/* <PatientTable></PatientTable> */}
      {/* <Prescription></Prescription> */}
    </main>
  );
}

export default App;
