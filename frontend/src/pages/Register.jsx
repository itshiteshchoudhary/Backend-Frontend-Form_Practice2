import axios from "axios"
import { useState } from "react"
import {Link} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"

const Register = () => {
    const [value,setValue]= useState({
        email : "",
        password : "",
    })

    const handleSubmit =async(e)=>{
        e.preventDefault()
        
        try {
            const {data} = await axios.post('http://localhost:4000/register',
                {...value},{withCredentials:true}
            )
            // console.log(data);
            
        } catch (error) {
            console.log("something went wrong wile registering !!",error);            
        }
    }

  return (
    <div>
        <h2>Register Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email'
                onChange={(e)=>setValue({...value, [e.target.name]:e.target.value})} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password'
                onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} />
            </div>
            <button type='submit'>Submit</button>
            <span>
                Already have an account ? <Link to="/login">Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register