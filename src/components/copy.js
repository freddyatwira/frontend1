import React, {useState} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Modal, Header, Footer, Button } from 'react-bootstrap';




function AddTodos({ setDescription, setTitle, handleSubmit, title, description }) {

  const [burgerStatus, setBurger] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    
    <>

    <Button variant="primary" onClick={handleShow}>
    Launch demo modal
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>

</>

  //   <AddForm>
  //   <AddWrapper>
  //       <h4>
  //         <IoIosAddCircle onClick={()=>setBurger(true)} />
  //       </h4>
  //    </AddWrapper>

  //      <BurgerNav show={burgerStatus}>

  //      <CloseWrapper>
  //        <CustomClose onClick={()=>setBurger(false)}/>
  //      </CloseWrapper>
         
  //     <form className='form-group'>
  //         <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder='Title' className='form-control' /><br />
  //         <textarea value={description} 
  //         onChange={e=>setDescription(e.target.value)} 
  //         type="text" 
  //         placeholder='Description' 
  //         className='form-control'
  //         style={{ width: "400px"}} /><br />
          
  //         <button onClick={handleSubmit} className='btn btn-sm btn-success' type='submit'>Submit</button>
  //     </form>
  //      </BurgerNav>
   
  // </AddForm>
  )
}

export default AddTodos;

const AddForm = styled.form`
 

`
const AddWrapper = styled.div`
`


const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top:0;
  margin-top:100px;
  margin-right: 20px;
  box-shadow: 2px 2px 5px 5px #888888;
  border-radius:5px;
  background: white;
  list-style: none;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(110%)'};
li{
  padding: 20px;
  margin-left: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  align-items:center;
  display: flex;
 
  a{
  text-decoration: none;
  color: black;
  font-weight: 550;
  justify-content: flex-start;
  align-items:center;
  display: flex;

}

}
@media(max-width:768px){
  position: fixed;
  top:0;
  margin-top:80px;

}

`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
color: black;
margin: 20px;

`
const CloseWrapper= styled.div`
display: flex;
justify-content: flex-end;
`
