import React from 'react'
import {useForm} from 'react-hook-form'
import Form from '../components/Form';

const contactUs = () => {

  return (
    <div>
      <p>Welcome to OpenAgent.We've been around since 2013, and our vision is to
        make it easy for people to buy,sell and own property.<br/>Here are the different
        way you can contact us.
      </p>
      <h3>Contact Us Details</h3>
      <p>Phone:13 24 34 <br/> Email:support@openagent.com.au</p>
      <Form/>
      <h3>Postal Address:</h3>
      <p>PO Box 419,Alexandria NSW 1435</p>
      <h3>Contact centre hours of operation</h3>
      <p>Monday - Friday 8:30 - 5:00</p>
      
    </div>
  )
}

export default contactUs
