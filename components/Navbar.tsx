import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, LogOut, FileStack } from 'lucide-react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isResearcherDropdownOpen, setIsResearcherDropdownOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const navigate = useNavigate();

  /* ⭐ AUTO CHECK LOGIN FROM LOCALSTORAGE */

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (token && savedRole) {
      setRole(savedRole);
    }
  }, []);

  /* ⭐ LOGOUT */

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setRole(null);
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">

          {/* LOGO */}

          <div className="flex items-center">
            <Link to="/" className="flex items-center group">

              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center mr-3">
                <FileStack className="h-5 w-5 text-white" />
              </div>

              <span className="text-2xl font-bold text-slate-900 italic">
                Thesis
              </span>

            </Link>

            {/* MENU LINKS */}

            <div className="hidden md:ml-10 md:flex md:space-x-8">

              <Link to="/" className="text-sm font-bold text-slate-500 hover:text-slate-900 uppercase">
                Home
              </Link>

              <div className="relative flex items-center">

                <button
                  onMouseEnter={() => setIsResearcherDropdownOpen(true)}
                  onMouseLeave={() => setIsResearcherDropdownOpen(false)}
                  className="text-sm font-bold text-slate-500 hover:text-slate-900 uppercase flex items-center"
                >
                  Researchers <ChevronDown className="ml-1 h-3 w-3" />
                </button>

                {isResearcherDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsResearcherDropdownOpen(true)}
                    onMouseLeave={() => setIsResearcherDropdownOpen(false)}
                    className="absolute top-full left-0 w-52 bg-white border rounded-xl shadow-xl py-2"
                  >
                    <Link to="/researchers/academic" className="block px-4 py-2 text-xs font-bold hover:text-blue-600">
                      Academic Research
                    </Link>

                    <Link to="/researchers/startup" className="block px-4 py-2 text-xs font-bold hover:text-blue-600">
                      Startup Research
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/participants" className="text-sm font-bold text-slate-500 hover:text-slate-900 uppercase">
                Participants
              </Link>

              <Link to="/pricing" className="text-sm font-bold text-slate-500 hover:text-slate-900 uppercase">
                Pricing
              </Link>

              <Link to="/about" className="text-sm font-bold text-slate-500 hover:text-slate-900 uppercase">
                About
              </Link>

            <Link
  to="/contact"
  className="text-sm font-bold text-slate-500 hover:text-slate-900 uppercase"
>
  Contact
</Link>

            </div>
          </div>


          {/* RIGHT SIDE LOGIN AREA */}

          <div className="hidden md:flex items-center space-x-6">

            {!role ? (

              <>
                <Link to="/auth/researcher" className="text-xs font-black uppercase text-slate-500">
                  Login
                </Link>

                <Link to="/auth/researcher"
                  className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase">
                  Get Started
                </Link>
              </>

            ) : (

              <div className="flex items-center space-x-6">

                <span className="text-xs font-black text-blue-600 uppercase">
                  👤 Welcome {role}
                </span>

                {/* <Link to={`/dashboard/${role}`}
                  className="text-xs font-black text-slate-600 hover:text-slate-900 uppercase">
                  Dashboard
                </Link> */}

                <button onClick={handleLogout}
                  className="text-slate-400 hover:text-slate-600">
                  <LogOut className="h-5 w-5" />
                </button>

              </div>

            )}

          </div>


          {/* MOBILE MENU BUTTON */}

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
