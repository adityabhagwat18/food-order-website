import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Signout() {
  const navigate=useNavigate()
  useEffect(()=>{
    localStorage.removeItem("login")
    navigate('/signin')
    window.location.reload()
  })
  return (
    <div>
      
    </div>
  )
}

export default Signout