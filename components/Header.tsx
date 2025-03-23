// src/components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/my-app/public" className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Logo"
            width={80}
            height={20}
            className="dark:invert"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/my-app/public" className="font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/services" className="font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button (simplified for now) */}
          <button aria-label="Menu" className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header