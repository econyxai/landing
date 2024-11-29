interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/econyxai.png"
        alt="Econyx.AI Logo"
        className="h-[48px] w-auto md:h-[56px] transition-all duration-200"
      />
      <span className="ml-3 text-xl md:text-2xl font-bold text-white tracking-tight">ECONYX.AI</span>
    </div>
  );
}