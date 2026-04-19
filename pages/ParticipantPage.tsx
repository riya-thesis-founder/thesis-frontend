/*
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, DollarSign, ShieldCheck, Heart, UserPlus, Mail, Target, Lock, ArrowRight, Shield } from 'lucide-react';

const ParticipantPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log('Participant signing up:', formData);
    navigate('/auth/participant');
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Shape the Future. <br className="hidden md:block" /> Get Rewarded.
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join a community of thousands contributing to high-impact research. Get invited to studies that match your profile.
          </p>
          <a href="#join-form" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-lg inline-block">
            Join as a Participant
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Join Thesis?</h2>
            <p className="mt-4 text-slate-500">More than just surveys. Real impact, real rewards.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <DollarSign className="h-8 w-8 text-blue-600" />, title: "Fair Incentives", desc: "We ensure you are fairly compensated for your time and intellectual contribution." },
              { icon: <Heart className="h-8 w-8 text-rose-500" />, title: "Meaningful Studies", desc: "Participate in academic and startup projects that actually solve real-world problems." },
              { icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />, title: "Data Privacy", desc: "Your personal information is encrypted. We only share anonymized research data." },
              { icon: <Users className="h-8 w-8 text-indigo-500" />, title: "Community", desc: "Access a private network of curious minds and early-access opportunities." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="join-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Simple Onboarding Process</h2>
              <div className="space-y-8">
                {[
                  { icon: <UserPlus />, title: "Registration", desc: "Create your profile with basic details and research interests." },
                  { icon: <Mail />, title: "Verification", desc: "Verify your email to join our high-integrity participant pool." },
                  { icon: <Target />, title: "Invitation", desc: "Receive personalized invites to studies that match your profile." }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Join the Community</h3>
                <p className="text-slate-500 text-sm mt-2">Get started today and start earning rewards for your insights.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  <div className="relative">
                    <UserPlus className="absolute left-3 top-3 h-5 w-5 text-slate-300" />
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-300" />
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-300" />
                    <input 
                      type="password" 
                      required 
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center group shadow-md shadow-blue-100"
                >
                  Create Participant Account 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs">
                <p className="text-slate-400 flex items-center mb-2 sm:mb-0">
                  <Shield className="h-3 w-3 mr-1" /> Data is encrypted and secure
                </p>
                <Link to="/auth/participant" className="text-blue-600 font-bold hover:underline">
                  Already have an account? Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParticipantPage;
*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, DollarSign, ShieldCheck, Heart, UserPlus, Mail, Target, Lock, ArrowRight, Shield } from 'lucide-react';

const ParticipantPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Redirect to AuthPage with correct role + register mode
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/auth/participant");
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Shape the Future. <br className="hidden md:block" /> Get Rewarded.
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join a community of thousands contributing to high-impact research.
            Get invited to studies that match your profile.
          </p>

          {/* FIXED BUTTON */}
          <button
            onClick={() =>
              navigate("/auth/participant")
            }
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-lg inline-block"
          >
            Join as a Participant
          </button>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Join Thesis?</h2>
            <p className="mt-4 text-slate-500">
              More than just surveys. Real impact, real rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <DollarSign className="h-8 w-8 text-blue-600" />, title: "Fair Incentives", desc: "We ensure you are fairly compensated." },
              { icon: <Heart className="h-8 w-8 text-rose-500" />, title: "Meaningful Studies", desc: "Participate in impactful research." },
              { icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />, title: "Data Privacy", desc: "Your data is encrypted and secure." },
              { icon: <Users className="h-8 w-8 text-indigo-500" />, title: "Community", desc: "Access exclusive research opportunities." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN FORM SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Simple Onboarding Process
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Registration", desc: "Create your profile." },
                  { title: "Verification", desc: "Verify your email." },
                  { title: "Invitation", desc: "Receive study invites." }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold mr-4 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Join the Community
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full p-3 border border-slate-200 rounded-xl"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full p-3 border border-slate-200 rounded-xl"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full p-3 border border-slate-200 rounded-xl"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  Create Participant Account
                </button>
              </form>

              <div className="mt-6 text-sm text-center">
                <Link
                  to="/auth/participant"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Already have an account? Log in
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ParticipantPage;
