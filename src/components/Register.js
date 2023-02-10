import React ,{useState} from 'react'
import { useNavigate } from 'react-router'
import './register.css'
import {postauthRegister} from '../api/auth'

const Register = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  const handleAdd = async(values)=>{
    await postauthRegister(values)
    navigate('/login')
  }

  return (
    <div>
      <div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    
    <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text"  placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <input type="password"  placeholder="Retype password" />
    <button className='input' type="button"  onClick={()=>handleAdd({name,email,password})} value="Sign me up" >Sign me up</button>
    <button className='input' type="button" name="signup_submit" onClick={()=>navigate('/login')}> Go to Login</button>
  </div>
  


  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
    </div>
  )
}

export default Register
