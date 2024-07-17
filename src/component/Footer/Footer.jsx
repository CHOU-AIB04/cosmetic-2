import React from 'react'
import logo from "../../assets/logo/logo_amira.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="h-auto md:h-72 insh back2  flex justify-center items-center pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center w-4/5 gap-6 md:gap-0 ">
        <div className="">
          <img src={logo} alt="logo" className='w-[300px]'/>
        </div>
        <div className="">
          <ul className='space-y-4'>
            <li className='text-green-800'><Link to={"/"}>Acceuil</Link></li>
            <li className='text-green-800'><Link to={"/Propos"}>A Propos</Link></li>
            <li className='text-green-800'> <Link to={"Categorie"}>Categorie</Link></li>
            <li className='text-green-800'><Link to={"Contact"}>CONTACT US</Link></li>
            
            
           
            
          </ul>
        </div>
        <div className="space-y-4 text-center md:text-start">
          <h1 className='font-bold'>FOLLOW US</h1>
          <div className="flex items-center gap-7">
            <span ><FaFacebookF size={30} className='text-yellow-600'/></span>
            <span ><FaInstagram size={30} className='text-yellow-600'/></span>
            <span ><FaXTwitter size={30} className='text-yellow-600'/></span>
            <span ><FaTiktok size={30} className='text-yellow-600'/></span>
          </div>
        </div>
      </div>
      </footer>
      <div className='back h-10 flex justify-center items-center'>
        <h1 className='text-green-800 text-sm'>2024 @AMIRA MOROCCO COSMETICS Tous les droits sont réservés</h1>
      </div>
    </>
  )
}

export default Footer