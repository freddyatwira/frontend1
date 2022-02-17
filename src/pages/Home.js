import styled from 'styled-components';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { ImBubbles2 } from "react-icons/im";
import DeleteIcon from '@material-ui/icons/Close';
import { FiMoreVertical } from "react-icons/fi";
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


const Home = ({ id,title,description, editTodo, unlikeTodo, completed, deleteTodo, likeTodo }) => {

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  

  const editTodoHandler = (title, description) => {
    const todo = { id, title, description }
    editTodo(todo)
    setNewTitle('')
    setNewDescription('')
  }




  return(
      <HomeCover>


        {/* the 3 dotted at the right corner*/}
          <FilistIcon>
           <FiMoreVertical />
          </FilistIcon>
          {/* the endof the 3 dotted */}

      {/* the home display */}
        <h5>{title}</h5>

        <small>today@12:45pm</small>
      
        <p>{description}</p>

        <small>time_here</small>

        <hr />
      {/* endof the home display */}

        {/* the beging of lowbar with like, comment, delete and share button */}
        <LowBar>

        {/* like and unlike button function*/}
        <span>
       {!completed ? (<label onClick={()=>likeTodo(id)}>Like</label>
       ):(<label style={{color: "#03c6fc"}} onClick={()=>unlikeTodo(id)}>
          Liked
           <BsFillHandThumbsUpFill />
          </label>
       )}
        
        </span>
        {/* the endof like and unlike button function */}

          {/* begining of edit */}
          <label  onClick={handleShow}>Edit
          <ImBubbles2 />
          </label>
          {/* endof edit */}


{/* toggled div for editting */}
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create a post</Modal.Title>
              </Modal.Header>
                  <form className='form-group mx-1'>

                  <input 
                  value={newTitle} 
                  onChange={e=>setNewTitle(e.target.value)} 
                  type="text" placeholder='Title' 
                  className='form-control my-1' />


                  <textarea value={newDescription} 
                  onChange={e=>setNewDescription(e.target.value)} 
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
                  <Button variant="outline-success" onClick={() =>editTodoHandler(newTitle)}>
                    Post
                  </Button>
                </Modal.Footer>
            </Modal>
{/* endof toggled div for edit*/}


      {/* share button */}
          <label onClick={()=>deleteTodo(id)} style={{ color:"red"}}>{<DeleteIcon />}Delete</label>
          <label>Share <FiShare />
          </label>
          {/* endof share button */}

        </LowBar>
        {/* the end of lowbar with buttons*/}



      </HomeCover>
  )
};

export default Home;

const HomeCover = styled.main`
  background: white;
  border-radius: 10px;
  
 img{
   width: 100%;
   max-height: 500px;

 } 
  h5{
    margin-top: 7px;
    padding-top: 20px;
    padding-left: 25px;
    padding-bottom: 0px;
  }
  small{
    color:grey;
    padding-left: 15px;
  }
  p{
    margin-top: 12px;
    padding-left: 15px;
    padding-right: 15px;
  }
  hr{
    margin-left: 15px;
    margin-right: 15px;
    z-index: -1;
  }

 
`
const LowBar = styled.span`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  label{
    cursor: pointer;
  }
  
`
const FilistIcon = styled.span`
display: flex;
float: right;
margin-top: 20px;
margin-right: 20px;
cursor: pointer;

`
