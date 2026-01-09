export default function VoiceDemo() {
  const agents = [
    {
      name: 'Alex AI',
      voice: 'Professional Male Voice',
      status: 'online',
      duration: '0:32',
    },
    {
      name: 'Sarah AI',
      voice: 'Friendly Female Voice',
      status: 'online',
      duration: '0:28',
    },
    {
      name: 'Jordan AI',
      voice: 'Conversational Voice',
      status: 'online',
      duration: '0:41',
    },
  ];

  return (
    <section id="demo" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="bg-dots"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00ABE2] mb-4 block">
            Hear The Difference
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            AI Voice Agents That Sound Human
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Listen to how our AI agents handle real conversations. Natural, professional, and always on-brand.
          </p>
        </div>

        {/* Voice Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00ABE2] to-[#105665] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#22c55e] border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{agent.name}</h4>
                  <p className="text-sm text-slate-500">{agent.voice}</p>
                </div>
                <div>
                  <span className="flex items-center gap-2 text-xs text-[#22c55e] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>

              {/* Waveform visualization */}
              <div className="h-16 bg-slate-50 rounded-xl flex items-center justify-center gap-1 px-4 mb-4">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#00ABE2] rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      opacity: 0.3 + Math.random() * 0.4,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg hover:scale-105">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <span className="text-sm text-slate-500 font-medium">{agent.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Demo */}
        <div className="text-center mt-12">
          <a
            href="tel:+13179612546"
            className="inline-flex items-center gap-2 text-[#00ABE2] font-semibold hover:gap-3 transition-all"
          >
            Talk to an AI Agent Right Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
