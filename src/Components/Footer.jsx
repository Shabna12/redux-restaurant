import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div style={{height:'350px'}} className='container-fluid mt-5 w-100 bg-secondary'>
        <div className='d-flex justify-content-between m-3'>
          <div style={{width:'400px'}} className="intro">
            <h4 className='text-dark fw-bolder'> <i className="fa-solid fa-utensils fa-sm me-2 mt-5"></i> G A S T R O N O M Y</h4>
            <p style={{color:'darkblue'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa, consequatur vitae voluptatum accusantium similique ab? Velit sint tempora reprehenderit, debitis quisquam rem beatae eligendi accusamus recusandae harum eum tenetur.
            </p>
            <p style={{color:'darkblue'}}>Code licensed LUMINAR, docs CC BY 3.0.</p>
            <p style={{color:'darkblue'}}>Currently v5.3.2.</p>
          </div>
          <div className="links d-flex flex-column mt-5">
            <h5 className='text-dark fw-bold'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none', color:'darkblue'}}>Home</Link>
          </div>
          <div className="contact d-flex flex-column mt-5">
           <h5 className='text-dark fw-bold'>Contact Us</h5>
           <div className="d-flex">
             <input placeholder='Enter your email here' type="text" className='form-control' />
             <button className='btn btn-info ms-1'> <i className='fa-solid fa-arrow-right'></i> </button>
           </div>
           <div className="icons d-flex justify-content-between mt-3">
             <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-twitter'></i> </a>
             <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-facebook'></i> </a>
             <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-linkedin'></i> </a>
             <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-instagram'></i> </a>
             <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-github'></i> </a>
             <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-solid fa-phone'></i> </a>
            </div>
         </div>
        </div>
        <p className='text-center mt-3 fw-bold' style={{color:'darkblue'}}>Copyright © Sanjay Paul, 2024 GASTRONOMY.</p>
      </div>
    </>
  )
}

export default Footer