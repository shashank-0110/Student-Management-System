import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { First } from 'react-bootstrap/lib/Pagination';
// import { Link } from 'react-router-dom';
 
    function Branch() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`https://63e889595f3e35d898f1cf26.mockapi.io/Branch`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
        <button type='button' className='addbutton' onClick={()=>handleCreate()} >Add Branch</button>
    <Table  className='table' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>HOD</th>
          <th>Total Seats</th>
          <th>Filled Seats</th>
          <th>Faculties</th>
          <th>ACTION</th>

        </tr>
      </thead>
      <tbody>
      {data.map((datas) => 
         (
        <tr>
          <td>{datas.BranchName}</td>
          <td>{datas.HOD}</td>
          <td>{datas.TotalSeats}</td>
          <td>{datas.FilledSeats}</td>
          <td>{datas.Faculties}</td>
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
        const res = await axios.delete(`https://63e889595f3e35d898f1cf26.mockapi.io/Branch`+id)
     }
     del();
     const updatedData = data.filter((d) => id !== d.id)
     setData(updatedData)
    
    }
    function handleUpdate(data){
      const payload = {}
      payload.id = data.id;
      payload.firstName = data.BranchName;
      payload.lastName = data.HOD;
      payload.BranchName = data.TotalSeats;
      payload.Email = data.FilledSeats;
      payload.PhoneNumber = data.Faculties;
      console.log(payload);
      navigate("/UpdateBranch",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
        navigate("/CreateBranch")
      }
}

export default Branch;