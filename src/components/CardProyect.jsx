import { Divider, Card, CardHeader, CardBody, Image, CardFooter, Link } from '@nextui-org/react'
import { portfolio } from '../data/portfolio'
export default function CardProyect () {
  return (
    <>
      {
            portfolio.map((item, index) => (
              <Card className='py-4 m-3 max-w-sm' key={index}>
                <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                  <h4 className='font-bold text-large'>{item?.title}</h4>
                  <Divider />
                  <small className='flex text-3xl w-full'>
                    {
                      item?.iconos
                    }
                  </small>
                </CardHeader>
                <Link href={item?.link} target='_blank' rel='noreferrer'>
                  <CardBody className='overflow-visible py-2'>
                    <Image
                      isZoomed
                      className='w-full'
                      layout='responsive'
                      src={item?.image}
                      alt='Card background'
                    />
                  </CardBody>
                </Link>
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={item.linkGitHub}
                    className='text-secondary text-sm'
                  >
                    Visitar codigo fuente en GitHub.
                  </Link>
                </CardFooter>
              </Card>
            ))
          }
    </>
  )
}
