import React from 'react'
import { IoTimerSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo/logo_amira.png"
const Header = () => {
    let Active = {
        color: "#d4ae24"
    };
  return (
    <>
    <header className='h-36 sm:h-24 back sh  flex justify-start sm:justify-evenly items-center gap-0 sm:gap-20 flex-col sm:flex-row'>
        <Link to="" className='flex items-center '>
           <img src={logo} alt="logo" className='w-[120px] sm:w-[150px] object-cover relative top-2'/>
        </Link>
       <ul className='flex items-center gap-10 font-bold relative bottom-6 sm:bottom-0'>
            <NavLink to="" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-yellow-500 text-green-800 cursor-pointer'>Home</li>
            </NavLink>
            <NavLink to="/Propos" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-yellow-500 text-green-800 cursor-pointer'>A propos</li>
            </NavLink>
            <NavLink to="/Categorie" style={({isActive})=> isActive ? Active: null}>
                 <li className='transition-colors duration-300 hover:text-yellow-500 text-green-800 cursor-pointer'>Categorie</li>
            </NavLink>
            <NavLink to="/Contact" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-yellow-500 text-green-800 cursor-pointer'>Contact</li>
            </NavLink>
       </ul>
    </header>
    </>
  )
}

export default Header