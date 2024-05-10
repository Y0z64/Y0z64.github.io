import { motion } from 'framer-motion';


export default function ConnectButton() {
    const icon = {
      hidden: {
        pathLength: 0,
      },
      visible: {
        pathLength: 1,
      },
    };
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href="mailto:yairprogrammer@gmail.com?subject=Let's%20Connect!"
      className="mb-4 flex w-min items-center justify-center"
    >
      <span className="w-min font-geistMono text-5xl text-white lg:text-8xl">
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
        className="h-28 w-28 stroke-white lg:h-[192px] lg:w-[192px]"
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
    </motion.a>
  );
}