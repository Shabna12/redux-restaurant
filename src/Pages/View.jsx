import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useParams } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'



const View = () => {

  const [showModal, setShowModal] = useState(false)
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [restaurant, setRestaurant] = useState({})
  const { id } = useParams();


  useEffect(() => {
    if(localStorage.getItem("allRestaurants")){
      const allRestaurants = JSON.parse(localStorage.getItem("allRestaurants"));
      setRestaurant(allRestaurants.find((item)=>item.id == id))
    }
  }, [])

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleShowOffcanvas = () => setShowOffcanvas(true)
  const handleCloseOffcanvas = () => setShowOffcanvas(false)



  return (
    <>
     <Header/>
     <div style={{backgroundColor:'springgreen'}}>
       <div className="container justify-content-center align-items-center mt-5">
         <div className="row">
           {
             restaurant ?(
               <div className='d-flex'>
                 <div className="col-md-6">
                   <img width={'500px'} height={'600px'} className=' rounded-5' src={restaurant.photograph} alt="" />
                 </div>
                 <div className="col-md-6 mt-5">
                   <h1 className='fw-bolder'> {restaurant.name} </h1>
                   <h4 className='fw-bolder mt-4 text-dark' style={{fontFamily:'Josefin Sans'}}> Location : <span className='text-danger'> {restaurant.neighborhood} </span></h4>
                   <h4 className='fw-bolder mt-4 text-dark' style={{fontFamily:'Josefin Sans'}}> Address : <span className='text-danger'>{restaurant.address}</span> </h4>
                   <h4 className='fw-bolder mt-4 text-dark' style={{fontFamily:'Josefin Sans'}}>Cuisine : <span className='text-danger'>{restaurant.cuisine_type}</span></h4>
                   <div className="d-flex align-items-center mt-5">
                     <button onClick={handleShowModal} className='btn btn-primary mt-4'>Operating Hours</button>
                     <button onClick={handleShowOffcanvas} className='btn btn-primary mt-4 ms-4'>Reviews</button>
                   </div>
                 </div>
               </div>
              )
            :
            (
              <div>Wait...!!</div>
            )
           }
         </div>
       </div>
     </div>

     {/* modal */}
     <Modal className="modal-backdrop-blur" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="m-auto">Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {restaurant?.operating_hours ? (
            <ul>
              {Object.entries(restaurant.operating_hours).map(([day, hours]) => (
                <li className="mt-3" key={day}>
                  <p className='fw-bold'>{day}:</p> {hours}
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-danger fw-bolder fs-2'>No operating hours available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
     </Modal>


      {/* offcanvas - bottom */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bolder fs-2">Review : </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {restaurant?.reviews ? (
            restaurant.reviews.map((review, index) => (
              <div key={index} className="mb-5 mt-3">
                <h5 className="fw-bold"><i className="fa-solid fa-user text-primary border p-2 rounded-5 me-2"></i>{review.name}</h5>
                <p className='fs-4 fw-bold'>{review.comments}</p>
                <small className="fw-bolder">Rating: {review.rating}</small>
              </div>
            ))
          ) : (
            <p className='text-danger fw-bolder fs-2'>No reviews available.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default View