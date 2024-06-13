import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className=' min-h-[10rem]  p-8 pt-0  text-white bg-black'>
      <hr />
      <div className='mt-[3rem] mb-[3rem]'>
        {/* <Image src='/logo.svg' alt='comfy house' width={180} height={180} /> */}
        <Link className='capitalize text-xl spacing ' href='/'>
          comfy <span className='text-orange-400'>stores</span>
        </Link>
        <h1 className='mt-4 '>
          Micbol Stores Unlimited <span> {new Date().getFullYear()} </span>
        </h1>
        <h1>All rights reserved &copy;.</h1>
      </div>
      <hr />
      <div className='md:flex justify-between gap-4 mt-8 max-w-[900px] '>
        {footerLinks.map((link) => {
          return (
            <ul key={link.title} className='my-4 '>
              <h4 className='my-2 font-bold'>{link.title}</h4>
              {link.links.map((item) => {
                return (
                  <Link key={item.title} className='block my-5' href={item.url}>
                    {item.title}
                  </Link>
                )
              })}
            </ul>
          )
        })}
      </div>
      <div>
        <hr />
        <h1 className='mt-[3rem] text-center '>
          @ <span> {new Date().getFullYear()} </span>
          Micbol Stores Unlimited. All rights reserved
        </h1>
      </div>
    </footer>
  )
}

export default Footer
