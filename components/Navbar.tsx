// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Digital HQ Link */}
        <Link 
          href="/" 
          className="text-base font-extrabold tracking-tight text-slate-900 hover:text-indigo-600 transition flex items-center gap-2"
        >
          📁 <span className="hidden sm:inline">Shahporan Priyom |</span> Personal Archive
        </Link>

        {/* Navigation Tabs - Upped Font Sizes & Padding spacing for better look */}
        <div className="flex items-center gap-6 md:gap-8 text-sm sm:text-base font-semibold text-slate-700">
          <Link href="/projects" className="hover:text-indigo-600 transition py-2 border-b-2 border-transparent hover:border-indigo-600">
            Projects
          </Link>
          <Link href="/timeline" className="hover:text-indigo-600 transition py-2 border-b-2 border-transparent hover:border-indigo-600">
            Timeline
          </Link>
          <Link href="/achievements" className="hover:text-indigo-600 transition py-2 border-b-2 border-transparent hover:border-indigo-600">
            Achievements
          </Link>
        </div>

      </div>
    </nav>
  );
}