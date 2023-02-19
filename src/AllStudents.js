import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { First } from 'react-bootstrap/lib/Pagination';
// import { Link } from 'react-router-dom';
 
    function SmallExample() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`https://63e889595f3e35d898f1cf26.mockapi.io/fakeData`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
      <div>
      <button type='button' className='addbutton' onClick={()=>handleCreate()} >Add Student</button>
      </div>
      <div>
    <Table  className='table' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Branch Name</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>CGPA</th>
          <th>ACTION</th>

        </tr>
      </thead>
      <tbody>
      {data.map((datas) => 
         (
        <tr>
          <td>{datas.firstName}</td>
          <td>{datas.lastName}</td>
          <td>{datas.BranchName}</td>
          <td>{datas.Email}</td>
          <td>{datas.PhoneNumber}</td>
          <td>{datas.CGPA}</td>
          <td>
             <button type='button' className='edit' onClick={()=>handleUpdate(datas)} >EDIT</button>
             <button type='button' className='delete'  onClick={()=>handleDelete(datas.id)} >DELETE</button>
          </td>
        </tr>
       
        ))} 
      </tbody>
    </Table>
    </div>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`https://63e889595f3e35d898f1cf26.mockapi.io/fakeData/`+id)
     }
     del();
     const updatedData = data.filter((d) => id !== d.id)
     setData(updatedData)
    
    }
    function handleUpdate(data){
      const payload = {}
      payload.id = data.id;
      payload.firstName = data.firstName;
      payload.lastName = data.lastName;
      payload.BranchName = data.BranchName;
      payload.Email = data.Email;
      payload.PhoneNumber = data.PhoneNumber;
      payload.CGPA = data.CGPA;
      console.log(payload);
      navigate("/Update",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
      navigate("/Create")
    }

}

export default SmallExample;