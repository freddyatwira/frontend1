import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function ImageUploader() {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription] = useState('')
    


    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('todos/', {
                title, description, completed:false
            }).then((title) => console.log(title))
            
            setTitle('')
            setDescription('')
           
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
        
        
    }

  return (

        <form className='form-group'>
            <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder='Title' className='form-control' />
            <input value={description} onChange={e=>setDescription(e.target.value)} type="text" placeholder='Description' className='form-control' />
            
            <button onClick={handleSubmit} className='btn btn-sm btn-success' type='submit'>Submit</button>
        </form>
  )
}

export default ImageUploader