import React from 'react'
import {
    Link
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const Employee = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e, id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }
    return (
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.emailId}</td>
            <td>
                <Link onClick={(e)=>editEmployee(e, employee.id)} className='mx-2' to=''>Edit</Link>
                <Link onClick={(e)=>deleteEmployee(e, employee.id)} to=''>Delete</Link>
            </td>
        </tr>
    )
}
