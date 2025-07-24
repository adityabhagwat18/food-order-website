import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Signup() {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [Phone,setPhone]=useState("")
  const [City,setCity]=useState("")
  const [password,setpassword]=useState("")
  function adduser(e)
  {
    e.preventDefault()
    let user={name,email,Phone,City,password}
    fetch("http://localhost:3000/users",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
      
    })
    
  }
  return (
    <div className='container text-start mt-5'>
      <h3 className='text-center mb-4'>New User Form</h3>
       <Form onSubmit={adduser}>
       <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupname">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" className='w-50' value={name} onChange={(e)=>setname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='w-50' value={email} onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone number" className='w-50' value={Phone} onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupcity">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter City" className='w-50' value={City} onChange={(e)=>setCity(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
        <Form.Label> Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='w-50' value={password} onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='mx-auto d-block'>
      Signup
      </Button>
    </Form>
      
    </div>
  )
}

export default Signup