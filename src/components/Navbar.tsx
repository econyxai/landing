import { Logo } from './ui/Logo';
import { NavLinks } from './ui/NavLinks';
import { MobileMenu } from './ui/MobileMenu';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md bg-[#0A0A0A] z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Logo className="py-2" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-12">
            <NavLinks className="flex space-x-10" />
            <button className="bg-[#6E00FF] hover:bg-[#5500cc] text-white px-6 py-3 rounded-md transition-colors text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}