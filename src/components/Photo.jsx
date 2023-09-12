'use client'
import { Image } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function Photo () {
  return (
    <>
      <motion.div
        transition={{ duration: 0.5 }}
        animate={{
          scale: [0.5, 1],
          y: [-150, 0]
        }}
        className='flex h-1/2 justify-center items-center'
      >
        <Image
          className='object-cover'
          alt='logo'
          src='../images/foto-recortada.png'
          priority='true'
          width={500}
          height={500}
        />
      </motion.div>
    </>
  )
}
