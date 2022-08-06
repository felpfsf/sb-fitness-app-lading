import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-[url("/assets/hero-img-mobile.png")] md:bg-[url("/assets/hero-img-desktop.png")] bg-right-top bg-no-repeat' id='home'>
      {/* Call to action */}
      <div className='flex md:px-8 xl:justify-center'>
        <div className='md:w-[484px] pt-[112px] md:pt-40 px-16 flex flex-col justify-center'>
          <h3 className='text-sm font-light'>author's slim body program</h3>
          <h1 className='text-4xl md:text-5xl leading-8 font-black mt-[18px]'>Get slimmer in <strong className='text-sbPallet-accent'>56</strong> days</h1>
          <h2 className='text-sm font-light md:text-base leading-relaxed mt-[18px] mb-[18px]'>
            Our professional fitness trainers and nutritionists will lead you to a <span className='underline'>slim</span>, <span className='underline'>healthy</span> and happy life.
          </h2>
          <a className='w-[212px] h-9 p-3 text-lg font-medium bg-sbPallet-accent rounded-lg flex items-center justify-center' href="#">Learn more</a>
        </div>
        {/* hero image visible on tablet desktop */}
        <img className='hidden lg:block pt-36' src="/assets/girl-fitness.png" alt="Girl lifting in smith machine" />
      </div>

      {/* Cards */}
      <div className='pt-10 px-10 flex flex-wrap justify-center gap-3 md:gap-14'>
        {/* card #1 */}
        <div className='w-[134px] sm:w-36 md:w-56 h-36 md:h-44 p-1 rounded-xl bg-sbPallet-cardBg flex flex-col items-center justify-center'>
          <div>
            <img src="/assets/dumb-bell.png" alt="Dumb-bell Clipart" />
          </div>
          <h2 className='text-sm font-bold mt-2'>Fast</h2>
          <p className='text-xs font-light text-center leading-relaxed mt-2'>First results after the first weeks</p>
        </div>
        {/* card #2 */}
        <div className='w-[134px] sm:w-36 md:w-56 h-36 md:h-44 p-1 rounded-xl bg-sbPallet-cardBg flex flex-col items-center justify-center'>
          <div>
            <img src="/assets/cherry.png" alt="Cherry Clipart" />
          </div>
          <h2 className='text-sm font-bold mt-2'>Tasty</h2>
          <p className='text-xs font-light text-center leading-relaxed mt-2'>Weight loss without fasting or dieting</p>
        </div>
        {/* card #3 */}
        <div className='w-[134px] sm:w-36 md:w-56 h-36 md:h-44 p-1 rounded-xl bg-sbPallet-cardBg flex flex-col items-center justify-center'>
          <div>
            <img src="/assets/cam-monitor.png" alt="Camera Clipart" />
          </div>
          <h2 className='text-sm font-bold mt-2'>Safely</h2>
          <p className='text-xs font-light text-center leading-none mt-2'>Under the supervision of experienced professionals</p>
        </div>
        {/* card #4 */}
        <div className='w-[134px] sm:w-36 md:w-56 h-36 md:h-44 p-1 rounded-xl bg-sbPallet-cardBg flex flex-col items-center justify-center'>
          <div>
            <img src="/assets/scale.png" alt="Scale Clipart" />
          </div>
          <h2 className='text-sm font-bold mt-2'>Remotely</h2>
          <p className='text-xs font-light text-center leading-none mt-2'>Materials and recommendations online</p>
        </div>
      </div>
    </div>
  )
}

export default Hero