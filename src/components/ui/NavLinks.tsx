interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className = "" }: NavLinksProps) {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 min-h-[44px] flex items-center text-sm md:text-base font-medium tracking-wide"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}