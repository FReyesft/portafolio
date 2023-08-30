import { motion } from 'framer-motion'
import Menu from './Menu'
import { useState } from 'react'

export default function HamburguerMenu () {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <div
        onClick={() => setClicked(!clicked)}
        className={`${
          clicked ? '' : ''
        } ${'fixed top-4 left-4 right-4 w-8 h-8 border-2 rounded-full border-black flex flex-col-reverse justify-center items-center z-40'}`}
      >
        <motion.span
          animate={{
            rotate: clicked ? '45deg' : '0deg',
            y: clicked ? '-5px' : '0px'
          }}
          transition={{ duration: 0.3 }}
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
          transition={{ duration: 0.3 }}
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
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1
          }}
          className='m-[2px] w-4 h-[2px] bg-black rounded-sm'
        />
      </div>
      {clicked
        ? (
          <Menu />
          )
        : (
            ''
          )}
    </>
  )
}
