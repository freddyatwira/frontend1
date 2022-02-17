import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from "react";
import Home from './Home';
import AddTodos from '../components/AddTodos';
import ImageUploader from '../components/ImageUploader';
import { useHistory } from 'react-router-dom';

const AllPages = () => {

    const [ todos, setTodos] = useState([])
    const [ title, setTitle ] = useState('')
    const [ description, setDescription] = useState('')

    const history = useHistory()
    
   
    useEffect(() =>{
      getTodos();
    },[])
  
// this is the viewpoint of the website


    const getTodos =async() =>{
      try {
        const response = await axios.get('https://kenhotex.atwira.com/todos/')
        setTodos(response.data)
        console.log("DATAS:", response.data)
      } catch (error) {
        // console.log(`Error: ${error.message}`)
      }
    }
// this is the endof viewpoint of the website

// handleSubmit is referenced at AddTodos.js 
// the button on the rightside bottom corner
    const handleSubmit = async(e) =>{
      e.preventDefault();
      try {
          await axios.post('https://kenhotex.atwira.com/todos/', {
              title, description, completed:false
          })
          getTodos()
          history.push("/")
          setTitle('')
          setDescription('')
          history.push("/")
      } catch (error) {
          console.log(`Error: ${error.message}`)
      }
      
      
  }
// the endof handleSubmit


// the begining  of like and unlike button 
  const likeTodo = async(id) =>{
    try {
      const todo = todos.filter(todo => todo.id === id)[0]
      todo.completed = true
      await axios.put(`https://kenhotex.atwira.com/todos/${id}`, todo)
      getTodos()
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
// endof like

  

    const unlikeTodo = async(id) =>{
      try {
        const todo = todos.filter(todo =>todo.id === id)[0]
        todo.completed = false
        await axios.put(`https://kenhotex.atwira.com/todos/${id}`, todo)
        getTodos()
      } catch (error) {
        console.log(`Error: ${error.message}`)
      }
    }
// the endof like and unlike
// the button at Home.js




// the begining of delete function
// it is referenced at Home.js
    const deleteTodo = async(id) =>{
        try {
            await axios.delete(`https://kenhotex.atwira.com/todos/${id}/`)
            getTodos()
            console.log("DEL:", getTodos())
            
        } catch (error) {
            alert(error);
            console.log(`Error: ${error.message}`)
        }
    }
// endof delete function


    // the beging of editting function

  const editTodo = async(todo) =>{
    try {
      await axios.put(`https://kenhotex.atwira.com/todos/${todo.id}/`, todo)
      getTodos()
    } catch (error) {
      alert(error);
      console.log(`Error: ${error.message}`)
  }
  }

// endof editting

// the end of function



  return(

      <HomeCover>
    

{/* the leftbar with an adding inputs*/}

      <LeftBar>
      <ImageUploader />
     </LeftBar>

{/* the endof leftbar with an adding inputs*/}

{/* the andding for at the right bottom corner */}

      <FormBar>
        <AddTodos 
            handleSubmit={handleSubmit}
            setDescription={setDescription}
            setTitle={setTitle}
            title={title}
            description ={description}
            
            />
      </FormBar>

{/* the andding for at the right bottom corner */}


   {/* the bar displaying the content as home*/}  
   
      <MidBar>
    
        {
          todos.map((todo, index) =>
                <Home key={index}
                      id={todo.id}
                      title={todo.title}
                      image={todo.image}
                      description ={todo.description}
                      completed={todo.completed}
                      deleteTodo={deleteTodo}
                      likeTodo={likeTodo}
                      unlikeTodo={unlikeTodo}
                      editTodo={editTodo}
                      
                      />
                  
           
            )
        }
  

    
      </MidBar>
   
 {/* the endof bar displaying the content as home*/}   


{/* the leftbar with an adding inputs*/}

      <LeftBar>
      <ImageUploader />
      </LeftBar>

{/* the endof leftbar with an adding inputs*/}
      
      </HomeCover>

  )
};

export default AllPages;


// overall page display styling
const HomeCover = styled.main`
  display:flex;
  padding-top: 76px;
  overflow: hidden;

`

// the endof the overall styling 

// midbar or home display styling
const MidBar = styled.div`
  display: block;
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
  @media(max-width:768px){
      display: block;
      width: 100vw;
      padding-left: 0px;
      padding-right: 0px;
    }

  
`
// the end of midbar styling


// the left bar styling
const LeftBar = styled.div`
@media(max-width:768px){
  display: none;
}

`
// the endof eftbar styling

// input button on the right buttom styling
const FormBar = styled.div`
  position: fixed;
  font-size: 50px;
  padding: 50px;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;

  `
//  the endof the button styling