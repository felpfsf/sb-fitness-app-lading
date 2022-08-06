import React from 'react'

const Results = () => {
  return (
    <section className='w-full lg:w-[72%] mx-auto mt-11' id="results">
      <h2 className='text-xl lg:text-2xl font-black text-center lg:text-start'>Results of our clients:</h2>
      <div className='mt-4 xl:mt-12 flex flex-wrap justify-center lg:justify-between gap-8'>
        <div className='w-32 lg:w-56'>
          <h3 className='text-3xl font-medium text-sbPallet-accent text-center'>150 +</h3>
          <p className='text-xs xl:text-base font-light text-center mt-4'>participants have already improved their body with our team</p>
        </div>
        <div className='w-32 lg:w-56'>
          <h3 className='text-3xl font-medium text-sbPallet-accent text-center'>20</h3>
          <p className='text-xs xl:text-base font-light text-center mt-4'>months - how long the “SB” project exists</p>
        </div>
        <div className='w-32 lg:w-56'>
          <h3 className='text-3xl font-medium text-sbPallet-accent text-center'>15</h3>
          <p className='text-xs xl:text-base font-light text-center mt-4'>certified specialists in touch with you</p>
        </div>
        <div className='w-32 lg:w-56'>
          <h3 className='text-3xl font-medium text-sbPallet-accent text-center'>500 +</h3>
          <p className='text-xs xl:text-base font-light text-center mt-4'>kilogram in general lost for all participants</p>
        </div>
      </div>
    </section>
  )
}

export default Results