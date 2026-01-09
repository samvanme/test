export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#105665] to-[#00ABE2] bg-clip-text text-transparent">
              StrataBlue AI
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#industries" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Industries
            </a>
            <a href="#use-cases" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Use Cases
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              How It Works
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+13179612546"
              className="hidden sm:flex items-center gap-2 text-[#00ABE2] font-semibold hover:text-[#105665] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Try AI Agent
            </a>
            <a
              href="#book"
              className="px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
