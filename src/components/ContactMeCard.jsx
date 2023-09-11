import { Card, CardBody, Button } from '@nextui-org/react'
import { BiSolidSend } from 'react-icons/bi'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function App () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_mlwjxmr', 'template_kvuv1g4', form.current, 'cqhm42JADe_4NAsfh')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[710px] mt-3'
      shadow='sm'
    >
      <CardBody>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
          <label className='mt-3 text-sm w-full' htmlFor='name'>Name:</label>
          <input className='mt-3 w-full text-xs p-2 rounded-md border border-[#18C964] outline-none focus:shadow-xl' placeholder='Ejm: Fernando' type='text' id='name' name='user_name' />

          <label className='mt-3 text-sm w-full' htmlFor='email'>Email:</label>
          <input className='mt-3 w-full text-xs p-2 rounded-md border border-[#18C964] outline-none focus:shadow-xl' placeholder='Ejm: fernando@gmail.com' type='email' id='email' name='user_email' />

          <label className='mt-3 text-sm' htmlFor='message'>Message:</label>
          <textarea id='message' className='resize-none mt-3 w-full text-xs p-2 rounded-md border border-[#18C964] outline-none focus:shadow-xl' placeholder='Ejm: Lorem ipsum placeholder message' name='message' />
          <Button
            className='h-4 text-sm p-4 mt-5 italic w-1/2 self-center'
            value='Send'
            type='submit'
            color='success'
            variant='shadow'
            startContent={<BiSolidSend />}
          >Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
