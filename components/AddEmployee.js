import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import {useNavigate } from 'react-router-dom';

export const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    })
    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value})
    }
    const saveEmployee =(e)=>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response)=>{ 
            // console.log(response); 
            navigate('/employeeList')   
        })
        .catch((error)=>{
            console.log(error);
        })  
    }
    const reset = (e)=>{
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        })
    }
    return (
        <div className="container col-4 my-4">
            <h1>Add a Employee</h1>
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
                <button onClick={(e)=>saveEmployee(e)} type="submit" className="btn btn-outline-success">Save</button>
                <button onClick={(e)=>reset(e)} type="submit" className=" mx-2 btn btn-outline-danger">Clear</button>
            </form>
        </div>
    )
}
