import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState()

  const handleOpenMenu = () => { setOpenMenu(!openMenu) }

  return (
    <header className='w-full z-10 fixed py-6 px-16 lg:px-24 flex items-center justify-between'>
      <a href="#home">
        <img className='w-8 h-8' src="/assets/SB-logo.png" alt="SB logo" />
      </a>
      {/* Menu Tablet / Desktop */}
      <nav className='hidden xl:w-full lg:flex justify-center'>
        <ul className='text-center uppercase flex gap-8'>
          <li className='text-base font-bold pb-8 md:pb-0'><a className='hover:underline underline-offset-8' href="#" onClick={() => setOpenMenu(false)}>Home</a></li>
          <li className='text-base font-bold pb-8 md:pb-0'><a className='hover:underline underline-offset-8' href="#about" onClick={() => setOpenMenu(false)}>Program</a></li>
          <li className='text-base font-bold pb-8 md:pb-0'><a className='hover:underline underline-offset-8' href="#results" onClick={() => setOpenMenu(false)}>Results</a></li>
          <li className='text-base font-bold pb-8 md:pb-0'><a className='hover:underline underline-offset-8' href="#contact" onClick={() => setOpenMenu(false)}>Contact Us</a></li>
        </ul>
      </nav>
      <a className='hidden lg:block w-40 p-2 text-xs text-center uppercase border rounded-lg hover:font-bold hover:bg-sbPallet-accent hover:border-sbPallet-accent ease-in-out duration-200' href="#">Request a call</a>

      {/* Button and Menu Mobile */}
      
      {
        openMenu ?
          <AiOutlineClose onClick={handleOpenMenu} className='lg:hidden z-10 text-[32px] text-white cursor-pointer' />
          :
          <AiOutlineMenu onClick={handleOpenMenu} className='lg:hidden z-10 text-[32px] text-white cursor-pointer' />
      }
      <nav className=
        {openMenu ?
          ('fixed top-0 right-0 h-screen w-[70%] text-center bg-sbPallet-cardBg/70 backdrop-blur-[80px] pt-28 ease-in-out duration-300')
          :
          ('fixed top-0 right-[-100%] h-screen w-[70%] text-center bg-sbPallet-cardBg/70 backdrop-blur-[80px] pt-28 ease-in-out duration-300')}
      >
        <ul className='text-center uppercase'>
          <li className='text-lg font-bold pb-8'><a className='hover:underline underline-offset-[16px]' href="#" onClick={() => setOpenMenu(false)}>Home</a></li>
          <li className='text-lg font-bold pb-8'><a className='hover:underline underline-offset-[16px]' href="#about" onClick={() => setOpenMenu(false)}>Program</a></li>
          <li className='text-lg font-bold pb-8'><a className='hover:underline underline-offset-[16px]' href="#results" onClick={() => setOpenMenu(false)}>Results</a></li>
          <li className='text-lg font-bold pb-8'><a className='hover:underline underline-offset-[16px]' href="#" onClick={() => setOpenMenu(false)}>Contact Us</a></li>
        </ul>
        <a className='w-40 p-2 text-xs text-center uppercase border rounded-lg hover:bg-sbPallet-accent hover:border-sbPallet-accent ease-in-out duration-200' href="#">Request a call</a>
      </nav>
    </header>
  )
}

export default Navbar