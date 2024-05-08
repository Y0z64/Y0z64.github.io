
export default function Nav() {
  return (
    <nav className="flex items-center justify-end space-x-6 w-full px-4 pt-3">
      <a
        href="#whoami"
        className="font-geistMono text-lg text-black dark:text-gray-100 tracking-tighter"
      >
        who am i?
      </a>
      <a
        href="#projects"
        className="font-geistMono text-lg text-black dark:text-gray-100"
      >
        projects
      </a>
      <a className="font-geistMono text-lg text-black dark:text-gray-100">
        contact
      </a>
    </nav>
  );
}