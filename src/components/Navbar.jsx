import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative transition-colors ${
      isActive ? "text-purple-400" : "hover:text-purple-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-slate-700 via-purple-900 to-slate-900 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO → HOME */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full border-2 border-purple-400 flex items-center justify-center font-bold bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
            NG
          </div>
          <div>
            <h1 className="font-semibold leading-none text-lg">
              NEMESIS GROUP
            </h1>
            <p className="text-xs text-purple-300">
              Certified Professional Training
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* HOME */}
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-colors">
              Services
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </div>

            {/* DROPDOWN */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-4 space-y-3">

                <Link
                  to="/services/hr-training"
                  className="block p-3 rounded-xl hover:bg-white/5"
                >
                  <h4 className="font-semibold">HR Training</h4>
                  <p className="text-sm text-purple-300">
                    Human Resource operations & management
                  </p>
                </Link>

                <Link
                  to="/services/customer-care"
                  className="block p-3 rounded-xl hover:bg-white/5"
                >
                  <h4 className="font-semibold">Customer Care Training</h4>
                  <p className="text-sm text-purple-300">
                    Support, communication & client handling
                  </p>
                </Link>

                <Link
                  to="/services"
                  className="flex items-center justify-between text-sm font-semibold text-purple-400 hover:text-purple-300 pt-3 border-t border-white/10"
                >
                  View All Services
                  <span>→</span>
                </Link>
              </div>
            </div>
          </li>

          {/* CONTACT → SCROLL */}
          <li>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </li>

          {/* CTA */}
          <li>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 inline-block"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 space-y-2">

            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Home
            </Link>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-white/5"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">

                  <Link
                    to="/services/hr-training"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 px-4 text-purple-300"
                  >
                    HR Training
                  </Link>

                  <Link
                    to="/services/customer-care"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 px-4 text-purple-300"
                  >
                    Customer Care Training
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 px-4 font-semibold text-purple-400"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 rounded-lg hover:bg-white/5"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
