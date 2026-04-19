
import React from 'react';
import { Users, FileText, Settings, Shield, AlertCircle, FileStack } from 'lucide-react';

const AdminPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:block">
        <div className="p-8">
          <div className="flex items-center mb-12">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center mr-3">
              <FileStack className="text-white h-5 w-5" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">Admin</span>
          </div>
          <nav className="space-y-2">
            <button className="w-full flex items-center px-4 py-3 bg-slate-900 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-slate-200">
              <LayoutGrid className="h-4 w-4 mr-3" /> Overview
            </button>
            <button className="w-full flex items-center px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all">
              <Users className="h-4 w-4 mr-3" /> User Registry
            </button>
            <button className="w-full flex items-center px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all">
              <FileText className="h-4 w-4 mr-3" /> Data Projects
            </button>
            <button className="w-full flex items-center px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all">
              <Shield className="h-4 w-4 mr-3" /> Trust & Ethics
            </button>
          </nav>
          
          <div className="mt-20 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Network Load</h4>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-slate-900 w-[14%]"></div>
            </div>
            <p className="mt-3 text-[10px] font-bold text-slate-500 uppercase tracking-tight">14% Global Capacity</p>
          </div>
        </div>
      </aside>

      <main className="flex-grow p-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">System Console</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Central Research Monitoring</p>
          </div>
          <div className="flex items-center bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm space-x-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">All Nodes Secure</span>
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-md shadow-emerald-200"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Verified Researchers', value: '842', trend: '+12%', icon: <Users /> },
            { label: 'Active Participants', value: '12,402', trend: '+5%', icon: <Shield /> },
            { label: 'Active Datasets', value: '3,120', trend: '+18%', icon: <FileText /> },
            { label: 'Compliance Queue', value: '42', color: 'text-amber-600', icon: <AlertCircle /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <span className="p-2.5 bg-slate-50 rounded-xl text-slate-400">{stat.icon}</span>
                {stat.trend && <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-tight">{stat.trend}</span>}
              </div>
              <div className={`text-3xl font-black ${stat.color || 'text-slate-900'} tracking-tight`}>{stat.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase mt-2 tracking-[0.1em]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Recent Paper Submissions</h3>
            <button className="text-[10px] font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest transition-colors">Audit All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-400 font-black text-[9px] uppercase tracking-[0.2em] border-b border-slate-50">
                  <th className="px-8 py-5">Originating Institution</th>
                  <th className="px-8 py-5">Domain</th>
                  <th className="px-8 py-5">Topic</th>
                  <th className="px-8 py-5">State</th>
                  <th className="px-8 py-5 text-right">Operations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Dr. Sarah Connor', domain: 'Bio-Medical', topic: 'Cognitive load in high-stress surgical environments', status: 'AUDIT' },
                  { name: 'Abe Lincoln', domain: 'Sociology', topic: 'Political trust in decentralized digital networks', status: 'ACTIVE' },
                  { name: 'Elena Gilbert', domain: 'Psychology', topic: 'Olfactory memory and trauma recall mechanisms', status: 'AUDIT' }
                ].map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="text-xs font-black text-slate-900 uppercase tracking-tight">{p.name}</div>
                    </td>
                    <td className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">{p.domain}</td>
                    <td className="px-8 py-5 text-xs font-medium text-slate-500 max-w-xs truncate">{p.topic}</td>
                    <td className="px-8 py-5">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${p.status === 'AUDIT' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-blue-600 font-black uppercase text-[10px] hover:underline">Approve</button>
                        <button className="text-slate-300 hover:text-slate-900 font-black uppercase text-[10px] transition-colors">Details</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper internal component
const LayoutGrid = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
  </svg>
);

export default AdminPanel;
