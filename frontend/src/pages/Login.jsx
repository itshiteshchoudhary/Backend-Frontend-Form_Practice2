import { useState } from "react"
import {Link} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"

const Login = () => {
    const [value,setValue]= useState({
        email : "",
        password : "",
    })

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post("http://localhost:4000/login",{
                ...value
            })
        } catch (error) {
            console.log(error);            
        }
    }

  return (
    <div>
        <h2>Login Account</h2>
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
                Already have an account ? <Link to="/register">Register</Link>
            </span>
        </form>
    </div>
  )
}

export default Login