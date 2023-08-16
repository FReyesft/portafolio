'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Photo () {
  return (
    <>
      <motion.div
        className='w-3/3 h-40 flex items-center flex-col'
      >
        <Image
          className='w-full h-full object-cover rounded-2xl min-w-[160px]'
          alt='logo'
          src='/../../images/foto-recortada.jpg'
          priority
          width={500}
          height={500}
        />
      </motion.div>

    </>
  )
}
