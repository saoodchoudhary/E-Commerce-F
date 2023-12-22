import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BannerSlider = () => {
  const images = [
    {
      img: `https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e3a8482f858f0928.jpg?q=20`,
      linkUrl: `/lk`
    },
    {
      img: `https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/71ae841f2308328f.jpg?q=20`,
      name: `Ahmad`,
      linkUrl: ``
    },
    {
      img: `https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20`,
      name: `Khan`,
      linkUrl: ``
    }
  ]
  const [currentSlider, setCurrentSlider] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      setCurrentSlider((prevSlider) => images.length - 1 === prevSlider ? 0 : prevSlider + 1)

    }, 5000);
  }, [currentSlider, images.length])

  return (
    <div className='relative w-full overflow-hidden max-w-screen-2xl mt-5 mx-auto'>
      <div className='flex transition-all duration-500' style={{ transform: `translateX(-${currentSlider * 100}%) ` }}>
        {images.map((item, ind) => {
          return (
            <div key={ind} className='w-full flex-shrink-0' >
              <Link to={item.linkUrl}>
                <img className='w-full' src={`${item.img}`} alt={images[currentSlider].name} />
              </Link>
            </div>
          )
        })}
      </div>
      <div className='flex left-[50%] absolute bottom-1 gap-1'>
        {images.map((val, _)=>{
          return(
            <span key={_} className='h-2 w-2 bg-slate-700 rounded-full' style={{backgroundColor: `${(_===currentSlider) ? "white" : "gray"}`}}></span>
          )
        })}
      </div>
    </div>
  )
}

export default BannerSlider



// import React, { useState, useEffect } from 'react';


// const BannerSlider = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
//     }, 5000); // Change slide every 5 seconds (5000ms)

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };


//   return (
//     <div className="relative w-full max-w-screen-xl mx-auto">
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-auto"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//       <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full focus:outline-none
//               ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}
//               ${index !== 0 ? 'ml-2' : ''}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerSlider;