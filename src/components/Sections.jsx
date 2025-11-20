import { CheckCircle, Grid, Shield, Wrench, Plug, Building2, ArrowRight, Mail } from "lucide-react";

export default function Sections({ activeTab }) {
  return (
    <main className="relative">
      {activeTab === "home" && <Home />}
      {activeTab === "services" && <Services />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "about" && <About />}
      {activeTab === "contact" && <Contact />}
    </main>
  );
}

function Container({ children, className = "" }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="pt-10 pb-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200 mb-4">
              <Shield size={14} /> NICEIC Certified • Fully Insured
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Safe, reliable electrical installations for homes and businesses
            </h1>
            <p className="text-slate-600 mb-6">
              From full rewires and consumer unit upgrades to EV chargers and lighting design, we deliver professional workmanship and friendly service.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Get a free quote <ArrowRight size={16} />
              </a>
              <a href="tel:+11234567890" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
                Call 123-456-7890
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Plug, title: "EV Charger Installation" },
                { icon: Wrench, title: "Consumer Unit Upgrades" },
                { icon: Shield, title: "EICR & Safety Testing" },
                { icon: Building2, title: "Commercial Fit-outs" },
              ].map(({ icon: Icon, title }) => (
                <div key={title} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <Icon className="text-blue-600 mb-3" />
                  <p className="font-medium text-slate-900">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Qualified and certified electricians",
            "Transparent pricing and fixed quotes",
            "Clean, courteous and on-time",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white">
              <CheckCircle className="text-emerald-600 mt-0.5" />
              <p className="text-slate-700">{t}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Residential Installations",
      items: [
        "Full/partial rewires",
        "Consumer units (fuse boxes)",
        "Indoor/outdoor lighting",
        "Additional sockets & circuits",
      ],
    },
    {
      title: "Commercial & Industrial",
      items: [
        "Office/shop fit-outs",
        "Three-phase systems",
        "Emergency lighting",
        "Data & network cabling",
      ],
    },
    {
      title: "Testing & Safety",
      items: [
        "EICR inspections",
        "PAT testing",
        "Earthing & bonding",
        "Surge protection",
      ],
    },
    {
      title: "Smart & Sustainable",
      items: [
        "EV charger installation",
        "Smart thermostats",
        "Energy-efficient lighting",
        "Solar tie-ins (AC side)",
      ],
    },
  ];

  return (
    <div className="py-12">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-3">{s.title}</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-600" size={16} /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function Projects() {
  return (
    <div className="py-12">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="p-4">
                <p className="font-medium text-slate-900">Project #{n}</p>
                <p className="text-sm text-slate-600">Consumer unit upgrade and LED lighting refit.</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function About() {
  return (
    <div className="py-12">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About BrightSpark</h2>
            <p className="text-slate-600 mb-4">
              We’re a local team of certified electricians with years of experience delivering safe, reliable and tidy electrical work. Customer satisfaction is at the heart of everything we do.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["NICEIC Approved", "Fully Insured", "Part P Compliant", "5-Star Rated"].map((f) => (
                <div key={f} className="p-4 rounded-lg border border-slate-200 bg-white text-sm text-slate-700">
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Why choose us</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              {["Transparent fixed quotes", "Prompt, tidy and respectful", "High-quality materials", "Safety-first mindset"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-600" size={16} /> {i}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="py-12">
      <Container>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-xl border border-slate-200 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Request a free quote</h2>
            <form className="grid sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              <input className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone or email" />
              <input className="sm:col-span-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Location" />
              <textarea rows={4} className="sm:col-span-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                <Mail size={16} /> Send Request
              </button>
            </form>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-semibold text-slate-900 mb-3">Contact details</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>Phone: 123-456-7890</li>
              <li>Email: hello@brightspark.co</li>
              <li>Hours: Mon–Fri 8am–6pm, Sat 9am–1pm</li>
              <li>Area: City & surrounding regions</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
