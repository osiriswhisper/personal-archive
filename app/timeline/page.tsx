// app/timeline/page.tsx
import { recentEvents } from "@/data/archiveData";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <main className="max-w-3xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-200 pb-8 mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            The Chronicle
          </h1>
          <p className="text-slate-600">
            A real-time vertical record documenting my key academic achievements, 
            hackathons, milestones, and ongoing projects.
          </p>
        </div>

        {/* Chronological Vertical Line */}
        <div className="relative border-l-2 border-slate-200 pl-8 ml-4 space-y-12">
          {recentEvents.map((event) => (
            <div key={event.id} className="relative group">
              
              {/* Timeline Indicator Ring */}
              <div className="absolute -left-[41px] top-1.5 bg-white w-4 h-4 rounded-full border-4 border-indigo-600 group-hover:bg-indigo-600 transition duration-300 ring-4 ring-slate-50" />
              
              {/* Content Card */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
                    {event.date}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    {event.category}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}