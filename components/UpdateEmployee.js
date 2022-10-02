import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const UpdateEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const[employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    })
    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value})
    }
    useEffect(() => {
      EmployeeService.getEmployeeById(id)
      .then((response)=>{
        setEmployee(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [id])
    
    const updateEmployee = (e)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee)
        .then((response)=>{
            navigate('/employeeList');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
  return (
    <div className="container col-4 my-4">
            <h1>Update Employee</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input name='firstName' value={employee.firstName} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="firstName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input name='lastName' value={employee.lastName} onChange={(e)=>handleChange(e)} type="text" className="form-control" id="lastName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name='emailId' value={employee.emailId} onChange={(e)=>handleChange(e)} type="email" className="form-control" id="email"/>
                </div>
                <button onClick={(e)=>updateEmployee(e)} type="submit" className="btn btn-outline-success">Update</button>
                <button onClick={(e)=>{e.preventDefault(); navigate('/employeeList')}} type="submit" className=" mx-2 btn btn-outline-danger">Cancel</button>
            </form>
        </div>
  )
}
