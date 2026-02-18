import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

  return (
    <div className='bg-black text-white px-5 py-14 rounded-lg flex flex-col gap-7 opacity-80 mt-32 shadow-2xl'>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' className='p-1.5 w-xs border rounded-md' />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='p-1.5 w-xs border rounded-md' />
        <button onClick={handleSubmit} className='py-2 bg-white shadow-2xl text-black rounded-md'>Submit</button>
    </div>
  )
}

export default Login