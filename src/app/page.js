'use client'

/* Import de componentes */

import TituloPrincipal from '../components/TituloPrincipal'
import TitleSecondary from '@/components/TitleSecondary'
import AboutMeCard from '@/components/AboutMeCard'
import HamburguerMenu from '@/components/HamburguerMenu'
import ButtonDowload from '@/components/ButtonDowload'
import Photo from '../components/Photo'
import CardProyect from '@/components/CardProyect'

/* Import de packages */

import { motion } from 'framer-motion'
import { Divider } from '@nextui-org/react'

export default function Home () {
  return (
    <main>
      <section className='flex p-8 h-[50vh] content-center justify-between flex-wrap relative section-home'>
        <HamburguerMenu />
        <Photo />
        {/* Container Titulo y animación de este */}
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{
            scale: [0.5, 1],
            y: [-150, 0]
          }}
          className='text-center self-center'
        >
          <TituloPrincipal />
          <ButtonDowload />
        </motion.div>
      </section>
      <Divider />
      <section className='p-8 h-[full] flex flex-col justify-center'>
        <TitleSecondary props='Sobre mi' />
        <AboutMeCard />
      </section>
      <Divider />

      {/* Portfolio Section */}

      <section className='p-8 h-full'>
        <TitleSecondary props='Portafolio' />
        <div className='flex flex-wrap justify-center'>
          <CardProyect />
        </div>
      </section>
    </main>
  )
}
