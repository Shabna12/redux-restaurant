import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Pagination, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { fetchRestaurants } from '../Redux/Slice/productSlice'



function Mainpage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  const {allRestaurants, error, loading} = useSelector(state=>state.RestaurantReducer)


  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  // Calculate the total number of pages
  const totalPages = Math.ceil(allRestaurants?.length / itemsPerPage)

  // Get current page items
  const presentItems = allRestaurants?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage === 1 ? currentPage * itemsPerPage : undefined
  )

  // Handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (
    <>
     <Header insideHome={true}/>
     <div style={{backgroundColor:'darkcyan'}}>
       <div className='container mt-5'>
         {
          loading ?
          <div className='text-center mt-5 fw-bolder'>
            <Spinner className='me-2' animation="border" variant="success" /> Loading..
          </div>
          :
          <div className="row">
           {
             presentItems?.length>0 ?
             presentItems?.map(restaurant => (
               <div className="col-md-4 mt-5">
                 <Card style={{ width: '18rem' }} >
                   <img className='rounded-5' src={restaurant?.photograph} alt="" />
                   <Card.Body className='text-center'>
                     <Card.Title className='fw-bolder fs-3 text-primary'> {restaurant?.name} </Card.Title>
                      <p style={{fontFamily:"Josefin Sans"}} className='mt-3 fs-5 fw-bold'> Cusine: {restaurant?.cuisine_type} </p>
                      <p style={{fontFamily:"Josefin Sans"}} className='mt-3 fs-5 fw-bold'> Neighborhood : {restaurant?.neighborhood} </p>
                     <Link to={`/${restaurant?.id}/view`}><Button variant="primary">Preview</Button></Link>
                    </Card.Body>
                  </Card> 
               </div>
              ))
              :
             <div className="fw-bolder fs-2 text-center mt-5 mb-5 text-danger">
                Restaurant not found !!
             </div>
            }
          </div>
        }
       </div>
       {/* pagination */}
       <Pagination className="d-flex justify-content-center mt-5 mb-5">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
     </div>
    </>
  )
}

export default Mainpage