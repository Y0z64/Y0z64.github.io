import { motion } from "framer-motion";

export default function Contact() {
  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };

  return (
    <div
      id="contact"
      className="h-screen relative w-screen flex flex-col justify-end items-end snap-center mb-4"
    >
      <a
        href="mailto:yairprogrammer@gmail.com?subject=Let's%20Connect!"
        className="flex w-min justify-center items-center mb-4"
      >
        <span className="font-geistMono text-white text-5xl w-min">
          {"Wanna\nTalk?"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white w-28 h-28"
        >
          <motion.path
            d="M7 7h10v10"
            variants={icon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.path
            d="M7 17 17 7"
            variants={icon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </svg>
      </a>
    </div>
  );
}
