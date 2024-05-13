import { useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

type Props = {
  images: string[];
};

export default function ImageSlider({ images }: Props) {
  const ref = useRef<HTMLUListElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [trackMouse, setTrackMouse] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);

  const x = useMotionValue(0);

  const handleMouseMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!ref.current) return;
    if (!trackMouse) return;

    setAnimationComplete(false);

    const xVal = e.pageX - ref.current.offsetLeft;
    const walk = (xVal - startX) * 2; //scroll-fast

    const controls = animate(x, scrollLeft - walk, {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      onUpdate: (val) => {
        if (!ref.current) return;
        ref.current.scrollLeft = val;
      },
      onComplete: () => {
        setAnimationComplete(true);
      },
      onStop: () => {
        setAnimationComplete(true);
      },
    });
    return controls.stop;
  };

  const handleMouseDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!ref.current) return;

    setTrackMouse(true);

    const startX = e.pageX - ref.current.offsetLeft;
    setStartX(startX);

    const scrollLeft = ref.current.scrollLeft;
    setScrollLeft(scrollLeft);
  };

  const handleMouseLeave = () => {
    setTrackMouse(false);
  };

  const handleMouseUp = () => {
    setTrackMouse(false);
  };

  const handleScroll = () => {
    if (!ref.current) return;

    if (animationComplete) {
      x.set(ref.current.scrollLeft);
    }
  };

  return (
    <motion.ul
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onScroll={handleScroll}
      className="flex h-fit w-full snap-x snap-mandatory list-none overflow-x-scroll pb-3 pr-1 lg:snap-none"
    >
      {images.map((image, idx) => {
        const imageName = image.split("/").pop()?.split(".").shift();
        return (
          <motion.li
            key={idx}
            className="rounded-xs mx-2 flex aspect-video h-full min-h-[15.5rem] w-fit items-center justify-center px-2 md:min-h-[22.5rem] md:max-h-[26rem] lg:min-h-[34rem] lg:max-h-[40rem] lg:rounded-md lg:first-of-type:ml-4 lg:last-of-type:mr-4 dark:invert-0"
          >
            <img
              src={image}
              alt={imageName}
              className="aspect-video h-min w-full"
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
