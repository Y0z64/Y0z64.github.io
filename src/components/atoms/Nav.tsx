export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-end space-x-6 px-4 pt-3 lg:mr-5 lg:space-x-11">
      <a
        href="#aboutme"
        className="font-geistMono text-lg tracking-tighter text-gray-100 transition-colors duration-200 hover:text-gray-400 md:text-2xl"
      >
        who am i?
      </a>
      <a
        href="#projects"
        className="font-geistMono text-lg text-gray-100 transition-colors duration-200 hover:text-gray-400 md:text-2xl"
      >
        projects
      </a>
      <a
        href="#contact"
        className="font-geistMono text-lg text-gray-100 transition-colors duration-200 hover:text-gray-400 md:text-2xl"
      >
        contact
      </a>
    </nav>
  );
}
