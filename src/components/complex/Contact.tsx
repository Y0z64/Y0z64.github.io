import SocialButton from "../atoms/SocialButton";
import SocialBar from "../particles/SocialBar";
import ConnectButton from "../atoms/ConnectButton";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

export default function Contact() {
  return (
    <div
      id="contact"
      className="lg: relative mb-4 flex h-[50vh]   w-screen flex-col items-end justify-end lg:h-[40vh] "
    >
      <div className="flex h-fit w-full items-end justify-between">
        <SocialBar>
          <SocialButton href="https://www.github.com/Y0z64">
            <FaGithubSquare
              className="m-1 size-14 md:m-0 md:size-20"
              stroke="black"
              fill="black"
            />{" "}
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/yairprogrammer">
            <FaLinkedin
              className="m-1 size-14 md:m-0 md:size-20"
              stroke="black"
              fill="black"
            />
          </SocialButton>
          <SocialButton href="https://twitter.com/y0z64_codes">
            <FaTwitterSquare
              className="m-1 size-14 md:m-0 md:size-20"
              stroke="black"
              fill="black"
            />
          </SocialButton>
          <SocialButton href="https://drive.google.com/file/d/1Ar8FVg1QwD-HCit-h2b3x_kkx0H2b6Kn/view?usp=drive_link">
            <GrDocumentUser
              className="m-1 size-14 md:m-0 md:size-20"
              stroke="black"
              fill="black"
            />
          </SocialButton>
        </SocialBar>
        <ConnectButton />
      </div>
    </div>
  );
}
