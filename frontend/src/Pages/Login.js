import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import validacion from '../Components/LoginValidation'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home.js';
function Login() {

  function useReloadAndRedirect() {
    const [shouldReload, setShouldReload] = useState(false);
  
    const handleReload = () => {
      setShouldReload(true);
    };
  
    if (shouldReload) {
      window.location.reload();
    }
  
    return handleReload;
  }

  const handleReload = useReloadAndRedirect();



  const [values,setValues] = useState({
    email:'',
    password:''
  })

  const [errors,setErrors]=useState({})
  const hundleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))

  }

  const hundleSumbit =(event)=>{
    event.preventDefault();
    setErrors(validacion(values));
  }

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handdleLogin = (e) =>{
    e.preventDefault();
    const data = {
        username: username,
        password: password
    };
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response=> response.json())
        .then(result => {
            console.log(result.token)
            if(result.token){
                localStorage.setItem('token', result.token)
                setLoginSuccessful(true);
            } else {
                setLoginSuccessful(false);
            }
        })
        .catch(error =>{
            console.log(error)
        })
}
  return (
    
<>{loginSuccessful ? <Home />: <div className="custom-form">
                <form>
                    <label className="custom-label">Username:</label>
                    <input onChange={(event)=>{setUsername(event.target.value)}}
                           placeholder="username"
                           className="custom-input"
                           type="text" />
                    <label className="custom-label">Password:</label>
                    <input onChange={(event)=>{setPassword(event.target.value)}}
                           placeholder="password"
                           className="custom-input"
                           type="password" />
                    <button className="custom-button" onClick={handdleLogin}>Login</button>
                </form>
            </div>}</>
    );
}
export default Login


