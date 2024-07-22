import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const Card = ({index , up, down, rand,d}) => {
  return (
    <div className=' flex flex-col md:relative  justify-center  bg-white w-[40rem] h-[30rem] px-12 rounded-md mt-10 gap-8 text-center' >
          
         <div className='absolute top-[-6rem] z-10 mx-auto left-[1rem] '>
             <img className='ascpect-square rounded-full w-[140px] h-[140px] z-25' 
              src={d[index].image} alt={d[index].name} />   
         </div>
         
         <div >

            <h1 className=' font-bold text-3xl'>{d[index].name}</h1>
            <h2 className=' text-gray-400'>{d[index].job}</h2>
         
         </div>

         <div className='flex justify-center items-center'>
            <FaQuoteLeft className=' text-violet-400 ' /> 
         </div>

         <div>
            <p>{d[index].text}</p>
         </div>

         <div className='flex justify-center items-center'>
            <FaQuoteRight className=' text-violet-400 flex justify-center items-center' /> 
         </div>

         <div className='flex justify-center items-center gap-4'>
            <button onClick={up} className=' '> <FaLessThan className=' text-violet-400' /> </button>
            <button onClick={down}className=' '> <FaGreaterThan  className=' text-violet-400'/> </button>
         </div>

        <div className='  mb-5'>
            <button onClick={rand} className=' text-[15px] bg-violet-400 text-white px-6 py-1 font-mono rounded' > Suprise Me</button> 
        </div>



     
    </div>
  )
}

export default Card