import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [BranchName, setBranchName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [CGPA, setCGPA] = useState('');

    const postData = () => {
        if(!firstName || !lastName || !BranchName || !Email || !PhoneNumber || !CGPA){
            window.alert("Incomplete Details")
            return;
        }
        axios.post(`https://63e889595f3e35d898f1cf26.mockapi.io/fakeData`, {
            firstName,
            lastName,
            BranchName,
            Email,
            PhoneNumber,
            CGPA
        
        })
         setFirstName('')
         setLastName('')
         setBranchName('')
         setEmail('')
         setPhoneNumber('')
         setCGPA('')

    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    {/* <label  >First Name</label> */}
                    <input type="text" placeholder='First Name'  onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div class="form-group">   
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    </div>
            <div class="form-group">  
                    {/* <label>Branch Name</label> */}
                    <input type="text" placeholder='Branch Name' onChange={(e) => setBranchName(e.target.value)} value={BranchName} />
                    </div>
            <div class="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={Email} />
                    </div>
            <div class="form-group">
                    {/* <label>CGPA</label> */}
                    <input type="number" placeholder='CGPA' onChange={(e) => setCGPA(e.target.value)} value={CGPA} />
                    </div>
            <div class="form-group">
                    {/* <label>Phone Number</label> */}
                    <input type="number" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={PhoneNumber} />
                    </div>
            
                
                <Button onClick={postData}  type='submit'>Submit</Button>
            
            </Form>
        </div>
    )
    
}