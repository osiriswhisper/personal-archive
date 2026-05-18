// app/projects/page.tsx
import { featuredProjects } from "@/data/archiveData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <main className="max-w-4xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-200 pb-8 mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Technical Projects
          </h1>
          <p className="text-slate-600 max-w-2xl">
            An expanded look at my engineering builds, machine learning implementations, 
            and structural proofs of concept.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
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
                <h2 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h2>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono bg-slate-100 text-slate-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Explore Source Code &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}