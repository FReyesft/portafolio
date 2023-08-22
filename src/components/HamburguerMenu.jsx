import { motion } from 'framer-motion'
import { useState } from 'react'
export default function HamburguerMenu () {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <div
        onClick={() => setClicked(!clicked)}
        className={`${'fixed top-4 left-4 right-4 w-8 h-8 border-2 rounded-full border-black flex flex-col-reverse justify-center items-center'}`}
      >
        <motion.span
          animate={{
            rotate: clicked ? '45deg' : '0deg',
            y: clicked ? '-5px' : '0px'
          }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1
          }}
          className='m-[2px] w-4 h-[2px] bg-black rounded-sm'
        />
        <motion.span
          animate={{
            rotate: clicked ? '-45deg' : '0deg',
            opacity: clicked ? 0 : 1
          }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1
          }}
          className='m-[2px] w-4 h-[2px] bg-black rounded-sm'
        />
        <motion.span
          animate={{
            rotate: clicked ? '-45deg' : '0deg',
            y: clicked ? '7px' : '0px'
          }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1
          }}
          className='m-[2px] w-4 h-[2px] bg-black rounded-sm z-10'
        />
      </div>
      {
      clicked
        ? <ul className='absolute top-16 left-0 right-0 bg-[#f0f0f0] h-full w-2/4'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        : ''
        }
    </>
  )
}
