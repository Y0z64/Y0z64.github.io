import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href?: string;
}

export default function SocialButton({ children, href }: Props) {
  return (
    <motion.a whileHover={{scale: 1.02, rotate: -10}} href={href} className="aspect-square flex justify-center items-center rounded-xl bg-white md:w-24 lg:w-28">
      {children}
    </motion.a>
  );
}
