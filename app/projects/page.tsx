// app/projects/page.tsx
import { featuredProjects } from "@/data/archiveData";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <main className="max-w-5xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-200 pb-8 mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Technical Projects
          </h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base">
            An expanded look at my engineering builds, machine learning implementations, 
            and structural proofs of concept.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col justify-between bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              {/* Cover Banner Area (Guarantees every card matches height perfectly) */}
              <div className="w-full h-56 bg-slate-950 border-b border-slate-100 relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} Visual Cover`} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  /* Clean, modern tech placeholder icon for projects without photos */
                  <div className="flex flex-col items-center justify-center space-y-2 text-slate-500">
                    <span className="text-4xl">🔬</span>
                    <span className="text-xs font-mono tracking-widest uppercase text-slate-400">
                      Deep Dive Document Enclosed
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    {project.highlightMetric && (
                      <span className="px-2.5 py-1 text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                        {project.highlightMetric}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-slate-100 text-slate-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Link Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-xs font-bold">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 transition flex items-center gap-1 bg-indigo-50/50 hover:bg-indigo-50 px-3 py-1.5 rounded-lg"
                    >
                      Read Solution Docs &rarr;
                    </Link>

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        className="text-slate-500 hover:text-slate-800 transition underline decoration-slate-200 underline-offset-4"
                      >
                        GitHub Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}