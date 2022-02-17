import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosAddCircle } from "react-icons/io";




function AddTodos({ setDescription, setTitle, handleSubmit, title, description }) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    
    <>

    
    <IoIosAddCircle onClick={handleShow} 
      style={{fontSize: "60px", color:"#03c6fc", cursor:"pointer", borderRadius:"50px", boxShadow: "2px 2px 5px 5px #888888"}}/>
  

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create a post</Modal.Title>
    </Modal.Header>
        <form className='form-group mx-1'>

            <input 
            value={title} 
            onChange={e=>setTitle(e.target.value)} 
            type="text" placeholder='Title' 
            className='form-control my-1' />


            <textarea value={description} 
            onChange={e=>setDescription(e.target.value)} 
            type="text" 
            placeholder='Create your post here...' 
            className='form-control'
            style={{ height:"200px"}}
             />
            
           
        </form>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="outline-success" onClick={handleSubmit}>
        Post
      </Button>
    </Modal.Footer>
  </Modal>

</>

  )
};

export default AddTodos;