// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Digital HQ Link */}
        <Link 
          href="/" 
          className="text-sm font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition"
        >
          📁 Personal Archive
        </Link>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/projects" className="hover:text-indigo-600 transition">
            Projects
          </Link>
          <Link href="/timeline" className="hover:text-indigo-600 transition">
            Timeline
          </Link>
          <Link href="/achievements" className="hover:text-indigo-600 transition">
            Achievements
          </Link>
        </div>

      </div>
    </nav>
  );
}