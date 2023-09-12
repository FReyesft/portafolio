import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact } from 'react-icons/bi'

export const portfolio = [
  {
    title: 'Calculadora',
    image: '../../images/caluladora-web.png',
    link: 'https://freyesft.github.io/calculadora/',
    linkGitHub: 'https://github.com/FreyesFT/calculadora',
    iconos: [
      <BiLogoHtml5 className='text-[#E34F26] drop-shadow-md' key={1} />,
      <BiLogoCss3 key={2} className='text-[#2965F1] drop-shadow-md' />,
      <BiLogoJavascript key={3} className='text-[#f7df1e] drop-shadow-md' />]
  },
  {
    title: 'Triqui',
    image: '../../images/triqui-web.png',
    link: 'https://triqui-wine.vercel.app',
    linkGitHub: 'https://github.com/FreyesFT/triqui',
    iconos: [
      <BiLogoHtml5 className='text-[#E34F26] drop-shadow-md' key={1} />,
      <BiLogoCss3 key={2} className='text-[#2965F1] drop-shadow-md' />,
      <BiLogoJavascript key={3} className='text-[#f7df1e] drop-shadow-md' />,
      <BiLogoReact key={4} className='text-[#61DBFB] drop-shadow-md' />
    ]
  }
]
