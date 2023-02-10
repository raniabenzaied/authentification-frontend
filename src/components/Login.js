import React ,{useState}from 'react'
import './register.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()

  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')


  // enregistrement du token dans le localstorage 
const handleLogin = async (values) =>{
  try{
      const res = await axios.post('http://localhost:5003/auth/user/signin',values)
       await localStorage.setItem('token' , res.data.token)    
       navigate('/app/private')}



  catch(err){
    console.log(err,'this is a login error')
  }
}



  return (





    //partie login
    <div>
       <div id="login-box">
  <div class="left">
    <h1>Log In</h1>
    
      <input type="text"  placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type="button" className='input' name="signup_submit" value="log me in" onClick={()=>handleLogin({email,password})}>Log me In</button>
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

export default Login
