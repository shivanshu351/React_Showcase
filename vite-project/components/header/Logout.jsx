import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.service'
import { logout } from '../../appwrite/store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try
        {
            authService.logout().then(() => {
                dispatch(logout())
            })
        }
        catch(error)
        {
            console.log("Error occured",error)
        }
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn