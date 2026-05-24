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
          <p className="text-slate-600 max-w-2xl text-sm md:text-base">
            A verified archive of hackathon participations, academic awards, 
            and major institutional milestones.
          </p>
        </div>

        {/* Achievements List Stack */}
        <div className="grid gap-6">
          {academicAchievements.map((item) => (
            <div 
              key={item.id} 
              className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                {/* Optional Certificate Snapshot Thumbnail */}
                {item.image && (
                  <div className="w-24 h-24 rounded-xl border border-slate-100 bg-slate-50 overflow-hidden shrink-0 hidden sm:block shadow-inner">
                    <img src={item.image} alt="Proof" className="w-full h-full object-cover" />
                  </div>
                )}
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg">🏆</span>
                    <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md sm:hidden">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-semibold">{item.issuer}</p>
                  <p className="text-sm text-slate-600 max-w-2xl pt-1 leading-relaxed">{item.description}</p>
                  
                  {/* Action Link for Verification */}
                  {item.verificationUrl && (
                    <div className="pt-3">
                      <a 
                        href={item.verificationUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50/50 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition"
                      >
                        🛡️ Verify Credential &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Desktop Date Stamp */}
              <div className="shrink-0 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full hidden sm:block self-center">
                {item.date}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}