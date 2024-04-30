import clsx from "clsx";

type Props = {
  images: string[];
};

export default function Images({ images }: Props) {
  return images.map((image, index) => {
    const isRounded = Math.random() > 0.5;
    const imageClass = clsx('aspect-video w-full', { 'rounded-md': isRounded });

    return (
      <div key={index} className="p-2 w-full aspect-video">
        <img src={image} className={imageClass} />
      </div>
    );
  });
}