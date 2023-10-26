import React, { useState } from 'react'

function Contact() {
    const [data,setDetails]=useState({
        uname:'',
        uemail:'',
        uphone:'',
        uaddress:''
    });
    let SubmitData=(e)=>{
    e.preventDefault();
       localStorage.setItem('username',data.uname);
       
    }

    let setData=(e)=>{
        let name=e.target.name;
       setDetails({...data,
        [name]:e.target.value
       });
    }
    return (
        <div className='bg-warning'>
            <div className='card px-2 '>
            <div className='card-header'>
                Fill the Form for better Service
            </div>
            <div className='card-body py-2'>
            <form className='form-control'>
                <label htmlFor="username">Enter UserName</label>
                <input type="text" value={data.uname} className='form-control'  name="uname" onChange={setData} />
                <label htmlFor="username">Enter Email</label>
                <input type="email" value={data.uemail} className='form-control'  name="uemail" onChange={setData} />
                <label htmlFor="username">Enter Phone Number</label>
                <input type="text" value={ data.uphone} className='form-control'  name="uphone" onChange={setData} />
                <label htmlFor="username">Enter Address</label>
                <input type="text" value={data.uaddress} className='form-control'  name="uaddress" onChange={setData} />
                <input type="submit"  onClick={SubmitData} value="Submit Request " className='btn btn-success mt-2'/>         </form>

            </div>
        </div>
            
        </div>
    )
}

export default Contact