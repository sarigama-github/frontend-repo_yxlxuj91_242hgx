import { useState } from 'react'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar activeTab={activeTab} onChange={setActiveTab} />

      <Sections activeTab={activeTab} />

      <footer className="border-t border-slate-200 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} BrightSpark Electrical. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button className={`hover:text-slate-900 ${activeTab==='home' && 'text-slate-900 font-medium'}`} onClick={()=>setActiveTab('home')}>Home</button>
            <button className={`hover:text-slate-900 ${activeTab==='services' && 'text-slate-900 font-medium'}`} onClick={()=>setActiveTab('services')}>Services</button>
            <button className={`hover:text-slate-900 ${activeTab==='projects' && 'text-slate-900 font-medium'}`} onClick={()=>setActiveTab('projects')}>Projects</button>
            <button className={`hover:text-slate-900 ${activeTab==='about' && 'text-slate-900 font-medium'}`} onClick={()=>setActiveTab('about')}>About</button>
            <button className={`hover:text-slate-900 ${activeTab==='contact' && 'text-slate-900 font-medium'}`} onClick={()=>setActiveTab('contact')}>Contact</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
