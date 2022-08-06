import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Testimonials = () => {
  return (
    <section className="mt-32 flex justify-center">
      <div className='relative max-w-xl'>
        <BsChevronLeft className='absolute z-10 top-[40%] -left-8 cursor-pointer' size={20}/>
        {/* Cards */}
        <div className="w-64 h-auto lg:w-[490px] px-4 lg:px-16 pt-8 bg-sbPallet-cardBg rounded-xl flex flex-col relative">
          <img className="w-[70px] h-[70px] lg:w-fit lg:h-fit absolute left-24 lg:left-[38%] -top-12 lg:-top-[94px]" src="/assets/hair-style-street-fashion-beautiful-girl-2.png" alt="hair style street fashion beautiful girl" />
          <p className="text-xs lg:text-sm leading-relaxed text-center">
            After giving birth, she tried for a long time and unsuccessfully to get herself back in shape, and it turned out on the “SB” project. The result for today is minus 10 kg.
          </p>
          <p className="text-[10px] text-center font-light mt-3">Anna, 24 years old. Kyiv</p>
        </div>
        <BsChevronRight className='absolute z-10 top-[40%] -right-8 cursor-pointer' size={20}/>
      </div>
    </section>
  )
}

export default Testimonials