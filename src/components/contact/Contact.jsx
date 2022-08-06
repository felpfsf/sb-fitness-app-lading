import { Form } from "./Form"
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLogoTiktok } from 'react-icons/io5'

const Contact = () => {
  return (
    <section className="w-full mt-20 lg:px-16 lg:mt-0 flex flex-wrap flex-col lg:flex-row items-center lg:items-end justify-around gap-16" id="contact">
      <div className="px-8">
        <h2 className="text-xl font-black">Have questions?</h2>
        <h3 className="mt-5 font-black">Leave us a message and we will contact you right away!</h3>
        {/* Form */}
        <Form />
      </div>
      {/* Address */}
      <div className="max-w-[460px] h-[660px] mt-14 bg-[url('/assets/cropped-photo-of-amazing-young-sports-woman-body.png')] bg-cover">
        {/* <img className="absolute -z-10 w-full" src="/assets/cropped-photo-of-amazing-young-sports-woman-body.png" alt="" /> */}
        <div className="px-8 lg:px-16 pt-28 lg:pt-56">
          <h2 className="text-lg font-black">How to contact us?</h2>
          <ul className="mt-14">
            <li className="mt-2 flex items-center gap-3"><span><AiOutlineMail /></span>sb.contact@sbfitness.com</li>
            <li className="mt-2 flex items-center gap-3"><span><BsTelephone /></span>+55 (11) 9999-1234</li>
            <li className="mt-2 flex items-center gap-3"><span><CgWebsite /></span>Physical Address Here</li>
          </ul>
          <img className="mt-6" src="/assets/SB-logo.png" alt="" />
          <p className="mt-12">
            Share your impressions about our club and success with your friends on social networks
          </p>
          {/* Social Links */}
          <ul className="mt-8 flex gap-4">
            <li>
              <div className="w-8 h-8 rounded-full bg-sbPallet-accent flex items-center justify-center">
                <IoLogoWhatsapp size={20} color={'black'} />
              </div>
            </li>
            <li>
              <div className="w-8 h-8 rounded-full bg-sbPallet-accent flex items-center justify-center">
                <IoLogoYoutube size={20} color={'black'} />
              </div>
            </li>
            <li>
              <div className="w-8 h-8 rounded-full bg-sbPallet-accent flex items-center justify-center">
                <FaFacebookF size={20} color={'black'} />
              </div>
            </li>
            <li>
              <div className="w-8 h-8 rounded-full bg-sbPallet-accent flex items-center justify-center">
                <IoLogoInstagram size={20} color={'black'} />
              </div>
            </li>
            <li>
              <div className="w-8 h-8 rounded-full bg-sbPallet-accent flex items-center justify-center">
                <IoLogoTiktok size={20} color={'black'} />
              </div>
            </li>
            <li>
              <div className="w-8 h-8 rounded-full bg-sbPallet-accent flex items-center justify-center">
                <IoLogoTwitter size={20} color={'black'} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Map */}
      <div className="">
        <h2 className="text-lg font-black">Find us on the map:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973529954835!2d-46.6564943!3d-23.5613545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1659820599906!5m2!1spt-BR!2sbr"
          className="w-[300px] lg:w-[324px] h-[230px] lg:h-[372px] mt-9 mb-16"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
        <a className='w-40 p-2 text-xs text-center uppercase border rounded-lg hover:font-bold hover:bg-sbPallet-accent hover:border-sbPallet-accent ease-in-out duration-200' href="#">Request a call</a>
      </div>
    </section>
  )
}

export default Contact