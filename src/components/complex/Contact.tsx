import SocialButton from "../atoms/SocialButton";
import SocialBar from "../particles/SocialBar";
import ConnectButton from "../atoms/ConnectButton";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative mb-4 flex h-[50vh] w-screen snap-end flex-col items-end justify-end lg:h-[40vh] lg:snap-center"
    >
      <div className="flex h-fit w-full items-end justify-between">
        <SocialBar>
          <SocialButton href="https://www.github.com/Y0z64">
            <FaGithubSquare className="size-14 md:size-20 m-1 md:m-0" stroke="black" fill="black" />{" "}
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/yairprogrammer">
            <FaLinkedin className="size-14 md:size-20 m-1 md:m-0" stroke="black" fill="black" />
          </SocialButton>
          <SocialButton href="https://twitter.com/y0z64_codes">
            <FaTwitterSquare className="size-14 md:size-20 m-1 md:m-0" stroke="black" fill="black" />
          </SocialButton>
        </SocialBar>
        <ConnectButton />
      </div>
    </div>
  );
}
