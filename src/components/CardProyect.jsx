import { Divider, Card, CardHeader, CardBody, Image, CardFooter, Link } from '@nextui-org/react'
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi'

export default function CardProyect () {
  const portfolio = [
    {
      title: 'Calculadora',
      image: '../../images/caluladora-web.png',
      link: 'https://freyesft.github.io/calculadora/',
      linkGitHub: 'https://github.com/FreyesFT/calculadora',
      iconos: [
        <BiLogoHtml5 className='text-[#E34F26]' key={1} />,
        <BiLogoCss3 key={2} className='text-[#2965F1]' />,
        <BiLogoJavascript key={3} className='text-[#f7df1e]' />]
    },
    {
      title: 'Triqui',
      image: '../../images/triqui-web.png',
      link: 'https://triqui-wine.vercel.app',
      linkGitHub: 'https://github.com/FreyesFT/calculadora',
      iconos: [
        <BiLogoHtml5 className='text-[#E34F26]' key={1} />,
        <BiLogoCss3 key={2} className='text-[#2965F1]' />,
        <BiLogoJavascript key={3} className='text-[#f7df1e]' />]
    },
  ]
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
