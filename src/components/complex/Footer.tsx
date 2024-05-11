import pkg from "../../../package.json";

export default function Footer() {
  return (
    <footer className="min-h-34 flex  w-screen   items-center justify-between bg-gray-100 px-4 py-3 text-[#1e1e1e]">
      <div className="lg:text-md flex h-full flex-col items-start justify-between text-left font-geistMono text-sm">
        <span>Contact</span>
        <a
          className="text-xs text-gray-600 lg:text-sm"
          href="https://www.linkedin.com/in/yairprogrammer"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/in/yairprogrammer
        </a>
        <a
          className="text-xs text-gray-600 lg:text-sm"
          href="mailto:yairprogrammer@gmail.com?subject=Let's%20Connect!"
        >
          yairprogrammer@gmail.com
        </a>
      </div>
      <div className="flex h-14 flex-col items-end justify-end">
        <a
          href="https://www.github.com/y0z64"
          className="lg:text-md flex items-end justify-end font-geistMono text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Y0z64© 2024
        </a>
        <a
          href="#"
          className="flex items-end justify-end font-geistMono text-xs text-gray-600 lg:text-sm"
        >
          Version {pkg.version}
        </a>
      </div>
    </footer>
  );
}
