// app/projects/[slug]/page.tsx
import { featuredProjects, recentEvents } from "@/data/archiveData";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailedProjectPage({ params }: PageProps) {
  const { slug } = await params;
  
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const matchingEvent = recentEvents.find((e) => e.slug === `${slug}-hackathon` || e.slug === slug);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 selection:bg-indigo-500 selection:text-white">
      <main className="max-w-4xl mx-auto px-6">
        
        {/* Navigation Action Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/projects" className="text-xs font-bold tracking-widest uppercase text-indigo-400 hover:text-indigo-300 transition flex items-center gap-2">
            &larr; Back to Dashboard
          </Link>
          <span className="text-xs font-mono bg-slate-800 border border-slate-700 text-slate-400 px-3 py-1 rounded-full">
            Status: Live Production
          </span>
        </div>

        {/* Hero Title Section */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="space-y-4">
            <span className="inline-block text-xs font-extrabold tracking-widest text-indigo-400 uppercase bg-indigo-950/80 border border-indigo-800/60 px-3 py-1 rounded-md">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action Row Links */}
          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-slate-800/60">
            {project.pdfLink && (
              <a 
                href={project.pdfLink} 
                download
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-rose-600 text-white px-5 py-3 rounded-xl hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-900/20 transition"
              >
                📄 Download Technical Dossier
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-3 rounded-xl transition"
              >
                Explore Source Repositories
              </a>
            )}
          </div>
        </div>

        {/* Content Layout Partition Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Main Technical Specifications Brief */}
          <div className="md:col-span-2 space-y-8">
            
            {/* 1. Dynamic Video Demonstration Player Layer */}
            {project.videoLink && (
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2 tracking-tight">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                  Execution Walkthrough & Video Demonstration
                </h3>
                <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                  <video 
                    src={project.videoLink} 
                    controls 
                    className="w-full h-full object-contain"
                    preload="metadata"
                  />
                </div>
              </div>
            )}

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl space-y-6">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2 tracking-tight">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                Technical Implementation Deep Dive
              </h3>
              <div className="text-slate-300 text-sm md:text-base space-y-4 leading-relaxed font-normal">
                <p className="whitespace-pre-line">{project.detailedDocumentation || project.description}</p>
              </div>
            </div>

            {/* Photo Gallery Panel if applicable */}
            {matchingEvent && matchingEvent.images && matchingEvent.images.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2 tracking-tight">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Captured Exhibition Milestones ({matchingEvent.date})
                </h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {matchingEvent.images.map((imgSrc, index) => (
                    <div 
                      key={index} 
                      className="group relative h-52 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`Exhibition Snapshot ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Utility Stack */}
          <div className="space-y-6">
            <div className="bg-slate-950/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Target Framework Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono bg-slate-800 text-indigo-300 border border-slate-700 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.highlightMetric && (
              <div className="bg-gradient-to-br from-indigo-950 to-slate-950 border border-indigo-900/60 p-6 rounded-2xl shadow-inner">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
                  Performance Metric Key
                </h4>
                <div className="text-2xl font-black text-white tracking-tight">
                  {project.highlightMetric}
                </div>
              </div>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}