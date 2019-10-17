import React, { useState } from 'react';
 

const Form = props => {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler= event => {
        event.preventDefault();
        setInfo({...info, [event.target.name]: event.target.value});
        console.log(event.target.value)
    }
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(info);
        setInfo({ name: "", email: "", role: "" });
    };


    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label> 
           <input id="name" type="text" name="name" placeholder="Full Name" value={info.name} onChange={changeHandler}/>
           <label htmlFor='email'>Email: </label>
           <input id="email" type="text" name="email" placeholder="Email" value={info.email} onChange={changeHandler}/>
           <label htmlFor='role'>Role: </label>
           <input id="role" type="text" name="role" placeholder="Role" value={info.role} onChange={changeHandler}/>

            <button type="submit">Add Team Member</button>
        </form>
    )
}

export default Form;