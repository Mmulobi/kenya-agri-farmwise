import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-4 md:py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-primary/90 p-2 rounded-xl group-hover:bg-primary transition-colors">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Agri<span className="text-primary">Connect</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Features", "Impact", "Market", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/90 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-glow">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {["Features", "Impact", "Market", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-primary py-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <hr className="border-white/10" />
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
              Log In
            </Button>
          </Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
