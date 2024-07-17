import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import cat from "../../assets/cosmetic/new_collec.png"
import { FaSearch } from "react-icons/fa";
import { Data } from '../../context/Data';
const Categorie = () => {
  const {AllProduct,setAllProduct} = useContext(Data)
  const [Filter,setFilter] = useState(AllProduct)
  let [active,setactive] = useState(5)
  const Active = (id)=>{
    setactive(id)
  }
    // a useeffect to do a filter 
  useEffect(()=>{
    if (active === 1) {
      const filt = AllProduct.filter((prod)=>prod.Type === "homme")
      setFilter(filt)
    }else if(active === 2){
      const filt = AllProduct.filter((prod)=>prod.Type === "femme")
      setFilter(filt)
    }else if(active === 3){
      const filt = AllProduct.filter((prod)=>prod.Type === "enfant")
      setFilter(filt)
    }
    else if(active === 4){
        const filt = AllProduct.filter((prod)=>prod.Type === "mix")
        setFilter(filt)
    }else{
      setFilter(AllProduct)
    }
  },[active])

  const HandleChange = ()=>{
    const val = document.getElementById("search").value

    const Filter = AllProduct.filter((prod)=>prod.Nom.includes(val))

    setFilter(Filter)
  }
  
  return (
  <>
    <section className='mt-5 h-96 flex justify-center items-center relative'>
      <img src={cat} alt="cat" className=' absolute w-full h-full object-cover'/>
      {/* <h1 className='z-10 font-bold text-[40px] sm:text-[60px] lg:text-[80px] text-white absolute top-0'>PRODUCT</h1> */}
    </section>
    <section className='h-10 mt-10  w-[65%] relative left-1/2 -translate-x-1/2 flex justify-center md:justify-end items-center'>
      <div className='w-60 h-8 rounded-md sh flex items-center'>
        <input type="text" id='search' placeholder='Recherche ....' onChange={HandleChange} className='pl-2 h-full w-[90%]  bg-transparent border-none focus:outline-none'/>
        <FaSearch size={20}/>
      </div>
    </section>
    <section className='mt-10 w-[90%] relative left-1/2 -translate-x-1/2 flex justify-center'>
          <ul className='flex justify-between w-[90%] sm:w-[80%] lg:w-[65%] font-bold text-[20px]'>
            <li className={`relative duration-500 transition-all text-green-800 cursor-pointer text-sm md:text-[18px] ${active === 1 ? "aft text-yellow-500" : <></>}`} onClick={()=>Active(1)}>Homme</li>
            <li className={`relative duration-500 transition-all text-green-800 cursor-pointer text-sm md:text-[18px] ${active === 2 ? "aft text-yellow-500" : <></>}`} onClick={()=>Active(2)}>Femme</li>
            <li className={`relative duration-500 transition-all text-green-800 cursor-pointer text-sm md:text-[18px] ${active === 3 ? "aft text-yellow-500" : <></>}`} onClick={()=>Active(3)}>Enfant</li>
            <li className={`relative duration-500 transition-all text-green-800 cursor-pointer text-sm md:text-[18px] ${active === 4 ? "aft text-yellow-500" : <></>}`} onClick={()=>Active(4)}>Mix</li>
            <li className={`relative duration-500 transition-all text-green-800 cursor-pointer text-sm md:text-[18px] ${active === 5 ? "aft text-yellow-500" : <></>}`} onClick={()=>Active(5)}>Tous</li>
          </ul>
    </section>
    {
      Filter.length !== 0 ?
    
      <section className='mt-20 mb-20 w-[90%] relative left-1/2 -translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
        {
        Filter.map((watch)=>{
          return(
            <>
              <nav key={parseInt(watch.Id)} className='h-[450px] w-[250px]   rounded-md flex flex-col gap-5 pb-2 relative'>
                 
                  <NavLink to={`/ProductDetails/${parseInt(watch.Id)}`} className='h-[300px] flex justify-center items-center' onClick={()=>scrollTo({top:0,behavior : "smooth"})}>
                      <img src={`http://localhost/MY_PROJECTS/cosmetic/assets/${watch.Pic}`} alt="pic" className=' h-[200px] object-cover duration-500 transition-all hover:scale-110 cursor-pointer mix-blend-multiply'/>
                  </NavLink>
                  <p className='w-[30%] h-[40px] rounded-sm self-center insh bg-white-900 text-sm flex justify-center items-center text-yellow-700 '>{watch.Type}</p>
                  <div className='flex gap-3 flex-col items-center'>
                    <h1 className='font-bold text-[16px] text-black'>{watch.Nom}</h1>
                    <p className='font-bold text-[20px] text-yellow-700'>{watch.Price} MAD</p>
                  </div>
                <NavLink to={`/ProductDetails/${parseInt(watch.Id)}`} className="self-center">
                  <button className='w-[170px] h-10 text-sm rounded-md sh bg-white text-yellow-700 duration-500 transition-all hover:text-white hover:bg-yellow-700 flex items-center justify-center gap-3' onClick={()=>scrollTo({top:0,behavior : "smooth"})}><FaCartShopping size={20}/> Shop Now</button>
                </NavLink>
              </nav>
            </>
          )
        })
      } 
    
    </section> : <><p className='text-center font-bold text-yellow-700 text-[25px] mt-10'>No Product in this Catégorie Yet !!</p></>
    }
  </>
  )
}

export default Categorie