import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Update() {

    const navigate = useNavigate();
    let location = useLocation();

    const [id, setId] = useState(location.state.payload.id);
    const [firstName, setFirstName] = useState(location.state.payload.firstName);
    const [lastName, setLastName] = useState(location.state.payload.lastName);
    const [BranchName, setBranchName] = useState(location.state.payload.BranchName);
    const [Email, setEmail] = useState(location.state.payload.Email);
    const [PhoneNumber, setPhoneNumber] = useState(location.state.payload.PhoneNumber);
    const [CGPA, setCGPA] = useState(location.state.payload.CGPA);

    const UpdateStudent = () => {
        if(!firstName || !lastName || !BranchName || !Email || !PhoneNumber || !CGPA){
            window.alert("Incomplete Details")
            return;
        }

        const payload = {}
        payload.id = id;
        payload.firstName = firstName;
        payload.lastName = lastName;
        payload.BranchName = BranchName;
        payload.Email = Email;
        payload.PhoneNumber = PhoneNumber;
        payload.CGPA = CGPA;
        console.log(location.state.payload.id);

        axios.put(`https://63e889595f3e35d898f1cf26.mockapi.io/fakeData/${location.state.payload.id}`, payload)
        .then(() => {
            navigate(-1);
        })
    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='ID'  onChange={(e) => setId(e.target.value)} value={location.state.payload.id}/>
            </div>
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='First Name'  onChange={(e) => setFirstName(e.target.value)} defaultValue={location.state.payload.firstName}/>
            </div>
            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} defaultValue={location.state.payload.lastName} />
                    </div>
            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Branch Name' onChange={(e) => setBranchName(e.target.value)} defaultValue={location.state.payload.BranchName} />
                    </div>
            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} defaultValue={location.state.payload.Email} />
                    </div>
            <div class="form-group">
                    {/* <label>CGPA</label> */}
                    <input type="number" placeholder='CGPA' onChange={(e) => setCGPA(e.target.value)} defaultValue={location.state.payload.PhoneNumber} />
                    </div>
            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} defaultValue={location.state.payload.CGPA} />
                    </div>
            
                
                <Button onClick={UpdateStudent}>Submit</Button>
            
            </Form>
        </div>
    )
    
}

