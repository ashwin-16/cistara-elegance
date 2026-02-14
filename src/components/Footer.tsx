import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/cistara-logo.png";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Cistara" className="h-12 mb-4 brightness-200" />
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Premier hospitality supply partner delivering excellence and elegance to upscale hotels, restaurants, and catering businesses.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <a href="mailto:sales@cistara.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> sales@cistara.com
            </a>
            <a href="tel:+971524955377" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +971 52 495 5377
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>SPC Free Zone Business Center, Sharjah, UAE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10 mt-12 pt-8 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Cistara International FZE. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
