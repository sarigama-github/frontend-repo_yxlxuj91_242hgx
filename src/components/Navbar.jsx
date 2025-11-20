import { Menu, Phone, Plug, Wrench, Building2, Info, Mail } from "lucide-react";
import { useState } from "react";

const tabs = [
  { key: "home", label: "Home", icon: Plug },
  { key: "services", label: "Services", icon: Wrench },
  { key: "projects", label: "Projects", icon: Building2 },
  { key: "about", label: "About", icon: Info },
  { key: "contact", label: "Contact", icon: Mail },
];

export default function Navbar({ activeTab, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-inner">
              <Plug className="text-white" size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">BrightSpark Electrical</p>
              <p className="text-xs text-slate-500">Installations • Maintenance • Safety</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onChange(key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === key
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
            <a
              href="tel:+11234567890"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700"
            >
              <Phone size={16} /> Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid grid-cols-2 gap-2">
              {tabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    onChange(key);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-3 rounded-lg text-sm border ${
                    activeTab === key
                      ? "bg-blue-600 text-white border-blue-600"
                      : "text-slate-700 hover:bg-slate-50 border-slate-200"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
              <a
                href="tel:+11234567890"
                className="col-span-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
