import React from 'react';
import { Link } from 'react-router-dom';
import { FileStack, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center mr-3">
                <FileStack className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight italic">
                Thesis
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              The premier platform for high-integrity research. Connecting global researchers with verified participants to streamline the collection of quality data and academic insights.
            </p>
          </div>

          {/* RESEARCH */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
              Research
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/researchers/academic" className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/researchers/startup" className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest">
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* JOIN US */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
              Join Us
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/participants" className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest">
                  Become a Participant
                </Link>
              </li>
              <li>
                <Link to="/brand" className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest">
                  Brand Assets
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest">
                  About Thesis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">

          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} THESIS ETHICAL DATA INFRASTRUCTURE.
          </p>

          {/* SOCIAL LINKS */}
          <div className="mt-6 md:mt-0 flex space-x-6 items-center">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/company/thesis-official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                LinkedIn
              </span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/thesis.co.in?igsh=NTVnOHcxMTl0cHlh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-pink-500 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Instagram
              </span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;