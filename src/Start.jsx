import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Start() {
    let navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user===null) {
            navigate("/login")
        }
        else{
            navigate("/home")
        }
        });
    },[])
  return (
    <div>
      Loading........
    </div>
  )
}

export default Start
