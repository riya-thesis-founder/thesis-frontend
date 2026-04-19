
import React from 'react';
import { Eye, Shield, Users, HeartHandshake } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Better Research Through Integrity.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Thesis was born from a simple realization: traditional research methods were broken. Data was either too slow and expensive to collect, or fast but unreliable. We bridge that gap.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Do</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We provide a robust infrastructure that connects serious researchers with people who care about contributing to knowledge. Our platform manages the recruitment, verification, and data flow, allowing researchers to focus on analysis.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By leveraging advanced verification and a "quality-first" participant pool, we help academic institutions publish peer-reviewed studies and startups build products users actually want.
            </p>
          </div>
          <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <ul className="space-y-4">
              <li className="flex items-center"><Shield className="h-5 w-5 mr-3 opacity-80" /> Ethical data collection as a default.</li>
              <li className="flex items-center"><Users className="h-5 w-5 mr-3 opacity-80" /> Fair compensation for participants.</li>
              <li className="flex items-center"><HeartHandshake className="h-5 w-5 mr-3 opacity-80" /> Mutual trust between researcher & contributor.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-20">
          <h2 className="text-center text-3xl font-bold text-slate-900 mb-16">The Problem We Solve</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Low Quality Samples", desc: "Many platforms suffer from 'professional survey takers' who rush through for quick cash. We verify every human." },
              { title: "Ethical Gray Areas", desc: "Data collection often lacks transparency. We provide a clear ethical framework for both parties." },
              { title: "Cost Barriers", desc: "Traditional market research firms charge tens of thousands. We make high-quality research accessible." }
            ].map((prob, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{prob.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
