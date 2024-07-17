import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoSend } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Data } from '../../context/Data';
const Contact = () => {
  let navigate = useNavigate()
  let {Formconfirmation,Handlechange} = useContext(Data)
  let [Form,setForm] = useState({
    nom : "",
    email : "",
    msg : ""
  })
  // this for handling the input change
  const Change = (event)=>{
    Handlechange(event,setForm,Form)
    console.log(Form)
  }
  const Confirm = (event)=>{
    event.preventDefault();
    if (Formconfirmation(Form) === 3) {
      const form = new FormData()
      form.append("nom",Form.nom)
      form.append("email",Form.email)
      form.append("msg",Form.msg)
      axios.post("http://localhost/MY_PROJECTS/cosmetic/Contact.php",form).then((res)=>{
        toast.success("your message is succeefuly sent !! Thank You")
        navigate("/")
      })
    }
  }
  return (
    <section className='mt-20 mb-10 w-[90%] relative left-1/2 -translate-x-1/2 space-y-8'>
      <div>
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.0552319808735!2d-7.679313324705485!3d33.55194127334941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62db00ca0d471%3A0xbdd6fd3d40ff2e86!2sRue%20oued%20sebou!5e0!3m2!1sfr!2sma!4v1721234616838!5m2!1sfr!2sma" className='w-[100%] sh' height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <form className='space-y-5' onSubmit={Confirm}>
        <h1 className=' text-yellow-700 font-bold text-center text-[35px]'>Contact us.</h1>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='text-yellow-700'>NOM COMPLET</label>
          <input type="text" name='nom' className='h-10 sh pl-2 focus:outline-none rounded-md' onChange={Change}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="">Email </label>
          <input type="email" name='email' className='h-10 sh pl-2 text-yellow-700 focus:outline-none rounded-md' onChange={Change}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="" >Message</label>
          <textarea name="msg" id="" className='min-h-32 max-h-52 sh pl-2 text-yellow-700 focus:outline-none rounded-md' onChange={Change}></textarea>
        </div>
        <button className='w-[150px] h-12 rounded-md sh bg-white text-yellow-700 duration-500 transition-all hover:text-white hover:bg-yellow-700 flex items-center justify-center gap-3'><IoSend/> Send</button>
      </form>
    </section>
  )
}

export default Contact