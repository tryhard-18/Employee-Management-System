import React from 'react'

import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useEffect, useState } from 'react';
import { Employee } from './Employee';

export const EmployeeList = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData  = async() => {
            setLoading(true);
            try{
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data)
            }
            catch(error){
                console.log(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    const deleteEmployee = (e, id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res)=>{
            // console.log(res);
            if(employees){
                setEmployees((prevElement)=>{
                    return prevElement.filter((employee)=>employee.id !== id);
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        }) 
    }

    return (
        <div className="container my-5">
            <button onClick={() => navigate("/addEmployee")} className="btn btn-primary">Add Employee</button>
            <table className="table my-2">
                <thead>
                    <tr>
                        <th scope="col">FIRST NAME</th>
                        <th scope="col">LAST NAME</th>
                        <th scope="col">EMAIL ID</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody>
                        {employees.map((employee) => (
                            <Employee employee={employee} key={employee.id} deleteEmployee={deleteEmployee} />
                        ))}
                    </tbody>
                    )}
            </table>
        </div>
    )
}



// import React from 'react'
// import {
//     Link
// } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import EmployeeService from '../services/EmployeeService';
// import { useEffect, useState } from 'react';

// export const EmployeeList = () => {
//     const navigate = useNavigate();
//     const [employees, setEmployees] = useState([])
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         EmployeeService.getEmployees()
//             .then((response) => {
//                 setEmployees(response.data);
//             });
//         setLoading(false);
//     }, [])

//     return (
//         <div className="container my-5">
//             <button onClick={() => navigate("/addEmployee")} className="btn btn-primary">Add Employee</button>
//             <table className="table my-2">
//                 <thead>
//                     <tr>
//                         <th scope="col">FIRST NAME</th>
//                         <th scope="col">LAST NAME</th>
//                         <th scope="col">EMAIL ID</th>
//                         <th scope="col">ACTIONS</th>
//                     </tr>
//                 </thead>
//                 {!loading &&
//                     <tbody>
//                         {employees.map((emp) => {
//                             return (<tr>
//                                 <td scope="row">{emp.firstName}</td>
//                                 <td>{emp.lastName}</td>
//                                 <td>{emp.emailId}</td>
//                                 <td>
//                                     <Link className='mx-2' to=''>Edit</Link>
//                                     <Link to=''>Delete</Link>
//                                 </td>
//                             </tr>)
//                         })}
//                     </tbody>
//                 }
//             </table>
//         </div>
//     )
// }
