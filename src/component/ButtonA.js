import React, { useEffect, useState } from 'react'
import { Container } from 'bootstrap-4-react/lib/components/layout'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';

import axios from 'axios';


const ButtonA = () => {

  const [content, setContent] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);  
  const [hasMore, setHasMore] = useState(true); // Indicate if there's more content to load


  const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4';
  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

  


useEffect(()=>{
  loadContent(pageNumber)  
  },[])


  const loadContent = (page) => {
    const baseURL = `${process.env.REACT_APP_URL}/contacts.json?companyId=560&countryId=226&page=${page}`
    // Mock API call
      axios.get(baseURL,config).then(res=>{
        setContent(res.data.contacts)  
        setPageNumber(page+1);    
            
            
        }).catch((error)=> {
          console.log(error);
        });
  
  };

  
  
  return (
    <InfiniteScroll
    dataLength={content.length} // This is important to prevent loading the same content again when scrolling
    next={() => loadContent(pageNumber)}
    hasMore={hasMore}
    loader={<h4 className='loader_text'>Loading...</h4>}
    endMessage={<p>No more items to load</p>}
  >
   <section className='modal-content buttonA_section'>
    <Container>
    <div className='text-center'><h1>All Contacts</h1>
       <Link to="/buttonA" className='buttonA button my-4 d-inline-block mr-2'>switching to Modal A </Link>
       <Link to="/buttonB" className='buttonB button my-4 d-inline-block mr-2'>switching to Modal B </Link>
       <Link to="/" className='buttonC button my-4 d-inline-block'>switching to Modal c </Link>
       </div>
       <div className='table_div'>
       <table border={1} className='mt-5 buttonA' width='100%' height='120px'>
        <tbody>
          {
            Object.values(content).map((e, i) => {   
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
   </InfiniteScroll>
  )
}

export default ButtonA