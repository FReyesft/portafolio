'use client'
import Photo from '../components/Photo'
import { FiDownload } from 'react-icons/fi'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function Home () {
  return (
    <>
      <main className='flex p-8 h-full items-center justify-between flex-wrap'>
        <Photo />
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{
            scale: [0.5, 1],
            y: [-150, 0]
          }}
          className='text-center'
        ><h1 className='text-titles text-3xl font-bold'>FReyeSFT</h1>
          <h4 className='text-xs text-secondary text-end'>Desarrollador web</h4>
          <Button
            className='h-4 text-[10px] p-2 mt-5 italic '
            startContent={<FiDownload />}
            color='success'
            variant='shadow'
          >
            Descargar HV
          </Button>
        </motion.div>
      </main>
    </>
  )
}
