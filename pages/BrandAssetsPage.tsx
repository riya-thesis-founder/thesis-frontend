
import React, { useState } from 'react';
import { Copy, Check, Download, BookOpen, Microscope, FileStack } from 'lucide-react';

const BrandAssetsPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const assets = [
    {
      id: 'stack',
      name: 'Primary: The Research Stack',
      description: 'The preferred identity representing categorized datasets and organized research files.',
      icon: <FileStack className="h-16 w-16 text-white" />,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" fill="#0f172a" stroke="none"/>
  <path d="M21 7h-3a2 2 0 0 1-2-2V2" stroke="white"/>
  <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5V6c0-.8.7-1.5 1.5-1.5H18Z" stroke="white"/>
  <path d="M7 14v5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5V14" stroke="white"/>
  <path d="M3 9v5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5V9" stroke="white"/>
</svg>`
    },
    {
      id: 'book',
      name: 'Secondary: The Scholar Book',
      description: 'An alternative identity representing published research papers and academic heritage.',
      icon: <BookOpen className="h-16 w-16 text-white" />,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" fill="#0f172a" stroke="none"/>
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="white"/>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="white"/>
</svg>`
    },
    {
      id: 'microscope',
      name: 'Legacy: The Research Microscope',
      description: 'The previous identity representing precise data collection and laboratory discovery.',
      icon: <Microscope className="h-16 w-16 text-white" />,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" fill="#0f172a" stroke="none"/>
  <path d="M6 18h8" stroke="white"/>
  <path d="M3 22h18" stroke="white"/>
  <path d="M14 22a7 7 0 1 0 0-14h-1" stroke="white"/>
  <path d="M9 14h2" stroke="white"/>
  <path d="M9 12a2 2 0 1 1-2-2V6h6v4.16" stroke="white"/>
  <path d="m2 6 2 2" stroke="white"/>
  <path d="m5 2-2 2" stroke="white"/>
</svg>`
    }
  ];

  const copyToClipboard = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">
            Identity Repository
          </div>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Brand Assets</h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Access our current and legacy brand marks. These SVG assets are vector-based and can be scaled to any size for high-integrity research documents.
          </p>
        </div>

        <div className="space-y-24">
          {assets.map((asset) => (
            <div key={asset.id} className="grid lg:grid-cols-2 gap-16 items-center border-b border-slate-50 pb-24 last:border-0">
              {/* Preview Card */}
              <div className="bg-slate-50 rounded-[3rem] p-16 flex flex-col items-center justify-center border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
                <div className="w-40 h-40 bg-slate-900 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-slate-300 mb-8 transition-transform group-hover:scale-105 duration-500">
                  {asset.icon}
                </div>
                <div className="text-center">
                  <span className="text-5xl font-bold text-slate-900 tracking-tight font-brand italic">Thesis</span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Ethical Data Infrastructure</p>
                </div>
              </div>

              {/* Asset Info & Actions */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-3">{asset.name}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{asset.description}</p>
                </div>

                <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm relative">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">SVG Source</h4>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-500 uppercase">Vector Format</span>
                  </div>
                  
                  <div className="relative">
                    <pre className="w-full h-32 bg-slate-50 border border-slate-100 rounded-xl p-4 text-[10px] font-mono text-slate-400 overflow-hidden select-all">
                      {asset.svg}
                    </pre>
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <button 
                      onClick={() => copyToClipboard(asset.id, asset.svg)}
                      className="bg-slate-900 text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
                    >
                      {copiedId === asset.id ? (
                        <> <Check className="h-4 w-4 mr-2" /> Copied </>
                      ) : (
                        <> <Copy className="h-4 w-4 mr-2" /> Copy SVG </>
                      )}
                    </button>
                    <button 
                      onClick={() => copyToClipboard(asset.id, asset.svg)}
                      className="bg-white text-slate-900 border border-slate-200 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                    >
                      <Download className="h-4 w-4 mr-2" /> Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Usage Protocol</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-8 font-medium">
            Our brand assets should be used without modification. Maintain sufficient clear space around the logo (equal to the height of the 'T' in Thesis).
          </p>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
            Thesis Branding Guidelines &copy; {new Date().getFullYear()} THESIS ETHICAL DATA INFRASTRUCTURE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandAssetsPage;
