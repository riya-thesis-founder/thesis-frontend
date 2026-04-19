
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Database, FileSearch, ArrowRight, CheckCircle2 } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100 animate-fade-in">
            Next-Gen Research Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            Insight Starts With the <span className="text-blue-600">Right People</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Collect reliable research data from verified participants—simple, reliable, and built for real studies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/auth/researcher" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
              Start Collecting Data <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/participants" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
              Join as a Participant
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
            <span className="font-bold text-slate-400 uppercase tracking-wide text-xs">Built for Academic & Startup Research</span>
            <span className="font-bold text-slate-400 uppercase tracking-wide text-xs">Verified Participant Network</span>
            <span className="font-bold text-slate-400 uppercase tracking-wide text-xs">Expert Research Support</span>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -right-24 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-slate-500">Streamlining high-integrity research in three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FileSearch className="h-10 w-10 text-blue-600" />,
                title: "Researchers Submit Requirements",
                desc: "Define your study domain, target demographic, and sample size requirements through our intuitive dashboard."
              },
              {
                icon: <Users className="h-10 w-10 text-blue-600" />,
                title: "Verified Participants Matched",
                desc: "Our algorithm connects your study with verified individuals in our community who meet your exact criteria."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
                title: "Data Collected & Delivered",
                desc: "Review high-quality, reliable data collected securely and ready for your analysis and academic peer-review."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:shadow-sm transition-shadow">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center font-bold text-slate-300">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-8">
                Built for High-Integrity <br />Research & Discovery.
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Academic & Startup Focused", desc: "Designed for the rigors of professor-led studies and the speed of modern product market research." },
                  { title: "Verified Participants", desc: "Every participant undergoes rigorous verification to ensure you receive authentic, high-quality responses." },
                  { title: "Reliable Study Design", desc: "Expert guidance to ensure your surveys and interviews are structured for the best possible research outcomes." },
                  { title: "Structured Insights", desc: "We don't just provide data; we provide the foundation for breakthroughs and reliable business decisions." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mt-1 mr-4 bg-white p-1 rounded-full shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-slate-900">Project Overview</span>
                  <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-1/2"></div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="block text-2xl font-bold text-blue-600">84%</span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Completion</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="block text-2xl font-bold text-slate-900">12k+</span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Verified Pool</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-slate-200 rounded-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to collect high-quality data?</h2>
          <p className="text-slate-500 mb-10">Join 500+ researchers who trust Thesis for their critical studies.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/auth/researcher" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Create Research Project
            </Link>
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
