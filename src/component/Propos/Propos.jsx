import React from 'react'
import wallpaper from "../../assets/cosmetic/bg3.png"
import produit from "../../assets/cosmetic/lotion_solide.png"
const Propos = () => {
  return (
   <>
   {/* <h1 className='text-yellow-600 text-[40px] text-center font-bold mt-5'>A Propos</h1> */}
    <div className='h-96 w-full mt-36 flex justify-center items-center'>
      <img src={wallpaper} alt="pic" className='object-cover w-full' />
    </div>
    <section className='w-4/5 relative left-1/2 -translate-x-1/2 flex flex-col items-center mb-20 mt-20'>
       <div className='space-y-7 text-center'>
        <h1 className='text-green-800 font-bold text-[25px] md:text-[40px]'>AMIRA MOROCCO COSMETICS</h1>
        <h2 className='text2 text-[19px] md:text-[25px] font-bold'>DES PRODUITS 100% MAROCAINS</h2>
       </div>
        <img src={produit} alt="pic" className='object-cover w-96'/>
        <p>Notre marque <span className='font-bold text-green-800'>AMIRA MOROCCO COSMETICS</span> souhaite partager avec vous notre riche patrimoine et nos coutumes. Les femmes marocaines sont réputées pour leur importance de la beauté et la propreté. Parmi leurs traditions et rituels, elles fréquentent chaque semaine le célèbre bain marocain et utilisent les recettes bien connues de nos grands-mères pour les soins des cheveux, du corps et du visage. Nous avons intégré dans la formulation de nos produits l'héritage du passé et les avancées du présent pour vous offrir des produits de haute qualité.,NOUS sommes spécialisée dans les produits entièrement naturels et fabriqués à la main. <span className='font-bold text-green-800'>Fondée par A.M </span>,la marque a pour mission de permettre à tous ,place l'ingrédient au cœur de ses produits,en proposant des soins simples, sains et naturels,Nous choisissons les matières premières de la plus haute qualité et les formulations les plus raffinées, grâce à un examen et une étude minutieux, pour vous offrir des produits à la fois efficaces et sans danger ,Notre marque Destinée à toute la famille, <span className='font-bold text-green-800'>AMIRA MOROCCO COSMETICS</span> offre une vaste gamme de produits cosmétiques pour les cheveux, le visage et le corps, adaptés aux femmes, hommes, enfants. Les prix très abordables permettent de prendre soin de soi naturellement, sans nécessiter un gros budget.</p>
    </section>
   </>
  )
}

export default Propos
