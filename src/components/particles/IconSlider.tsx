import { motion } from "framer-motion";
import { FaAmazon, FaAndroid, FaGithub, FaLinux, FaPython, FaReact, FaRedhat } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { SiAstro, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { cloneElement } from "react";

const icons = [
  <FaReact className="size-32"/>,
  <BiLogoTypescript />,
  <BiLogoJavascript />,
  <SiTailwindcss />,
  <SiNextdotjs/>,
  <FaPython />,
  <SiAstro />,
  <FaGithub/>,
  <FaAndroid/>,
  <FaLinux/>,
  <FaRedhat/>,
  <FaAmazon/>,
];

export default function SliderDesign2() {
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div
      className="relative mx-auto h-full overflow-hidden bg-white py-12"
      style={{ width: "95%" }}
    >
      <div className="before:blur-3 after:blur-3 absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-white before:to-transparent before:filter after:absolute after:right-0 after:top-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-white after:to-transparent after:filter"></div>
      <motion.div
        className="flex"
        whileInView={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedIcons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / icons.length}%` }}
          >
            <div className="flex h-full w-full items-center justify-center">
              {cloneElement(icon, { className: "size-12 mx-4" })}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
