type Props = {
  images: string[];
};

// export default function Images({ images }: Props) {
//   return images.map((image, index) => {
//     const isRounded = Math.random() > 0.5;
//     const imageClass = clsx('aspect-video w-full', { 'rounded-md': isRounded });

//     return (
//       <div key={index} className="p-2 w-full aspect-video">
//         <img src={image} className={imageClass} />
//       </div>
//     );
//   });
// }
import "../../styles/styles.css";
import { useRef, useState } from "react";
import { animate, motion, useMotionValue} from "framer-motion";

export default function Images({ images }: Props) {
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
    // if (!(e.target instanceof HTMLLIElement)) return;
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
        className="flex list-none h-fit w-full px-[1.25rem] overflow-x-scroll"
      >
        {images.map((idx) => (
          <motion.li
            className="bg-white aspect-video h-[200px] px-2 w-screen"
            key={idx}
          ></motion.li>
        ))}
      </motion.ul>
  );
}
