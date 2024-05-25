import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRestaurants } from '../Redux/Slice/productSlice'


const Header = ({insideHome}) => {

  const dispatch = useDispatch()



  return (
    <>
      <Navbar expand="lg" className="bg-dark">
       <Container>
         <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder fs-2 text-warning'> <i className="fa-solid fa-utensils fa-sm me-2" style={{color:'white'}}></i>  G A S T R O N O M Y </Link>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
             <Nav.Link>
               { insideHome && (
                 <input type="text" style={{width:'400px'}} className='rounded p-2' placeholder='Search location !!' onChange={(e)=>dispatch(searchRestaurants(e.target.value.toLowerCase()))}/>
               )}
             </Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
    </>
  )
}

export default Header