import React from 'react'

const About = () => {
  return (
    <section className='px-8 flex flex-col items-center lg:flex-row' id='about'>
      <div className='mt-8 mx-auto'>
        <h2 className='text-3xl font-black uppercase text-center lg:text-left'>A little about us</h2>
        <nav className='h-8 mt-7'>
          <ul className='text-sm font-medium flex justify-center lg:justify-start gap-4'>
            <li className='hover:text-sbPallet-accent hover:border-sbPallet-accent hover:border-b-2 pb-3 cursor-pointer'>About the service</li>
            <li className='hover:text-sbPallet-accent hover:border-sbPallet-accent hover:border-b-2 pb-3 cursor-pointer'>Who suits</li>
            <li className='hover:text-sbPallet-accent hover:border-sbPallet-accent hover:border-b-2 pb-3 cursor-pointer'>Levels</li>
          </ul>
        </nav>
        <img className='ml-auto mt-8 sm:mt-10 lg:hidden' src="/assets/phone.png" alt="A smartphone image with the app open on the screen" />
        <div className='max-w-[572px] lg:mt-12'>
          <p className='text-sm'>
            This project is designed to help you achieve the desired shape for the benefit of your health. An individual diet will be developed for each participant, taking into account your daily routine, as well as medical indications. You will learn to eat the right foods in the right amount, as a result of which the weight will melt without a trace and without return.
            And for this you do not have to starve!
          </p>
          <p className='mt-7 text-sm'>
            Also, if you wish, you can choose a training program, and under the supervision of experienced trainers, do it right at home. Your progress will be recorded weekly in your profile in your personal account.
          </p>
        </div>
      </div>
      <img className='mr-auto hidden lg:block lg:mt-24' src="/assets/phone-desktop.png" alt="A smartphone image with the app open on the screen" />
    </section>
  )
}

export default About