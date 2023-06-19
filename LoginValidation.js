function validation(values){
    let error = {}

    if (values.email ===""){
        error.email ="Name should not be empty"
    }
    else{
        error.email=""
    }

    if(values.password === ""){
        error.password="password should not be empty"
    }else{
        error.password=""
    }
    return error;
}

export default validation ;
