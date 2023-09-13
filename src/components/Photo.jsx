import Image from 'next/image'
import profilePic from '../../public/images/foto-recortada.png'

export default function Page () {
  return (
    <Image
      src={profilePic}
      alt='Picture of the author'
      className='rounded-xl w-1/2 sm:w-[343px] md:w-1/3 object-cover'
    />
  )
}
