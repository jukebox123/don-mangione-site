import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/cardapio", label: "Cardápio" },
    { path: "/sobre", label: "Sobre" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-amber-600/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo (SEM FIGMA) */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="Don Mangione" 
            className="h-10 w-auto object-contain"
          />
  
          <span className="text-white font-bold text-xl leading-none">
            Don <span className="text-amber-500">Mangione</span>
          </span>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "text-amber-500"
                    : "text-zinc-300 hover:text-amber-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block transition-colors ${
                  location.pathname === item.path
                    ? "text-amber-500"
                    : "text-zinc-300 hover:text-amber-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
