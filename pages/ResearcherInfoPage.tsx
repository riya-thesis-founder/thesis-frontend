
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GraduationCap, Rocket, Target, Zap, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

const ResearcherInfoPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const isAcademic = type === 'academic';

  const content = isAcademic ? {
    title: "Thesis for Academic Research",
    subtitle: "Built for professors, PhD scholars, and independent researchers.",
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
    useCases: [
      "Dissertation data collection",
      "Social science experiments",
      "Longitudinal behavioral studies",
      "Health and wellness surveys"
    ],
    benefits: [
      "Rigorous participant verification to ensure high-quality, authentic data.",
      "Support for complex demographic filters.",
      "Ethical compliance documentation for IRB submissions.",
      "Discounted rates for verified academic institutions."
    ]
  } : {
    title: "Thesis for Startup Research",
    subtitle: "Built for founders, product teams, and market researchers.",
    icon: <Rocket className="h-12 w-12 text-blue-600" />,
    useCases: [
      "Product-market fit validation",
      "UX/UI usability testing",
      "Pricing sensitivity research",
      "Concept validation and rapid feedback"
    ],
    benefits: [
      "Rapid participant matching for fast-moving product cycles.",
      "Gen-Z and Millennial focused pools for modern startups.",
      "Integrated tools for qualitative and quantitative data.",
      "Cost-effective alternatives to traditional high-ticket firms."
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
            {content.icon}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{content.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="mt-10">
            <Link to="/auth/researcher" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Create Research Project <FileText className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <Target className="mr-3 text-blue-600" /> Key Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.useCases.map((useCase, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-slate-700 font-medium text-sm leading-snug">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <Zap className="mr-3 text-blue-600" /> Platform Benefits
            </h2>
            <div className="space-y-6">
              {content.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResearcherInfoPage;
