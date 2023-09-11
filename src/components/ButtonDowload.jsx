import { FiDownload } from 'react-icons/fi'
import { Button } from '@nextui-org/react'

export default function ButtonDowload () {
  return (
    <Button
      className='h-4 text-[10px] p-4 mt-5 italic md:h-10 md:text-[15px]'
      startContent={<FiDownload />}
      color='success'
      variant='shadow'
    >
      Descargar HV
    </Button>
  )
}
