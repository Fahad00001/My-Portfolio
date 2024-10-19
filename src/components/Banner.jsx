import React, { useEffect, useRef } from 'react';
import bannerImage from '../assets/cropped.jpg';
import bannerBackground from '../assets/banner_wallpaper.svg'
import Typed from 'typed.js';

const Banner = () => {
  const el=useRef(null)
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ["Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  
  return (
    <section
    style={{
        backgroundImage:`url(${bannerBackground})`,
        backgroundSize:'cover'
      }}
     className='grid md:grid-cols-2 items-center text-white '>
      {/* first box */}
      <div className='w-full flex items-center justify-center'>
        {/* text */}
        <div className='md:w-2/3 ms-10 space-y-3 '>
          <h3 className='  text-3xl font-semibold'>Hi, I am</h3>
          <h1 className='  text-5xl font-bold'>Fahad Iqbal</h1>
          <h2 className=' text-3xl'>I am a <span className='font-bold underline' ref={el}></span></h2>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic, atque quo perferendis repellat temporibus optio iste vero vel quam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quis voluptas quae non repudiandae consequatur doloremque alias saepe a neque!
          </p>

          {/* icon  */}
          <div className='space-x-6 flex'>
         <a href='https://github.com/fahad00001' className='w-16 hover:bg-orange-500 border px-3 py-4 cursor-pointer rounded-full flex justify-center items-center h-16 bg-gray-700'>
         <i  class="fa-brands fa-github text-4xl"></i>
         </a>
         <a href='https://www.instagram.com/its_fahad_iqbal' target='_blank' className='w-16 hover:bg-orange-500 border px-3 py-4 cursor-pointer rounded-full flex justify-center items-center h-16 bg-gray-700'>
         <i className="fa-brands fa-instagram text-4xl"></i>
         </a>
         <a href='https://www.linkedin.com/in/fahad-iqbal-8209a8248/' target='_blank' className='w-16 hover:bg-orange-500 border px-3 py-4 cursor-pointer rounded-full flex justify-center items-center h-16 bg-gray-700'>
         <i className="fa-brands fa-linkedin text-4xl"></i>
         </a>
         <a href='https://x.com/FahadIqbal43691' target='_blank' className='w-16 hover:bg-orange-500 border px-3 py-4 cursor-pointer rounded-full flex justify-center items-center h-16 bg-gray-700'>
         <i class="fa-brands fa-x-twitter text-4xl"></i>
         </a>
      
         

          </div>


          <br />
          <a className=' text-2xl px-3 py-2  bg-orange-600 rounded-full shadow-lg mt-4' href="/">Contact me</a>
        </div>
      </div>

      {/* second box */}
      <div className='flex justify-center w-full mt-10'>
        {/* image */}
        <img className='rounded-full  shadow-md w-[400px] h-[400px] mb-10' src={bannerImage} alt="Fahad Iqbal" />
      </div>
    </section>
  );
}

export default Banner;


