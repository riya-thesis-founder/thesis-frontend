
import React, { useEffect } from 'react';
import { X, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-20"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Left Side: Brand/Info */}
        <div className="md:w-2/5 bg-slate-50 p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-serif text-blue-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <a 
                href="mailto:contact@thesis.co.in" 
                className="flex items-center text-blue-700 hover:text-blue-800 transition-colors font-semibold text-lg"
              >
                <Mail className="h-5 w-5 mr-3" />
                contact@thesis.co.in
              </a>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Clock className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Support Hours</h4>
                    <p className="text-xs text-slate-500 font-medium">Available 24/7 for researchers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                    <ShieldCheck className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Typical Response Time</h4>
                    <p className="text-xs text-slate-500 font-medium">Usually within 2-4 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-xs leading-relaxed italic">
              "We prioritize academic integrity and data privacy in every conversation."
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-3/5 p-10 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-tighter">Full Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-tighter">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder-slate-400"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-tighter">Contact Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder-slate-400"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-tighter">Message *</label>
              <textarea 
                rows={4} 
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder-slate-400 resize-none"
                placeholder="How can our research team assist you today?"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center uppercase tracking-widest text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
