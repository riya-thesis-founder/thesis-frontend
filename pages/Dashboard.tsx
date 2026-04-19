
import React, { useState } from 'react';
import { User, UserRole, ResearchProject } from '../types';
import { Plus, LayoutGrid, Clock, CheckCircle, ExternalLink, Calendar, Phone } from 'lucide-react';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'PROJECTS' | 'NEW'>('PROJECTS');
  
  // Mock projects
  const [projects] = useState<ResearchProject[]>([
    {
      id: 'p1',
      researcherId: '1',
      domain: 'Behavioral Psychology',
      topic: 'Impact of social media on Gen-Z focus spans',
      sampleSize: 200,
      objective: 'To understand longitudinal shifts in attention during study sessions.',
      googleFormUrl: 'https://forms.google.com/xyz',
      duration: '14 days',
      status: 'ACTIVE',
      createdAt: '2023-11-20'
    }
  ]);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, {user.name}</h1>
            <p className="text-slate-500 text-sm">Manage your active research and create new studies.</p>
          </div>
          <button 
            onClick={() => setActiveTab('NEW')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" /> New Project
          </button>
        </header>

        <div className="flex border-b border-slate-200 mb-8 space-x-8">
          <button 
            onClick={() => setActiveTab('PROJECTS')}
            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-all ${activeTab === 'PROJECTS' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            My Projects
          </button>
          <button 
            onClick={() => setActiveTab('NEW')}
            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-all ${activeTab === 'NEW' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Submit New Study
          </button>
        </div>

        {activeTab === 'PROJECTS' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">{project.domain}</span>
                    <span className="flex items-center text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      <Clock className="h-3 w-3 mr-1" /> {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{project.topic}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{project.objective}</p>
                  
                  <div className="flex items-center justify-between py-4 border-y border-slate-50">
                    <div className="text-center">
                      <span className="block text-xs text-slate-400 font-semibold uppercase">Sample Size</span>
                      <span className="text-sm font-bold text-slate-700">{project.sampleSize}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xs text-slate-400 font-semibold uppercase">Duration</span>
                      <span className="text-sm font-bold text-slate-700">{project.duration}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xs text-slate-400 font-semibold uppercase">Created</span>
                      <span className="text-sm font-bold text-slate-700">{project.createdAt}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 flex items-center justify-between">
                  <a href={project.googleFormUrl} target="_blank" className="text-xs font-semibold text-blue-600 flex items-center hover:underline">
                    View Form <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <button className="text-xs font-semibold text-slate-600 hover:text-slate-900">Manage Responses</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Create New Research Project</h2>
              <p className="text-sm text-slate-500 mb-8">Please provide your study details. Our team will verify and match participants.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Research Domain</label>
                    <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm">
                      <option>Behavioral Psychology</option>
                      <option>Product Market Research</option>
                      <option>Public Health</option>
                      <option>Sociology</option>
                      <option>Economic Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Topic</label>
                    <input type="text" placeholder="e.g. Impact of AI on UX" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Sample Size (Target Participants)</label>
                    <input type="number" placeholder="50" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Timeline (Days)</label>
                    <input type="number" placeholder="14" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Google Form Link</label>
                  <input type="url" placeholder="https://forms.gle/..." className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" />
                  <p className="mt-2 text-[10px] text-slate-400 leading-tight">
                    *Ensure you grant access to our platform email: <strong>contact@thesis.co.in</strong> for automated monitoring.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Objective / Key Questions</label>
                  <textarea rows={4} placeholder="Describe what you want to achieve..." className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"></textarea>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-center">
                  <button type="submit" className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Project Request
                  </button>
                  <button type="button" className="w-full md:w-auto px-6 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" /> Request Call to Finalize
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
