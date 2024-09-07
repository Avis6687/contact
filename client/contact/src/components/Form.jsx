import React from 'react'
import {useState} from 'react'

const Form = () => {


    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        info:""
    })

    const postData = async (e) =>{
        e.preventDefault()
        try{
          const response = await fetch(`${process.env.REACT_APP_SERVERURL}/contact`,{
            method:"POST",
            headers: { 'Content-Type':'application/json'},
            body:JSON.stringify(data)
          })
          if(response.status === 200){
            console.log('worked ')
            setShowModal(false)
            getData()
          }
          console.log(response)
        }catch (err) {
          console.error(err)
        }
      }


      const handleChange = (e) =>{
      
        console.log('changing',e)
        const {name,value}= e.target
      
        setData(data => ({
          ...data,
          [name]:value
        }))
      
      }
    

  return (
    <div>
        <h4>Got a question?we'd love to hear from you.</h4>
        <form>
            <input 
            type='text'
            name='firstname' 
            value={data.name}
            placeholder='First Name'
            onChange={handleChange}
            />
            <input 
            name='lastname' 
            type='text'
            value={data.name}
            placeholder='Last Name'
            onChange={handleChange}
            />
            <input 
            type='email' 
            value={data.type}
            placeholder='Email address'
            onChange={handleChange}
            />
            <input 
            name='phone' 
            value={data.name}
            placeholder='Phone Number'
            onChange={handleChange}
            />
            <input 
            name='Info' 
            value={data.name}
            placeholder='Info/Note'
            onChange={handleChange}
            />
            <input type='submit'/>

        </form>
    </div>
  )
}

export default Form
