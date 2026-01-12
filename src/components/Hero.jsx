import { CONTACT } from '../constants/config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Grid overlay - stark brutalist grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10 py-20 lg:py-28">
        {/* Thick vertical accent line */}
        <div className="absolute left-6 lg:left-12 top-20 bottom-20 w-1 bg-brand-blue"></div>

        <div className="max-w-4xl pl-6 lg:pl-8">
          {/* Overline - minimal brutalist */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-overline">Production AI Systems</span>
          </div>

          {/* Headline - maximum impact, brutalist typography */}
          <h1 className="text-display-xl text-white mb-6 leading-[0.85]">
            AI That <span className="text-brand-blue">Works</span><br />
            Inside Your CRM
          </h1>

          {/* Horizontal accent */}
          <div className="w-24 h-1 bg-white/20 mb-8"></div>

          {/* Single strong subheadline */}
          <p className="text-body-lg mb-12 max-w-xl">
            Voice agents for revenue and service operations.
            Integrated with your systems. Measured in your dashboards.
          </p>

          {/* CTA Buttons - brutalist style, left-aligned */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Try AI Agent Now
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all"
            >
              See Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </a>
          </div>

          {/* Trust Line - minimal text */}
          <p className="text-mono text-slate-500">
            CRM Integration · Full Attribution · Governed Systems
          </p>
        </div>
      </div>
    </section>
  );
}
