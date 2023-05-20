import React, { useState } from 'react'
import './LoginPage.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo2 from './img/logo2.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logIn = e => {
    e.preventDefault();
  }
 
  return (
    <>
    <Header />
    <div className='container'>
      <div className='login'>
          <div className='login_container'>
              <img className='image' src={logo2} alt="logo" />
              <h1>Log In</h1>
              <form>
                  <h4>E-mail</h4>
                  <input type='text' value={email} 
                  onChange={e => setEmail(e.target.value)} />
                  
                  <h4>Password</h4>
                  <input type='password' value={password}
                  onChange={e=> setPassword(e.target.value)} />

                  <button type='submit' onClick={logIn} className='login_button'>Login</button>
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
