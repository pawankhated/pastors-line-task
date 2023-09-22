import React, { useEffect, useState } from 'react'
import { Container } from 'bootstrap-4-react/lib/components/layout'
import { Link } from 'react-router-dom'
import axios from 'axios';


const ButtonA = () => {

  const [post, setPost]= useState([]);
  const [page, setPagination]= useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4';
  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

  


useEffect(()=>{
  loadContent(page)  
  },[])


  const loadContent = (page) => {
    if (isLoading) return; // Prevent loading if another request is in progress
    setIsLoading(true);
    // Replace this with your API call to fetch more content based on the page number
    // For example, you can use Axios or the fetch API to make the request.
    // Append the new content to the existing content state.
    // Make sure to handle any errors and update the state accordingly.
    const baseURL = `${process.env.REACT_APP_URL}/contacts.json?companyId=560&countryId=226&page=${page}`

    // Mock API call
      axios.get(baseURL,config).then(res=>{
        setPost(res.data.contacts)      
        setIsLoading(false);
 
        
            
            
        }).catch((error)=> {
          console.log(error);
        });
  
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setIsScrolled(true); // Se

    // Check if the user has scrolled to the bottom of the modal
    if (scrollTop + clientHeight >= scrollHeight - 300) {
      console.log(e.target);
      setIsScrolled(true); // Set the flag to prevent additional scrolls
      alert(scrollTop);
      if (scrollTop === 0 && page > 1) {
        setPagination(page-1);
      }else{        
        setPagination(page+1);
      }

      alert(page);
      loadContent(page);

    }
  };

  
  return (
    
   <section className='buttonA_section'>
    <Container>
    <div className='text-center'><h1>All Contacts</h1>
       <Link to="/buttonA" className='buttonA button my-4 d-inline-block mr-2'>switching to Modal A </Link>
       <Link to="/buttonB" className='buttonB button my-4 d-inline-block mr-2'>switching to Modal B </Link>
       <Link to="/" className='buttonC button my-4 d-inline-block'>switching to Modal c </Link>
       </div>
       <div className='table_div'  onScroll={handleScroll}>
       <table border={1} className='mt-5 buttonA' width='100%' height='120px'>
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
       </div>

    </Container>
   </section>
  )
}

export default ButtonA