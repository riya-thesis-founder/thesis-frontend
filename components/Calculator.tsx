
import React, { useState, useEffect } from 'react';
import { Building2, User, Wallet, Clock, Info, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface CalculatorProps {
  mode: 'PRICE' | 'REVENUE';
}

const Calculator: React.FC<CalculatorProps> = ({ mode }) => {
  const [orgType, setOrgType] = useState<'Academic' | 'Corporate' | 'Custom'>('Academic');
  const [submissions, setSubmissions] = useState(100);
  const [timePerSubmission, setTimePerSubmission] = useState(15);
  const [currency, setCurrency] = useState<'₹' | '$'>('₹');
  const [customQuery, setCustomQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [results, setResults] = useState({
    reward: 0,
    fees: 0,
    total: 0
  });

  // Rates from the provided Indian pricing table
  const inrRates = [
    { mins: 2, acad: 10, corp: 15 },
    { mins: 4, acad: 18, corp: 25 },
    { mins: 6, acad: 25, corp: 35 },
    { mins: 10, acad: 50, corp: 60 },
    { mins: 15, acad: 75, corp: 90 },
    { mins: 20, acad: 95, corp: 120 },
    { mins: 30, acad: 150, corp: 180 },
    { mins: 45, acad: 210, corp: 260 },
    { mins: 60, acad: 275, corp: 330 },
  ];

  // Rates from the provided Global (USD) pricing table
  const usdRates = [
    { mins: 2, acad: 0.10, corp: 0.15 },
    { mins: 4, acad: 0.20, corp: 0.30 },
    { mins: 6, acad: 0.30, corp: 0.45 },
    { mins: 10, acad: 0.50, corp: 0.75 },
    { mins: 15, acad: 0.75, corp: 1.10 },
    { mins: 20, acad: 1.00, corp: 1.50 },
    { mins: 30, acad: 1.50, corp: 2.25 },
    { mins: 45, acad: 2.25, corp: 3.30 },
    { mins: 60, acad: 3.00, corp: 4.50 },
  ];

  const getRate = (mins: number, type: 'Academic' | 'Corporate' | 'Custom', ratesArray: any[]) => {
    if (type === 'Custom') return 0;
    if (mins <= ratesArray[0].mins) return type === 'Academic' ? ratesArray[0].acad : ratesArray[0].corp;
    
    if (mins >= ratesArray[ratesArray.length - 1].mins) {
      const last = ratesArray[ratesArray.length - 1];
      const base = type === 'Academic' ? last.acad : last.corp;
      return (base / last.mins) * mins; // Scale linearly for studies beyond the table
    }

    // Linear interpolation between tiers
    for (let i = 0; i < ratesArray.length - 1; i++) {
      const lower = ratesArray[i];
      const upper = ratesArray[i + 1];
      if (mins >= lower.mins && mins <= upper.mins) {
        const ratio = (mins - lower.mins) / (upper.mins - lower.mins);
        const lRate = type === 'Academic' ? lower.acad : lower.corp;
        const uRate = type === 'Academic' ? upper.acad : upper.corp;
        return lRate + ratio * (uRate - lRate);
      }
    }
    return type === 'Academic' ? ratesArray[0].acad : ratesArray[0].corp;
  };

  useEffect(() => {
    if (orgType === 'Custom') return;
    
    let reward = 0;
    let fees = 0;

    if (currency === '₹') {
      const ratePerSub = getRate(timePerSubmission, orgType, inrRates);
      reward = submissions * ratePerSub;
      fees = 100; // Flat ₹100 platform fee for Indian audience
    } else {
      const ratePerSub = getRate(timePerSubmission, orgType, usdRates);
      reward = submissions * ratePerSub;
      fees = 10; // Flat $10 platform fee for US/Global audience as requested
    }

    setResults({
      reward,
      fees,
      total: reward + fees
    });
  }, [orgType, submissions, timePerSubmission, currency]);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send the data to backend here
    setTimeout(() => {
        setIsSubmitted(false);
        setCustomQuery('');
        setOrgType('Academic');
    }, 4000);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden p-8 md:p-12 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Input Controls */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Organization Type */}
          <section>
            <div className="flex items-start mb-6">
              <div className="p-2.5 bg-slate-900 rounded-xl mr-4 shadow-lg shadow-slate-200">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Organization Category</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Select for specialized pricing</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Academic', 'Corporate', 'Custom'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setOrgType(type as any);
                    setIsSubmitted(false);
                  }}
                  className={`flex items-center px-6 py-3 border-2 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${
                    orgType === type 
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]' 
                      : 'border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600'
                  }`}
                >
                  {type === 'Custom' && <Sparkles className="h-4 w-4 mr-2" />}
                  {type}
                </button>
              ))}
            </div>
          </section>

          {orgType !== 'Custom' ? (
            <div className="space-y-10 animate-in fade-in slide-in-from-left duration-500">
              {/* Number of submissions */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="p-2.5 bg-slate-50 rounded-xl mr-4 border border-slate-100">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Target Submissions</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Total participant count</p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="number"
                      min="1"
                      value={submissions}
                      onChange={(e) => setSubmissions(Math.max(1, Number(e.target.value)))}
                      className="w-32 px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-right font-black text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>
              </section>

              {/* Time per submission */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="p-2.5 bg-slate-50 rounded-xl mr-4 border border-slate-100">
                    <Clock className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Session Duration</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Estimated mins per person</p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        value={timePerSubmission}
                        onChange={(e) => setTimePerSubmission(Math.max(1, Number(e.target.value)))}
                        className="w-32 px-5 pr-14 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-right font-black text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none transition-all shadow-inner"
                      />
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] font-black uppercase tracking-widest">min</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className="animate-in zoom-in-95 fade-in duration-500 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 border-dashed">
              {!isSubmitted ? (
                <form onSubmit={handleCustomSubmit} className="space-y-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Customized Research Needs</h3>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Have unique demographics, complex longitudinal requirements, or high-volume enterprise needs? Tell us what you're looking for.
                  </p>
                  <textarea 
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    required
                    rows={4} 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-slate-900 outline-none transition-all text-sm font-medium shadow-sm"
                    placeholder="Describe your study, target group, and specific data goals..."
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                  >
                    <Send className="h-4 w-4 mr-2" /> Raise Custom Query
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center animate-in fade-in duration-700">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Query Received</h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto">
                    Our specialized research team will contact you shortly to finalize your custom protocol.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Summary Side Card */}
        <div className="flex flex-col">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 flex-grow flex flex-col justify-between shadow-sm">
            {orgType !== 'Custom' ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Participant Pool</span>
                    <span className="text-sm text-slate-900 font-black">{currency}{results.reward.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform Node</span>
                    <span className="text-sm text-slate-900 font-black">
                      {currency}{results.fees.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      <span className="ml-1 text-[8px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">FLAT</span>
                    </span>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-200">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Estimated Authorization</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">{currency}{Math.floor(results.total).toLocaleString()}</span>
                    <span className="text-sm font-bold text-slate-400">.{(results.total % 1).toFixed(2).split('.')[1]}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                    Initialize Study
                  </button>
                  <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-widest leading-relaxed">
                    *Final pricing confirmed after protocol review.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-grow flex flex-col justify-center items-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 flex items-center justify-center shadow-sm">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Tailored Solutions</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight mt-2 leading-relaxed">
                    Enterprise features & custom volume discounts available upon inquiry.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Currency</span>
              <div className="flex bg-white rounded-full p-1 border border-slate-100 shadow-sm">
                <button 
                  onClick={() => setCurrency('₹')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${currency === '₹' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  INR
                </button>
                <button 
                  onClick={() => setCurrency('$')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${currency === '$' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  USD
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-2 grayscale opacity-30">
            <Info className="h-3 w-3" />
            <span className="text-[9px] uppercase font-black tracking-[0.2em]">Institutional contracts supported</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
