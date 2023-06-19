import React, { useState } from 'react'
import './LoginPage.css';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import validation from'./LoginValidation';
import 'firebase/firestore';


function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: ' ',
    password: ' '
  } )
  const[errors,setErrors] = useState({});

  const handleInput = (event)=>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
  }
  const handleSubmit=(event) =>{
    event.preventDefault();
    setErrors(validation(values));
    if(Object.keys(errors).length === 0){
      navigate('/');
      window.alert('Login Successfully !!');
    }
  };

  return (
    <>
    <Header />
    <div className='container'>
      <div className='login'>
          <div className='login_container'>
              <h1>Log In</h1>
              <form action ="" onSubmit={handleSubmit} >
                <div className='mb-3'>
                  <h4>E-mail</h4>
                  <input type='email' placeholder="Enter email" name='email'
                  onChange={handleInput} />
                  {errors.email && <span className='red-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                  <h4 htmlFor="email">Password</h4>
                  <input type='password' placeholder='Enter Password' name='password'
                  onChange={handleInput} />
                  {errors.password && <span className='red-danger'>{errors.password}</span>}
                </div>
                  <button type='submit' className='login_button'>Login</button>
              </form>
              <div className='signin'>
                <h3>OR</h3>
              </div>
              <Link to="/Registration">
              <button>SignIn</button>
              </Link>
          </div> 
      </div>
    </div>
    <Footer />
    </>
  )
}

export default LoginPage;
