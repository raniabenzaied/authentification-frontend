import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import NavContainer from './NavContainer'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import AdminComponent from './admin/AdminComponent'
import UserComponent from './user/UserComponent'
import {fetchAccount} from '../api/auth'
import {setUser} from '../store/userSlice'
const PrivateRoute = () => {
    const auth = useSelector(state=>state.user)
    console.log('auth',auth)

    const dispatch = useDispatch() 

    //partie navigation
    const navigation  = useNavigate()

    //partie importation de data de redux 


    
    const getAuth = async () =>{
      const data = await fetchAccount()
      console.log(data,'account data')
    

    }

    useEffect(()=>{
      getAuth()
    },[])

    const token = localStorage.getItem('token')
    console.log('token',token)
  return (
    <div>
            <NavContainer/>

      {
        auth.role === 'admin' ? (<AdminComponent/>) : (<UserComponent/>)
      }
    





    </div>
  )
}

export default PrivateRoute
