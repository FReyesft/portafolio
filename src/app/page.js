'use client'

/* Import de componentes */
import { Toaster } from 'react-hot-toast'
import TituloPrincipal from '../components/TituloPrincipal'
import TitleSecondary from '@/components/TitleSecondary'
import AboutMeCard from '@/components/AboutMeCard'
import HamburguerMenu from '@/components/HamburguerMenu'
import ButtonDowload from '@/components/ButtonDowload'
import Photo from '../components/Photo'
import CardProyect from '@/components/CardProyect'
import ContactMeCard from '@/components/ContactMeCard'
/* Import de packages */

import { motion } from 'framer-motion'
import { Divider } from '@nextui-org/react'

export default function Home () {
  return (
    <main>
      <Toaster />
      <section id='homeSection' className='p-8 flex flex-row gap-3 w-full h-[50vh] justify-evenly items-center md:flex-row-reverse md:h-screen '>
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

      {/* About Me Section */}

      <section id='aboutMeSection' className='p-8 flex flex-col items-center text-center'>
        <TitleSecondary props='Sobre mi' />
        <AboutMeCard />
      </section>
      <Divider />

      {/* Contact Me section */}

      <section id='contactSection' className='p-8 flex flex-col items-center'>
        <TitleSecondary props='Contratame' />
        <ContactMeCard />
      </section>

      <Divider />
      {/* Portfolio Section */}

      <section id='portfolioSection' className='p-8 flex flex-col items-center'>
        <TitleSecondary props='Portafolio' />
        <div className='flex flex-wrap justify-center'>
          <CardProyect />
        </div>
      </section>
    </main>
  )
}
