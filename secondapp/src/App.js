import React from 'react'
// import logo from "./favicon.ico"
import dashimage from "./Dashboard.png"

export default function App() {
  return (
    <div>
      <nav className='bg'>

        <div className='flex items-center justify-betweenw w-8/12 mx-auto bg to-black text-white p-2'>
          <div>logo</div>

          <div className='flex gap-10 font-semibold'>

            <p className='hover:text-orange-500 duration-300'>home</p>
            <p className='hover:text-orange-500 duration-300'>about</p>
            <p className='hover:text-orange-500 duration-300'>contact</p>
            <p className='hover:text-orange-500 duration-300'>service</p>
            <p className='hover:text-orange-500 duration-300'>price</p>

          </div>

          <button className='bg-orange-500 pl-8 pr-8 pt-2 pb-2 font-semibold'>login</button>



        </div>


        <div className='w-6/12 mx-auto mt-24 flex flex-col items-center gap-8'>
          <div className='text-6x1 text-center font-semibold leading-relaxed '>Make Your Business Flourish with<span className='text-orange-500'> Digital Marketing</span></div>
          <div className='text-center'>Save time on creating a website from scratch. Use a rich collection of ready-made websites to get your project off to a
            fast start opposed to using 'Content here, content here', making it look like readable English.


          </div>
          <div>hello</div>
          <div>hello</div>
          <div className='space-x-8'>
            <button className='bg-slate-800 text-white px-8 py-3'>Try 30Days Trial</button>
            <button className='border border-slate-800 px-8 py-3'>Schedule a Call</button>


          </div>


          <img className='borderp-4 rounded-2xl bg-grey-50' src={dashimage}></img>




        </div>
      </nav>
    </div>

  )
}


