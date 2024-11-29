import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111111] text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#00F0FF] flex-grow"
              />
              <button className="bg-[#6E00FF] hover:bg-[#5500cc] text-white px-6 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#00F0FF]">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00F0FF]">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00F0FF]">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}