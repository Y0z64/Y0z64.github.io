export default function Nav() {
  return (
    <nav className="flex items-center justify-end space-x-6 md:space-x-11 w-full px-4 pt-3">
      <a
        href="#whoami"
        className="font-geistMono text-lg md:text-2xl text-gray-100 hover:text-gray-400 transition-colors duration-200 tracking-tighter"
      >
        who am i?
      </a>
      <a
        href="#projects"
        className="font-geistMono text-lg md:text-2xl text-gray-100 hover:text-gray-400 transition-colors duration-200"
      >
        projects
      </a>
      <a
        href="#contact"
        className="font-geistMono text-lg md:text-2xl text-gray-100 hover:text-gray-400 transition-colors duration-200"
      >
        contact
      </a>
    </nav>
  );
}
