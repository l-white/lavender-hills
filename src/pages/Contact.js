import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import styled from 'styled-components';

const InputStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "5px",
  width: "300px",
  height: "30px",
  fontFamily: "Arial",
  border: "1px dashed #000080",
  textAlign: "center",
};

const ButtonStyle = {
  backgroundColor: "#000080",
  color: "white",
  width: "200px",
  height: "50px",
  borderRadius: "25px",
  marginTop: "10px",
  border: "1px solid white",
  fontWeight: "bold",
  fontSize: "20px",
}
  

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-your-app-name.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
    <p>Don't see an apartment that fits your needs?<br />Send us a message and we'll be glad to connect you with one of our partners.</p>
      <form onSubmit={handleSubmit}>
        <input style={InputStyle}
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input style={InputStyle}
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea style={InputStyle}
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button style={ButtonStyle} type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm;