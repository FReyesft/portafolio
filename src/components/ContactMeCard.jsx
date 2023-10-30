import { Card, CardBody, Button, Input, CardFooter } from "@nextui-org/react";
import {
  BiLogoLinkedin,
  BiSolidSend,
  BiLogoWhatsapp,
  BiLogoGithub,
} from "react-icons/bi";
import Link from "next/link";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mlwjxmr",
        "template_kvuv1g4",
        form.current,
        "cqhm42JADe_4NAsfh"
      )
      .then(
        () => {
          toast.success("Tu mensaje ha sido enviado correctamente");
        },
        (error) => {
          console.log(error.text);
          toast.error("Tu mensaje no ha podido ser enviado");
        }
      );
  };
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[710px] mt-3"
      shadow="sm"
    >
      <CardBody>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <Input
            name="user_name"
            variant="underlined"
            isRequired
            type="text"
            label="Nombre"
            className="w-full mt-3"
            color="success"
          />
          <Input
            name="user_email"
            variant="underlined"
            isRequired
            type="email"
            label="Email"
            className="w-full mt-3"
            color="success"
          />
          <Input
            name="message"
            variant="underlined"
            isRequired
            type="text"
            label="Mensaje"
            className="w-full mt-3"
            placeholder="Enter your message"
            color="success"
          />
          <Button
            className="h-4 text-sm p-4 mt-8 italic w-1/2 self-center"
            value="Send"
            type="submit"
            color="success"
            variant="shadow"
            startContent={<BiSolidSend />}
          >
            Enviar
          </Button>
        </form>
        <CardFooter className="flex justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/fernando-reyez-pinto-2a19b9260/"
            target=" _blank"
            className="p-1 mr-2 ml-2 hover:scale-125 shadow-md"
          >
            <BiLogoLinkedin className="text-3xl text-[#0e76a8]" />
          </Link>
          <Link
            href="https://wa.me/+573142325833/?text=Enviame un mensaje"
            target=" _blank"
            className="p-1 mr-2 ml-2 hover:scale-125  shadow-md"
          >
            <BiLogoWhatsapp className="text-3xl text-[#25D366] " />
          </Link>
          <Link
            href="https://github.com/FReyesft"
            target=" _blank"
            className="p-1 mr-2 ml-2 hover:scale-125 shadow-md"
          >
            <BiLogoGithub className="text-3xl text-[#24292e]" />
          </Link>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
