import { motion } from "framer-motion";
import Nav from "../atoms/Nav";
import Container3D from "../particles/Container3D";

export default function HeroScreen() {

  return (
    <div className="relative mb-4 flex h-dvh w-screen snap-center flex-col items-end justify-between">
      <Nav />
      <div className="order flex h-full w-full flex-col items-end justify-end xl:flex-row-reverse">
        <Container3D position={[1, 0, -0.8]}>
          <torusKnotGeometry args={[1, 0.2, 128, 32]} />
        </Container3D>
        <motion.a
          whileHover={{ scale: 1.04 }}
          href="https://www.github.com/y0z64"
          className="-mb-4 flex h-min w-full justify-start pl-3 font-geistMono text-[7rem] tracking-tight text-gray-100 md:mr-4 md:text-[10rem] lg:ml-12 lg:text-[14rem] xl:w-min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Y0z64
        </motion.a>
      </div>
    </div>
  );
}
