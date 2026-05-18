// app/page.tsx
import { skillCategories, featuredProjects } from "@/data/archiveData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. LinkedIn-Style Header / Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-200 pb-12">
          
         {/* Profile Image Wrapper */}
<div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-200 shrink-0">
  <img 
    src="/profile.jpg" 
    alt="My Profile Picture" 
    className="w-full h-full object-cover"
  />
</div>

          {/* Intro Text */}
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Shahporan Priyom
            </h1>
            <p className="text-lg font-medium text-indigo-600">
              Biomedical Engineering Undergrad, Healthcare Researcher , Machine Learning & AI Enthusiast
            </p>
            <p className="max-w-xl text-slate-600 leading-relaxed text-sm md:text-base">
              Welcome to my digital profile. I build systems merging the innovations in Machine Learning and 
              Artificial Intelligence to healthcare for an affordable and sustainable future. Think of this 
              as my unrestricted, self-built professional ledger.
            </p>
            
            {/* Quick Contact Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2 text-xs font-medium">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600">📍 Chittagong, Bangladesh</span>
              <a href="https://github.com/osiriswhisper" target="_blank" className="px-3 py-1 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition">GitHub</a>
              <a href="https://www.kaggle.com/shahporanpriyom" target="_blank" className="px-3 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Kaggle</a>
            </div>
          </div>

        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-16 pb-24">
        
        {/* 2. Skills Hub Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-3">
            Technical Expertise
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-sm text-slate-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Featured Projects Segment */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured Work & Proofs</h2>
            <a href="/projects" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
              View All Builds &rarr;
            </a>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.highlightMetric && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                        {project.highlightMetric}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-slate-100 text-slate-600 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}