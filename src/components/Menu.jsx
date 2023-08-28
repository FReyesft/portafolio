import { Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
export default function Menu () {
  const item = {
    visible: {
      opacity: 1,
      x: 0,
      color: '#fff'
    },

    hidden: { opacity: 0, x: '-200px' }
  }
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    hidden: {
      x: '-200px',
      opacity: 0
    }
  }
  return (
    <>
      <motion.ul
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5 }}
        className='flex justify-center flex-col absolute top-0 left-0 right-0 bg-[#000000c7] h-full w-1/2 p-4 rounded-tr-[50px] rounded-bl-[50px] border-4 border-[#f0f0f0]'
      >
        <motion.li variants={item}>
          <Link href='#' underline='hover'>Home</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='#' underline='hover'>Sobre mi</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='#' underline='hover'>portafolio</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='#' underline='hover'>Contacto</Link>
        </motion.li>
      </motion.ul>
    </>
  )
}
