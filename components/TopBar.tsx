
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Mail className="h-3 w-3 mr-2 text-blue-400" />
            <span>contact@thesis.co.in</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-3 w-3 mr-2 text-blue-400" />
            <span>Support Available 24/7</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-slate-500">Ethical Data Collection Platform</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
