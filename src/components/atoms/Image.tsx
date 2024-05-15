import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";

interface Props extends PropsWithChildren {
  idx: number;
  image: string;
  alt: string | undefined;
}

export default function Image({idx, image, alt}: Props) {
  const [show, setShow] = useState(false);
  
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <motion.li
      key={idx}
      className="rounded-xs mx-2 flex aspect-video h-full min-h-[15.5rem] w-fit items-center justify-center px-2 md:max-h-[26rem] md:min-h-[22.5rem] lg:max-h-[40rem] lg:min-h-[34rem] lg:rounded-md lg:first-of-type:ml-4 lg:last-of-type:mr-4 dark:invert-0"
    >
      <img src={image} alt={alt} className="aspect-video h-min w-full" onClick={() => handleClick()}/>
      {show && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-70 flex items-center justify-center pointer-events-none" >
          
        </div>
      )}
    </motion.li>
  );
}