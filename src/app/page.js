'use client'
import Image from 'next/image'
import { FiDownload } from 'react-icons/fi'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function Home () {
  return (
    <>
      <main className='flex p-6 h-full items-center'>
        <motion.div
          className='w-3/4 h-44 p-4'
        >
          <Image
            className='w-full h-full object-cover rounded-2xl'
            alt='logo'
            src='/../../images/foto-recortada.jpg'
            priority
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{
            scale: [0.5, 1],
            y: [-150, 0]
          }}
          className='text-center'
        ><h1 className='text-titles text-4xl font-bold'>FReyeSFT</h1>
          <h4 className='text-sm text-gray-700 text-end'>Desarrollador web</h4>
          <a>
            <Button
              startContent={<FiDownload />}
              color='primary'
              variant='light'
              className='h-4'
            >
              Descargar HV
            </Button>
          </a>

        </motion.div>
      </main>
    </>
  )
}
