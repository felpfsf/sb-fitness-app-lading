const Footer = () => {
  return (
    <section className="w-full mt-16 py-4 lg:py-10 bg-sbPallet-cardBg flex items-center justify-around">
      <a href="#home">
        <img className='w-8 h-8' src="/assets/SB-logo.png" alt="SB logo" />
      </a>
      {/* Footer Nav */}
      <nav className='flex flex-col lg:flex-row items-center gap-4 lg:gap-40'>
        <ul className='text-center uppercase flex flex-col lg:flex-row gap-4'>
          <li className='text-base font-light md:pb-0'><a className='hover:text-sbPallet-hover hover:underline underline-offset-8' href="#">Home</a></li>
          <li className='text-base font-light md:pb-0'><a className='hover:text-sbPallet-hover hover:underline underline-offset-8' href="#about">Program</a></li>
          <li className='text-base font-light md:pb-0'><a className='hover:text-sbPallet-hover hover:underline underline-offset-8' href="#results">Results</a></li>
          <li className='text-base font-light md:pb-0'><a className='hover:text-sbPallet-hover hover:underline underline-offset-8' href="#contact">Contact Us</a></li>
        </ul>
        <a className='hidden lg:block w-40 p-2 text-xs text-center uppercase border rounded-lg hover:font-bold hover:bg-sbPallet-accent hover:border-sbPallet-accent ease-in-out duration-200' href="#">Request a call</a>
      </nav>
    </section>
  )
}

export default Footer