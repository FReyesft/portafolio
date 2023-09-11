import { Card, CardBody, Button, Input } from '@nextui-org/react'
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
          <Input
            name='user_name'
            variant='underlined'
            isRequired
            type='text'
            label='Nombre'
            className='w-full mt-3'
            color='success'
          />
          <Input
            name='user_email'
            variant='underlined'
            isRequired
            type='email'
            label='Email'
            className='w-full mt-3'
            color='success'
          />
          <Input
            name='message'
            variant='underlined'
            isRequired
            type='text'
            label='Mensaje'
            className='w-full mt-3'
            placeholder='Enter your message'
            color='success'
          />
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
