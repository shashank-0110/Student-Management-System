import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { First } from 'react-bootstrap/lib/Pagination';
// import { Link } from 'react-router-dom';
 
    function Professor() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`https://63efe6f6271439b7fe78057c.mockapi.io/Professor`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
        <button type='button' className='addbutton' onClick={()=>handleCreate()} >Add Professor</button>
    <Table  className='table' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Branch Name</th>
          <th>Email</th>
          <th>PhoneNumber</th>
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
          <td>
             <button type='button' className='edit' onClick={()=>handleUpdate(datas)} >EDIT</button>
             <button type='button' className='delete'  onClick={()=>handleDelete(datas.id)} >DELETE</button>
          </td>
        </tr>
       
        ))} 
      </tbody>
    </Table>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`https://63efe6f6271439b7fe78057c.mockapi.io/Professor`+id)
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
      console.log(payload);
      navigate("/UpdateProfessor",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
        navigate("/CreateProfessor")
      }
}

export default Professor;