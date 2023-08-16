import { FiDownload } from 'react-icons/fi'
import { Button } from '@nextui-org/react'

export default function ButtonDowload () {
  return (
    <Button
      className='h-4 text-[10px] p-2 mt-5 italic '
      startContent={<FiDownload />}
      color='success'
      variant='shadow'
    >
      Descargar HV
    </Button>
  )
}
