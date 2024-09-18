import { motion } from "framer-motion";
import { PropsWithChildren, useRef, useState } from "react";
import { Dialog, DialogContent } from "./Dialog";
interface Props extends PropsWithChildren {
  idx: number;
  src: string;
  alt: string | undefined;
}

const isImage = (filename: string) => {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
  return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
};

export default function Display({ idx, src, alt }: Props) {
  const [dialog, setDialog] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.PointerEvent<HTMLLIElement>) => {
    startPos.current = { x: e.clientX, y: e.clientY };
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.PointerEvent<HTMLLIElement>) => {
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = (_e: React.PointerEvent<HTMLLIElement>) => {
    if (!isDragging) {
      setDialog(true);
    }
  };

  return (
    <>
      <motion.li
        layoutId={`image-${idx}`}
        key={idx}
        className="rounded-xs mx-2 flex aspect-video h-full min-h-[15.5rem] w-fit items-center justify-center px-2 md:max-h-[26rem] md:min-h-[22.5rem] lg:max-h-[40rem] lg:min-h-[34rem] lg:rounded-md lg:first-of-type:ml-4 lg:last-of-type:mr-4 dark:invert-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {isImage(src) && (
          <motion.img
            loading="lazy"
            src={src}
            alt={alt}
            className="pointer-events-none z-50 aspect-video h-full"
          />
        )}

      </motion.li>
      <Dialog
        open={dialog}
        onOpenChange={(o) => {
          setDialog(o);
        }}
      >
        <DialogContent className="md:1/2 m-0 flex aspect-video max-h-screen w-11/12 items-center justify-center p-5 md:p-6">
          {isImage(src) && (
            <motion.img
              loading="lazy"
              src={src}
              alt={alt}
              className="pointer-events-none z-50 aspect-video h-full"
            />
          )}

        </DialogContent>
      </Dialog>
    </>
  );
}
