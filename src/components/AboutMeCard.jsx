import { Divider, Card, CardBody } from '@nextui-org/react'
export default function AboutMeCard () {
  return (
    <>
      <Card
        isBlurred
      >
        <CardBody>
          <h2 className='text-titles text-2xl font-bold'>Sobre mi</h2>
          <Divider />
          <p className='text-secondary text-sm mt-3'>
            Desarrollador web apasionado que fusiona creatividad en el diseño y precisión en el
            desarrollo para lograr soluciones excepcionales. Disfruto superando desafíos y explorando nuevas
            tecnologías.
          </p>
        </CardBody>
      </Card>
    </>
  )
}
