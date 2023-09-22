import React, { useEffect, useState } from 'react'
import { Container } from 'bootstrap-4-react/lib/components/layout'
import { Link } from 'react-router-dom'
import axios from 'axios';

const baseURL = `${process.env.REACT_APP_URL}/contacts.json?companyId=560&countryId=226&page=1`
const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4';
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const ButtonA = () => {
const [post, setPost]= useState([]);


useEffect(()=>{
  axios.get(baseURL,config).then(res=>{
      setPost(res.data.contacts)
      
  }).catch((error)=> {
    console.log(error);
  });
  },[])
  
  return (
    
   <section className='buttonA_section'>
    <Container>
       <div className='text-center'><h1>US Contacts</h1>
       <Link to="/buttonA" className='buttonA button my-4 d-inline-block mr-2'>switching to Modal A </Link>
       <Link to="/buttonB" className='buttonB button my-4 d-inline-block mr-2'>switching to Modal B </Link>
       <Link to="/" className='buttonC button my-4 d-inline-block'>switching to Modal c </Link>
       </div>
       <table border={1} className='mt-5 buttonB' width='100%'>
        <tbody>
          {
            Object.values(post).map((e, i) => {   
             return(
              <tr key={e.id}>
              <td> {e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.phone_number}</td>
              
            </tr>
             )
            })
          }
           
        </tbody>
       </table>

    </Container>
   </section>
  )
}

export default ButtonA