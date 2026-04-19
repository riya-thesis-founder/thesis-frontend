
import React, { useRef } from 'react';
import Calculator from '../components/Calculator';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            Get expert human <br className="hidden md:block" /> feedback, fast
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            Flexible options for quality data collection - from pay-as-you-go pricing to expert-led solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg min-w-[200px] text-center">
              Talk to an expert
            </Link>
            <Link to="/auth/researcher" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all min-w-[200px] text-center">
              Get started for free
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Platform Tier */}
            <div className="bg-white rounded-[32px] border-2 border-blue-100 p-10 flex flex-col shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <span className="text-blue-700 font-bold text-xl">Platform</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>
              </div>
              <p className="text-slate-500 mb-8 text-lg">Instant access to quality participants with no monthly fees.</p>
              
              <h3 className="text-4xl font-bold text-slate-900 mb-10">Pay as you go</h3>
              
              <div className="mb-10">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Ideal for:</h4>
                <p className="text-slate-600 leading-relaxed">Teams with research expertise who want rapid, self-directed access to quality participants.</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-12">
                  {[
                    "Access to a growing pool of verified participants",
                    "Research-ready participant screening",
                    "Sample size–based pricing",
                    "Support for surveys and form-based studies",
                    "Academic & startup-friendly workflows",
                    "Email-based support",
                    "Secure and consent-first data handling"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-700 font-medium">
                      <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto text-center space-y-6">
                <button 
                  onClick={scrollToCalculator}
                  className="text-blue-600 font-bold text-lg hover:underline inline-block"
                >
                  Estimate pricing
                </button>
                <Link to="/auth/researcher" className="block w-full bg-blue-700 text-white py-5 rounded-full font-bold text-xl hover:bg-blue-800 transition-all shadow-md text-center">
                  Start now for free
                </Link>
              </div>
            </div>

            {/* Managed Services Tier */}
            <div className="bg-white rounded-[32px] border border-slate-100 p-10 flex flex-col shadow-sm">
              <div className="mb-6">
                <span className="text-blue-700 font-bold text-xl">Managed services</span>
              </div>
              <p className="text-slate-500 mb-8 text-lg">Expert-led data collection with dedicated quality assurance.</p>
              
              <h3 className="text-4xl font-bold text-slate-900 mb-10">Custom</h3>
              
              <div className="mb-10">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Ideal for:</h4>
                <p className="text-slate-600 leading-relaxed">Teams that need quality datasets for AI or complex research without the operational overhead.</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-12">
                  {[
                    "Custom participant sourcing",
                    "Help with study design and screening",
                    "Manual verification of responses",
                    "Ongoing quality checks",
                    "Dedicated point of contact",
                    "Flexible timelines",
                    "Clear documentation and reporting"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-700 font-medium">
                      <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-10">
                <Link to="/contact" className="block w-full bg-blue-700 text-white py-5 rounded-full font-bold text-xl hover:bg-blue-800 transition-all shadow-md text-center">
                  Talk to an expert
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Estimation Section */}
      <section ref={calculatorRef} className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Estimate your study costs</h2>
            <p className="text-lg text-slate-600">
              Get an instant projection based on your specific requirements. Final pricing is confirmed after review.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Calculator mode="PRICE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
