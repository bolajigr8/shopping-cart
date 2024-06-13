import React from 'react'

const Hero = () => {
  return (
    <header className='hero hero-micbol transition-micbol '>
      <div className='bg-white opacity-[0.9]     text-center uppercase p-[1rem] sm:p-[2rem] inline-block  '>
        <h1 className='font-extrabold w-[15rem] sm:text-3xl text-2xl    tracking-wider text-black lg:text-4xl  '>
          furniture collection
        </h1>
        <button className='btn bg-orange-400 text-black mt-[2rem] transition-micbol hover:bg-transparent sm:text-lg text-md hover:text-orange-400 uppercase border-none   font-bold  '>
          shop now
        </button>
      </div>
    </header>
  )
}

export default Hero

// <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
