import React, { useState } from 'react';
import axios from 'axios';
// import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
export default function CreateBranch() {
    const [BranchName, setBranchName] = useState('');
    const [HOD, setHOD] = useState('');
    const [TotalSeats, setTotalSeats] = useState('');
    const [FilledSeats, setFilledSeats] = useState('');
    const [Faculties, setFaculties] = useState('');
    // const [CGPA, setCGPA] = useState('');

    const postsData = () => {
        if(!BranchName || !HOD || !TotalSeats || !FilledSeats || !Faculties  ){
            window.alert("Incomplete Details")
            return;
        }
        axios.post(`https://63e889595f3e35d898f1cf26.mockapi.io/Branch`, {
            BranchName,
            HOD,
            TotalSeats,
            FilledSeats,
            Faculties,
        
        })
         setBranchName('')
         setHOD('')
         setTotalSeats('')
         setFilledSeats('')
         setFaculties('')

    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='Branch Name'  onChange={(e) => setBranchName(e.target.value)} value={BranchName}/>
            </div>

            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='HOD' onChange={(e) => setHOD(e.target.value)} value={HOD} />
                    </div>

            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="number" placeholder='Total Seats' onChange={(e) => setTotalSeats(e.target.value)} value={TotalSeats} />
                    </div>

            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="number" placeholder='Filled Seats' onChange={(e) => setFilledSeats(e.target.value)} value={FilledSeats} />
                    </div>

            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Faculties' onChange={(e) => setFaculties(e.target.value)} value={Faculties} />
                    </div>
            
                
                <Button onClick={postsData}  type='submit'>Submit</Button>
            
            </Form>
        </div>
    )
    
}