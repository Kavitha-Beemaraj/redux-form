import { useState } from "react"
import { login } from "../slicers/user"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Login = () => {
  const dispatch=useDispatch()
  const [name,setName]=useState('')
  const [age,setAge]=useState(0)
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')


  return (
    <div className="add-form ">
        <h2 className="heading">Fill your details:</h2>
        <div className='form-control'>
          <label><strong>Name:</strong></label>
          <input type='text' placeholder='Enter your name'
                  onChange={(e)=> setName(e.target.value)}
                  />
        </div>
        <div className='form-control'>
          <label><strong> Age:</strong></label>
          <input type='number' placeholder='Enter your age' 
                  onChange={(e)=> setAge(e.target.value)}
                  />
        </div>
        <div className='form-control'>
          <label><strong>Email:</strong></label>
          <input type='email' placeholder='Enter your email id' 
                  onChange={(e)=> setEmail(e.target.value)}
                  />
        </div>
        <div className='form-control'>
          <label><strong> Mobile Number:</strong></label>
          <input type='text' placeholder='enter your mobile number' 
                  onChange={(e)=> setMobile(e.target.value)}
                  />
        </div>

        <Link to="/contact"><button className="btn"
                onClick={()=>{dispatch(login({name:name,age:age,email:email, mobile:mobile}))}}
        > Save</button></Link>
  
    </div>
  )
}

export default Login