import axios from 'axios'

export const postauthRegister = async (values)=>{
    const addUser = await axios.post('http://localhost:5003/auth/user/signup',{...values})
}

export const fetchAccount = async() =>{
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5003/auth/user/getaUser' , {headers:{Authorization:token}})
    return data
}


