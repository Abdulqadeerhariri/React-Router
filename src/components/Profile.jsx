import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user, setUser} = useContext(UserContext)
    if(!user) return <div className='text-white'>please fill the box</div>
    return <div className='text-white'>Welcome :-  {user.username} <br />
    Password :- {user.password}</div>
}

export default Profile