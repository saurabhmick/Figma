import React, { useState } from 'react'
import Footer from './Footer';

function Contact() {
    const [data,setDetails]=useState({
        uname:'',
        uemail:'',
        uphone:'',
        uaddress:''
    });
    const[style,setStyle]=useState('block');
    let SubmitData=(e)=>{
    e.preventDefault();
       localStorage.setItem('username',data.uname);
       setStyle('none');
        document.getElementById('message').style.display='block';
    }

    let setData=(e)=>{
        let name=e.target.name;
       setDetails({...data,
        [name]:e.target.value
       });

    }
    return (
        <div className=' w-75 m-auto'>
            <div className='card px-1 ' style={{display:style}}>
            <div className='card-header'>
                Fill the Form for better Service
            </div>
            <div className='card-body py-1'>
            <form className='form-control' >
                <label htmlFor="username">Enter UserName</label>
                <input type="text" value={data.uname} className='form-control'  name="uname" onChange={setData} />
                <label htmlFor="username">Enter Email</label>
                <input type="email" value={data.uemail} className='form-control'  name="uemail" onChange={setData} />
                <label htmlFor="username">Enter Phone Number</label>
                <input type="text" value={ data.uphone} className='form-control'  name="uphone" onChange={setData} />
                <label htmlFor="username">Enter Address</label>
                <input type="text" value={data.uaddress} className='form-control'  name="uaddress" onChange={setData} />
                <input type="submit"  onClick={SubmitData} value="Submit Request " className='btn btn-success mt-2'/>         
                </form>
            </div>
        </div>
        <div className='card px-1 ' style={{display:'none'}} id='message'>
            <div className='card-header'>
                Thank You for Filling this Form 
            </div>
            <div className='card-body py-1'>
                <p className='text-success'>Welcome {data.uname}</p>
            </div>
        </div>
            
        </div>
    )
}

export default Contact