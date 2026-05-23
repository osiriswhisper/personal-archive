// app/projects/[slug]/page.tsx
import { featuredProjects } from "@/data/archiveData";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailedProjectPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find the project that matches the URL slug
  const project = featuredProjects.find((p) => p.slug === slug);

  // If the project doesn't exist, throw a clean 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <main className="max-w-3xl mx-auto px-6 bg-white p-8 border border-slate-200 rounded-2xl shadow-sm">
        <Link href="/projects" className="text-sm font-semibold text-indigo-600 hover:underline">&larr; Back to projects</Link>
        
        <div className="mt-6 space-y-4">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">
            {project.category}
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">{project.title}</h1>
        </div>

        {/* Deep Dive Documentation Section */}
        <div className="mt-8 space-y-6 border-t border-slate-100 pt-6 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-slate-900">Project Documentation</h3>
          <p>{project.detailedDocumentation || project.description}</p>
        </div>

        {/* Resources & PDF Downloads */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-100 pt-6">
          {project.pdfLink && (
            <a 
              href={project.pdfLink} 
              download
              className="inline-flex items-center gap-2 text-sm font-medium bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-100 transition"
            >
              📄 Download Research PDF
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              className="inline-flex items-center gap-2 text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
            >
              Explore Repository Code
            </a>
          )}
        </div>
      </main>
    </div>
  );
}