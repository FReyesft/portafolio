'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Photo () {
  const foto = '/../images/foto-recortada.png'
  return (
    <>
      <motion.div
        transition={{ duration: 0.5 }}
        animate={{
          scale: [0.5, 1],
          y: [-150, 0]
        }}
        className='w-3/3 h-40 flex items-center flex-col sm:w-1/2 md:w-1/3 md:h-2/3'
      >
        <Image
          className='w-full h-full object-cover rounded-2xl min-w-[160px]'
          alt='logo'
          src={foto}
          priority
          width={500}
          height={500}
        />
      </motion.div>
    </>
  )
}
