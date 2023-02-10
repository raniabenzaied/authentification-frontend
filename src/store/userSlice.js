import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const userSlice = createSlice({
    name:'user',
    initialState:[{
        id:uuidv4(),
        name : 'Rania',
        email:'bzrania@gmail.com',
        age : 21,
        password:'raniarania',
        role:'admin'
    }],
    reducers:{
        setUser:(state,action)=>{
            return action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer