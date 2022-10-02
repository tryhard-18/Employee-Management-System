import './App.css';
import { AddEmployee } from './components/AddEmployee';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { EmployeeList } from './components/EmployeeList';
import { UpdateEmployee } from './components/UpdateEmployee';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<EmployeeList/>}/>
        <Route exact path='/' element={<EmployeeList/>}/>
        <Route exact path='/employeeList' element={<EmployeeList/>}/>
        <Route exact path='/addEmployee' element={<AddEmployee/>}/>
        <Route exact path='/editEmployee/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
