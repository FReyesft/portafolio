import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Menu({ setClicked }) {
  const [clicked, setLocalClicked] = useState(true);
  const item = {
    visible: {
      opacity: 1,
      x: 0,
      color: "#fff",
    },
    hidden: { opacity: 0, x: "-300px" },
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    hidden: {
      x: "-200px",
      opacity: 1,
    },
  };

  return (
    <>
      {clicked ? (
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className={`${"flex justify-center flex-col top-0 left-0 right-0 h-full w-full p-4 container_menu fixed z-30 items-center"}`}
        >
          <motion.li variants={item}>
            <Link
              onClick={() => {
                setLocalClicked(!clicked);
                setClicked(!clicked);
              }}
              className="text-secondary text-3xl m-6 font-bold"
              href="#homeSection"
              underline="hover"
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link
              onClick={() => {
                setLocalClicked(!clicked);
                setClicked(!clicked);
              }}
              className="text-secondary text-3xl m-6 font-bold"
              href="#aboutMeSection"
              underline="hover"
            >
              Sobre mi
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link
              onClick={() => {
                setLocalClicked(!clicked);
                setClicked(!clicked);
              }}
              className="text-secondary text-3xl m-6 font-bold"
              href="#contactSection"
              underline="hover"
            >
              Contacto
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link
              onClick={() => {
                setLocalClicked(!clicked);
                setClicked(!clicked);
              }}
              className="text-secondary text-3xl m-6 font-bold"
              href="#portfolioSection"
              underline="hover"
            >
              Portafolio
            </Link>
          </motion.li>
        </motion.ul>
      ) : (
        ""
      )}
    </>
  );
}
