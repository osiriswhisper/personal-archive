// app/achievements/page.tsx
import { academicAchievements } from "@/data/archiveData";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <main className="max-w-4xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-200 pb-8 mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Honors & Achievements
          </h1>
          <p className="text-slate-600 max-w-2xl">
            A verified archive of hackathon participations, academic awards, 
            and major institutional milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6">
          {academicAchievements.map((item) => (
            <div 
              key={item.id} 
              className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                </div>
                <p className="text-sm text-slate-500 font-medium">{item.issuer}</p>
                <p className="text-sm text-slate-600 max-w-2xl pt-1 leading-relaxed">{item.description}</p>
              </div>
              
              <div className="shrink-0 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full self-start sm:self-center">
                {item.date}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}