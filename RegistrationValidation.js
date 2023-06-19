function RegistrationValidation(values){
    let errors ={};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const confpassword_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
    const isValidPhoneNumber = (phoneNumber) =>{
        const phoneNumberRegex = /^[0-9]{10}$/;
        return phoneNumberRegex.test(phoneNumber);
    }
    
    //formData = values setFormData = setValues
    //validate first name
    if(!values.firstName){
        errors.firstName = "First name is required";
    }
    //validate last name
    if(!values.lastName){
        errors.lastName = "Last name is required";
    }
    //validate email
    if(!values.email){
        errors.email = "Email is required";
    } else if(!email_pattern.test(values.email)){
        errors.email="Invalid email format";
    }
    // validate phone number
    if(!values.phoneNumber){
        errors.phoneNumber = "phone number is required";
    }else if (!isValidPhoneNumber(values.phoneNumber)){
        errors.phoneNumber="Invalid phone number format";
    }
    //validate password
    if(!values.password){
        errors.password= "password is required";
    }else if(values.password.length < 8){
        errors.password= "password must be at least 8 characters long";
    }
    //validate confirm password
    if(!values.confirmPassword){
        errors.confirmPassword = "confirm password is required";
    }else if(values.password !== values.confirmPassword){
        errors.confirmPassword= "password does not match";
    }
    //validate Gender
    if(!values.gender){
        errors.gender = "Gender is required";
    }

    return errors;
}

export default RegistrationValidation ;
