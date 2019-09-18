import React, { useState } from 'react';

function Form(){


    return(
        <div>
        <form>
           <label htmlFor='name'>Full Name</label> 
           <input type="text" name="name" placeholder="Full Name" value="" />
           <label htmlFor='email'>Your Email</label>
           <input type="text" name="name" placeholder="Email" value="" />
           <label htmlFor='role'>Your Role</label>
           <input type="text" name="name" placeholder="Role" value="" />
           <button>Add Member</button>
          
        </form>
        </div>

    )
}

export default Form;