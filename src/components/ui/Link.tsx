interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-[#00F0FF] transition-colors duration-200"
    >
      {children}
    </a>
  );
}