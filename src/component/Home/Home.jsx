import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import cosmetic pic
import homme from "../../assets/cosmetic/homme.jpg"
import femme from "../../assets/cosmetic/femme.png"
import KIDS from "../../assets/cosmetic/KIDS.jpg"
import collection from "../../assets/cosmetic/new_collec.png"
import colec1 from "../../assets/cosmetic/F-ch.png"
import colec2 from "../../assets/cosmetic/F-corp.png"
import colec3 from "../../assets/cosmetic/F-parfums.png"
import colec4 from "../../assets/cosmetic/F-spray.png"
import colec5 from "../../assets/cosmetic/sv-femme.jpg"
import colec6 from "../../assets/cosmetic/monde-F.png"
// homme collec
import hcollec1 from "../../assets/cosmetic/H-corps.png"
import hcollec2 from "../../assets/cosmetic/H-sv.png"
import hcollec3 from "../../assets/cosmetic/parfum-H.jpg"
import hcollec4 from "../../assets/cosmetic/SCH-H.jpg"
import hcollec5 from "../../assets/cosmetic/spray-h.png"
import hcollec6 from "../../assets/cosmetic/monde-H.png"

// kids collec
import kcollec1 from "../../assets/cosmetic/CHEVEUX_ENFANT.png"
import kcollec2 from "../../assets/cosmetic/SV-ENFANT.jpg"
import kcollec3 from "../../assets/cosmetic/corps_bb.png"
import kcollec4 from "../../assets/cosmetic/spray_bebe.png"
import kcollec5 from "../../assets/cosmetic/purfum_enfant.png"
import kcollec6 from "../../assets/cosmetic/ENFANT.png"
// additional product
import prod1 from "../../assets/cosmetic/diffussion.png"
import prod2 from "../../assets/cosmetic/HYDROLAT.png"
import prod3 from "../../assets/cosmetic/LES_HUILES.png"
import prod4 from "../../assets/cosmetic/huiles_bougie.png"
import prod5 from "../../assets/cosmetic/spa.png"
import prod6 from "../../assets/cosmetic/savon.png"
import makeup from "../../assets/cosmetic/makeup.png"
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
  // slide const
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 
  let [slide,setslide] = useState(()=>{
    if (window.innerWidth>=850) {
      return 3
    } else if(window.innerWidth <=550){
      return 1
    }else{
      return 2
    }
  })
  useEffect(()=>{
   addEventListener("resize",()=>{
    if (window.innerWidth>=850) {
      setslide(3)
    } else if(window.innerWidth <=550){
     setslide(1)
    }else{
      setslide(2)
    }
   })
  },[window.innerWidth])
  return (
    <>

    <Slider {...Settings} className='w-full h-full  mt-10  mb-9'>
    <div className='w-full h-full'>
       <img src={femme} alt="pic" className='w-full h-full object-cover'/>
      </div>
      <div className='w-full h-full'>
       <img src={homme} alt="pic" className='w-full h-full object-cover'/>
      </div>
      <div className='w-full h-full'>
       <img src={KIDS} alt="pic" className='w-full h-full object-cover'/>
      </div>   
    </Slider>
    <section className='w-full h-36 back mb-20 flex justify-center items-center'>
      <h1 className='text2 text-[20px] md:text-[30px] font-bold '>LIVRAISON PARTOUT AU MAROC</h1>
    </section>
    <section className='h-auto w-4/5 relative left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className=' w-full h-full'>
        <img src={collection} alt="pic" />
      </div>
      <div className='bg flex flex-col justify-around items-center w-full h-full pt-2 pb-2'>
        <h1 className='text2 text-[12px] md:text-[20px] font-bold'>RETROUVEZ TOUS VOS PRODUITS COSMETIQUES</h1>
        <p className='text-green-800 self-start w-[95%] ml-4'>Une marque inspirante et dynamique : c'est  AMIRA MOROCCO COSMETICS ,découvrez les nouveautés .Pour ce faire, la marque a conçu des centaines de produits : maquillage, soins, capillaires, parfums, produits de bain . Sa mission est de démocratiser une beauté performante et engagée dans une démarche responsable : des produits faciles à utiliser, abordables et accessibles à tous.</p>
        <button className='w-36 h-12 insh text-white rounded-md'>DÉCOUVRIR ICI</button>
      </div>
    </section>
    {/* the women section */}
      <section className=' h-auto w-[90%] relative left-1/2 -translate-x-1/2 mt-20 flex flex-col  items-center gap-5'>
      <h1 className='text-green-800 underline text-[30px] font-bold'>LE MONDE DES FEMMES</h1>
      <article className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:grid-0'>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={colec1} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>SOIN CHEVEAUX</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={colec5} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>SOIN VISAGE</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={colec2} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>SOIN DU CORPS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={colec4} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>SPRAY CORPS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={colec3} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>LES PARFUMS</button>
        </nav>
      </article>
    </section>
 
    {/* SECTION WOMEN */}
    <section className='w-4/5 h-auto relative left-1/2 -translate-x-1/2 mt-20 gap-7 grid grid-cols-1 md:grid-cols-2'>
    <nav className='w-full h-full back2 flex flex-col items-center justify-around gap-5 rounded-sm sh pt-2 pb-2'>
      <div className="w-44 h-44 rounded-full overflow-hidden">
        <img src={colec6} className='object-cover' alt="pic" />
      </div>
      <h1 className='text-green-800 font-bold text-[25px] underline'>LE MONDE DES FEMMES</h1>
      <p className='text-green-800 text-[15px] w-[97%]'>Découvrez les dernières innovations en matière naturelle de notre marque AMIRA MOROCCO COSMETICS , Un large choix de produits corps femme répondent aux besions spécifiques des femmes: crèmes et gommages hydratants visage et corps pour les peaux séches à très sèches ,Sérum revitalisant et masque pour visage créant une routine parfaite..., Des shampoings délicats et des masques capillaire luxueuxs créant une routine parfaite, Huiles et lotions corporelles pour tous les types de peaux, conçues pour prendre soin du corps.</p>
    </nav>
    <nav className='w-full h-full flex justify-center items-center'>
      <img src={colec6} className='object-cover' alt="pic" />
    </nav>
    </section>

    {/* homme section */}
    <section className=' h-auto w-[90%] relative left-1/2 -translate-x-1/2 mt-20 flex flex-col  items-center gap-5'>
      <h1 className='text-green-800 underline text-[30px] font-bold'>LE MONDE DES HOMMES</h1>
      <article className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:grid-0'>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={hcollec4} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SOIN CHEVEAUX</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={hcollec2} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SOIN VISAGE</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={hcollec1} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SOIN DU CORPS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={hcollec5} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SPRAY CORPS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={hcollec3} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>LES PARFUMS</button>
        </nav>
      </article>
    </section>
      {/* SECOND HOME SECTION  */}

      <section className='w-4/5 h-auto relative left-1/2 -translate-x-1/2 mt-20 gap-7 grid grid-cols-1 md:grid-cols-2'>
        <nav className='w-full h-full back2 flex flex-col items-center justify-around rounded-sm sh pt-2 pb-2'>
          <div className="w-44 h-44 rounded-full overflow-hidden">
            <img src={hcollec6} className='object-cover' alt="pic" />
          </div>
          <h1 className='text-green-800 font-bold text-[25px] underline'>LE MONDE DES HOMMES</h1>
          <p className='text-green-800 text-[15px] w-[97%]'>Parce que la peau des hommes nécessitent des soins particulier, découvrez notre marque cosmétique  <b> AMIRA MOROCCO COSMETICS  </b> exclusives et prestigieuses, Nous propose toute une gamme de produits spéciale "Homme" : cheveux, soin anti-age, soin hydratant, soin de rasage, gel douche, déodorant, </p>
        </nav>
        <nav className='w-full h-full flex justify-center items-center'>
          <img src={hcollec6} className='object-cover' alt="pic" />
        </nav>
    </section>

    {/* kids section */}

    <section className=' h-auto w-[90%] relative left-1/2 -translate-x-1/2 mt-20 flex flex-col  items-center gap-5'>
      <h1 className='text-green-800 underline text-[30px] font-bold'>LE MONDE DES ENFANTS</h1>
      <article className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:grid-0'>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={kcollec1} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SOIN CHEVEAUX</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={kcollec2} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SOIN VISAGE</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={kcollec3} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SOIN DU CORPS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={kcollec4} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>SPRAY CORPS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between'>
          <div className='w-44 h-44 rounded-full overflow-hidden'>
            <img src={kcollec5} alt="pic" className='object-cover'/>
          </div>
          <button className='w-36 h-11 text-green-800 bg-white duration-500 transition-all hover:bg-green-800 hover:text-white sh rounded-md'>LES PARFUMS</button>
        </nav>
      </article>
    </section>
      {/* SECOND KIds SECTION  */}

      <section className='w-4/5 h-auto relative left-1/2 -translate-x-1/2 mt-20 gap-7 grid grid-cols-1 md:grid-cols-2'>
        <nav className='w-full h-full back2 flex flex-col items-center justify-around rounded-sm sh pt-2 pb-2'>
          <div className="w-44 h-44 rounded-full overflow-hidden">
            <img src={kcollec6} className='object-cover' alt="pic" />
          </div>
          <h1 className='text-green-800 font-bold text-[25px] underline'>LE MONDE DES ENFANTS</h1>
          <p className='text-green-800 text-[15px] w-[97%]'>Notre marque  <b> AMIRA MOROCCO COSMETICS</b>  proposant des produits naturel pour les enfants de 3 à 12 ans. Les produits   <b> AMIRA MOROCCO COSMETICS  </b>sont formulés avec des ingrédients de qualité, doux pour la peau des enfants et ne contiennent pas de produits chimiques nocifs.</p>
        </nav>
        <nav className='w-full h-full flex justify-center items-center'>
          <img src={kcollec6} className='object-cover' alt="pic" />
        </nav>
    </section>
    {/* OTHER PRODUCTS SECTION */}
    <section className='w-[85%] h-auto relative left-1/2 -translate-x-1/2 mt-20 flex flex-col items-center gap-4'>
      <h1 className='text-green-800 underline text-[30px] font-bold'>NOS AUTRES PRODUITS</h1>
      <article className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:grid-0'>
      <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between gap-5'>
          <div className='w-60 h-60  rounded-sm overflow-hidden'>
            <img src={prod1} alt="pic" className='object-cover'/>
          </div>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>DIFFUSSEUR & ENCENS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between gap-5'>
          <div className='w-60 h-60  rounded-sm overflow-hidden'>
            <img src={prod2} alt="pic" className='object-cover'/>
          </div>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>LES HYDROLATS</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between gap-5'>
          <div className='w-60 h-60  rounded-sm overflow-hidden'>
            <img src={prod3} alt="pic" className='object-cover'/>
          </div>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>LES HUILES</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between gap-5'>
          <div className='w-60 h-60  rounded-sm overflow-hidden'>
            <img src={prod4} alt="pic" className='object-cover'/>
          </div>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>LES BOUGIES</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between gap-5'>
          <div className='w-60 h-60  rounded-sm overflow-hidden'>
            <img src={prod5} alt="pic" className='object-cover'/>
          </div>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>SPA & HAMMAM</button>
        </nav>
        <nav className='h-[250px] md:h-72  flex flex-col items-center justify-between gap-5'>
          <div className='w-60 h-60  rounded-sm overflow-hidden'>
            <img src={prod6} alt="pic" className='object-cover'/>
          </div>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>SAVON</button>
        </nav>
      </article>
    </section>
    <section className='h-auto w-full mt-20 back flex justify-center items-center pt-4 pb-4'>
      <nav className='h-full w-[85%]  grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className=' w-full h-full flex justify-center items-center'>
          <img src={makeup} alt="pic" className='object-cover' />
        </div>
        <div className=' w-full h-full flex flex-col items-center justify-around'>
          <h1 className='text2 text-[19px] md:text-[30px] font-bold text-center'>ESPACE MAKEUP</h1>
          <p className='w-full md:w-4/5 text-green-800'>Découvrez votre boutique en ligne <b>AMIRA MOROCCO COSMETICS</b> spécialisée dans la vente d'articles cosmétiques naturels et maquillages authentique au maroc ,Aujourd'hui les célèbres produits de haute gamme, avec des prix raisonnables</p>
          <button className='w-40 text-sm h-11 text-white bg-green-800 duration-500 transition-all hover:bg-white hover:text-green-800 sh rounded-md'>Découvrir ICI</button>
        </div>
      </nav>
    </section>
    <section className='w-4/5 h-auto mt-20 mb-14 relative left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <nav className='w-full h-full space-y-4'>
        <h1 className='text2 font-bold text-[19px] md:text-[30px]'>AMIRA MOROCCO COSMETICS</h1>
        <p className='text-green-800'>Notre marque Destinée à toute la famille, AMIRA MOROCCO COSMETICS offre une vaste gamme de produits cosmétiques pour les cheveux, le visage et le corps, adaptés aux femmes, hommes, enfants. Les prix très abordables permettent de prendre soin de soi naturellement, sans nécessiter un gros budget.</p>
      </nav>
      <nav className='flex justify-center items-center'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zADarHe5CME?si=fTrdIUuPieiIAIU5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </nav>
    </section>
    </>
  )
}

export default Home