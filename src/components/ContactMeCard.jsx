import { Card, CardBody, Button } from '@nextui-org/react'
import { BiSolidSend } from 'react-icons/bi'
import { useState } from 'react'
export default function App () {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    )
  }

  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 max-w-[710px] mt-3'
      shadow='sm'
    >
      <CardBody>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label className='mt-3 text-sm w-full' htmlFor='name'>Name:</label>
          <input className='mt-3 w-full text-xs p-2 rounded-md border border-[#18C964] outline-none focus:shadow-xl' placeholder='Ejm: Fernando' type='text' id='name' name='name' value={formData.name} onChange={handleChange} />

          <label className='mt-3 text-sm w-full' htmlFor='email'>Email:</label>
          <input className='mt-3 w-full text-xs p-2 rounded-md border border-[#18C964] outline-none focus:shadow-xl' placeholder='Ejm: fernando@gmail.com' type='email' id='email' name='email' value={formData.email} onChange={handleChange} />

          <label className='mt-3 text-sm' htmlFor='message'>Message:</label>
          <textarea id='message' className='resize-none mt-3 w-full text-xs p-2 rounded-md border border-[#18C964] outline-none focus:shadow-xl' placeholder='Ejm: Lorem ipsum placeholder message' name='message' value={formData.message} onChange={handleChange} />
          <Button
            className='h-4 text-sm p-4 mt-5 italic w-1/2 self-center'
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
