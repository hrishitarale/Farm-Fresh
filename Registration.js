import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './Registration.css';
import Header from "./Header";
import Footer from "./Footer";
import RegistrationValidation from "./RegistrationValidation";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAd_wkaybNICoR22ra7n1QSBVBxKFMQRBk",
    authDomain: "main-project-b1451.firebaseapp.com",
    projectId: "main-project-b1451",
    storageBucket: "main-project-b1451.appspot.com",
    messagingSenderId: "618039256048",
    appId: "1:618039256048:web:d01450d3b4d777bb1c3335"    
  };
  firebase.initializeApp(firebaseConfig);
function Registration () {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = async (event) =>{
       event.preventDefault();
       setErrors(RegistrationValidation(values));
       if(Object.keys(errors).length === 0){
            try{
                const firestore = firebase.firestore();
                await firestore.collection('users').add(values);
                navigate('/');
            }catch(error){
                console.log("Error storing data in Firebase:", error);
            }
        }
    };
    const handleInput = (event)=>{
        setValues((prev) => ({...prev,[event.target.name]: event.target.value }));
      }
    return(
        <>
        <Header />
        <div className="container">
            <div className='registration'>
                <div className="registration_title">Registration</div>
                    <div className="content">
                        <form action="" onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">First Name</span>
                                <input type="text" placeholder="Enter your First Name" 
                                onChange={handleInput} name='firstName' />
                                {errors.firstName && <span className="red-danger">{errors.firstName}</span>}
                            </div>
                            <div className="input-box">
                                <span className="details">Last Name</span>
                                <input type="text" placeholder="Enter your Last Name" onChange={handleInput}
                                name='lastName' />
                                {errors.lastName && <span className="red-danger">{errors.lastName}</span>}
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" onChange={handleInput}
                                name='email' />
                                {errors.email && <span className="red-danger">{errors.email}</span>}
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" name="phoneNumber" onChange={handleInput}/>
                                {errors.phoneNumber && <span className="red-danger">{errors.phoneNumber}</span>}
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" name="password" onChange={handleInput} />
                                {errors.password && <span className="red-danger">{errors.password}</span>}
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="text" placeholder="Confirm your password" name="confirmPassword" onChange={handleInput}/>
                                {errors.confirmPassword && <span className="red-danger">{errors.confirmPassword}</span>}
                            </div>
                        </div>
                        <div className="gender-details">
                            <input onChange={handleInput} type="radio" name="gender" id="dot-1" />
                            <input onChange={handleInput} type="radio" name="gender" id="dot-2" />
                            <input onChange={handleInput} type="radio" name="gender" id="dot-3" />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                            <label htmlFor="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                            </label>
                            <label htmlFor="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                            </label>
                            <label htmlFor="dot-3">
                                <span className="dot three"></span>
                                <span className="gender">Prefer not to say</span>
                            </label>
                            {errors.gender && <span className="red-danger">{errors.gender}</span>}
                            </div>
                        </div>
                        <div className="button">
                            <button type='submit'  className='register_button'>Register</button>
                        </div>
                        </form>
                    </div>
            </div>
        </div> 
        <Footer /> 
        </>  
    )

}

export default Registration;
