import { Link } from 'react-router'


function Header() {
  return (
    <header className=" sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <a href="/#home" className="shrink-0">
          <img
            src="/public/baji-text.png"
            alt="Bajiru"
            className="h-auto w-40"
          />
        </a>

        <nav className="flex items-center gap-8">
          <a
            href="/#about"
            className="text-black no-underline"
          >
            About
          </a>

          <a
            href="/listening"
            className="text-black no-underline"
          >
            Listening
          </a>

          <a
            href="/songs"
            className="text-black no-underline"
          >
            Songs
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header