"use client"; 
import Image from "next/image";

export default function Home() {
  const musicLinks = [
    { name: "SOUNDCLOUD", url: "https://soundcloud.com/4bden-music", color: "hover:bg-red-600" },
    { name: "SPOTIFY", url: "https://open.spotify.com/artist/5SJiExoFggHiGeyV0I1UCa", color: "hover:bg-red-600" },
    { name: "NETEASEMUSIC", url: "https://music.163.com/#/artist?id=55455835", color: "hover:bg-red-600" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/4bdenforbidden/", color: "hover:bg-red-600" },
  ];

  const logs = [
    { date: "2026.02.10", content: "《Embers Fall》 80% complete" },
    { date: "2025.12.19", content: "《KBT》Released on all platforms" },
    { date: "Before", content: "music uploaded on NetEaseMusic only"},
  ];

  return (
    <main className="min-h-screen bg-black text-red-600 font-mono selection:bg-red-600 selection:text-white relative lofi-screen overflow-hidden">
      {/* 视觉干扰层 */}
      <div className="fixed inset-0 pointer-events-none z-40 animate-flicker bg-red-600/5 opacity-10"></div>

      {/* 顶部红色发光装饰条 */}
      <div className="h-1 w-full bg-red-600 shadow-[0_0_20px_rgba(255,0,0,0.9)] relative z-50"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
      <header className="mb-16 md:mb-24">
          {/* 容器：手机端 vertical (col)，电脑端 horizontal (row) */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 group">
            
            {/* 标题：手机端缩小字号并居中，电脑端保持原样 */}
            <div className="relative shrink-0 text-center md:text-left">
              <h1 className="text-[15vw] md:text-[8rem] font-black italic tracking-tighter uppercase leading-none whitespace-nowrap glitch-text">
                4BDEN <span className="text-white">PROD.</span>
              </h1>
              {/* 红色背景重影 */}
              <div className="absolute top-0 left-0 -z-10 text-red-900/10 text-[15vw] md:text-[8rem] font-black italic select-none blur-sm group-hover:translate-x-3 transition-transform whitespace-nowrap w-full">
                4BDEN
              </div>
            </div>

            {/* Logo 区域：自适应大小，手机端居中 */}
            <div className="relative shrink-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
              <Image 
                src="/logo-icon.png"   
                alt="4BDEN Icon"
                fill
                priority
                className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 filter drop-shadow-[0_0_25px_rgba(255,0,0,0.7)]"
              />
            </div>
          </div>
          
          {/* 状态栏：手机端居中对齐 */}
          <div className="mt-10 md:mt-12 flex items-center justify-center md:justify-start gap-4 text-sm tracking-[0.3em] bg-red-950/20 p-2 w-full md:w-fit border border-red-900/30">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-white/60 text-[10px] md:text-sm uppercase italic">
              System: <span className="text-red-600 font-bold">Active</span> | Loc: <span className="text-white">CN_SERVER_01</span>
            </span>
          </div>
        </header>

        {/* Links */}
        <section className="mb-24">
          <h2 className="text-xs text-white/30 mb-6 tracking-[0.5em] uppercase border-b border-white/10 pb-2">Connect_Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {musicLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`border border-red-600/20 p-6 flex justify-between items-center transition-all duration-300 group ${link.color} hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]`}
              >
                <span className="text-xl font-bold tracking-widest uppercase italic">{link.name}</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* Logs */}
        <section>
          <h2 className="text-xs text-white/30 mb-6 tracking-[0.5em] uppercase border-b border-white/10 pb-2">Latest_Logs</h2>
          <div className="space-y-4 text-gray-400">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className="group p-4 bg-white/5 border-l-2 border-transparent hover:border-red-600 hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-white/20 text-xs font-mono">{log.date}</span>
                  <span className="group-hover:text-red-400 transition-colors italic text-sm font-mono">
                    {">"} {log.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-white/5 text-[10px] text-white/20 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <p>© 2026 4BDEN_MUSIC_CORE // BUILT_BY_CODE</p>
          <div className="bg-red-600/10 px-3 py-1 border border-red-600/20 flex gap-4">
            <span className="text-red-600 animate-pulse">Session_Active</span>
            <span className="text-white/40">0xRE0_CRT</span>
          </div>
        </footer>
      </div>
    </main>
  );
}