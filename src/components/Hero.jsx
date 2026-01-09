export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="hero-beams"></div>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ABE2]/10 border border-[#00ABE2]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
            <span className="text-sm font-semibold text-[#00ABE2] uppercase tracking-wider">
              AI Voice Agents Online 24/7
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Never Miss Another Call.
            <br />
            <span className="bg-gradient-to-r from-[#105665] to-[#00ABE2] bg-clip-text text-transparent">
              AI Answers Instantly.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Our AI voice agents handle sales calls, recruiting interviews, and customer service 24/7.
            Professional conversations that convert, without the wait.
          </p>

          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input
              type="tel"
              className="flex-1 px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[#00ABE2] focus:ring-2 focus:ring-[#00ABE2]/20 outline-none transition-all text-lg bg-white"
              placeholder="Enter your phone number"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all whitespace-nowrap shadow-lg shadow-slate-900/20 hover:shadow-xl"
            >
              Call Me Now
            </button>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13179612546"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#105665] to-[#00ABE2] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Try AI Agent Now
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-slate-900 font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll to explore</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
