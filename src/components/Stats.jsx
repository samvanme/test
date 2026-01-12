export default function Stats() {
  const stats = [
    {
      value: '$680K',
      label: 'Revenue Influence',
    },
    {
      value: '45 Days',
      label: 'Measured in CRM',
    },
    {
      value: '$300K',
      label: 'Recovered Revenue',
    },
    {
      value: '98%',
      label: 'Call Answer Rate',
    },
  ];

  return (
    <section id="results" className="section-brutal overflow-hidden relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      <div className="container-brutal relative z-10">
        {/* Vertical accent line - hidden on mobile */}
        <div className="hidden sm:block absolute left-6 lg:left-12 top-0 bottom-0 w-1 bg-brand-blue"></div>

        {/* Section Header - asymmetric, left-aligned */}
        <div className="mb-10 sm:mb-16 max-w-2xl sm:pl-6 lg:pl-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-mono text-slate-600 text-xs sm:text-sm">04</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-3 sm:mb-4">
            Results Tied to Revenue
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            Real metrics from production AI systems.
          </p>
        </div>

        {/* Stats Grid - asymmetric layout */}
        <div className="sm:pl-6 lg:pl-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative bg-slate-900/50 border-2 border-white/10 p-4 sm:p-6">
              {/* Left accent - first stat gets blue */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${index === 0 ? 'bg-brand-blue' : 'bg-white/30'}`}></div>
              <div className="pl-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-mono text-slate-500 text-xs sm:text-sm uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 bg-slate-900 border-2 border-white/20">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Quote */}
              <div className="flex-1">
                <svg className="w-10 h-10 text-brand-blue mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  "We installed the AI system inside our CRM and saw $680K in attributed revenue within 45 days. Full visibility, full control, measurable impact."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 border-2 border-white/20 flex items-center justify-center text-white font-bold text-lg">
                    SV
                  </div>
                  <div>
                    <div className="font-bold text-white">Slava Vidomanets</div>
                    <div className="text-sm text-slate-400">Founder, StrataBlue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
