"use client"; 
import Image from "next/image";
import knowMyNameCover from "./know-my-name-cover.png";

const knowMyNameUrl = "https://soundcloud.com/4bden_sc/know-my-name-4bden-edit";

export default function Home() {
  const musicLinks = [
    { name: "SOUNDCLOUD", url: "https://soundcloud.com/4bden_sc", color: "hover:bg-red-600" },
    { name: "SPOTIFY", url: "https://open.spotify.com/artist/5SJiExoFggHiGeyV0I1UCa", color: "hover:bg-red-600" },
    { name: "YOUTUBE", url: "https://www.youtube.com/@jiahangwu4656", color: "hover:bg-red-600" },
    { name: "NETEASEMUSIC", url: "https://music.163.com/#/artist?id=55455835", color: "hover:bg-red-600" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/4bdenforbidden/", color: "hover:bg-red-600" },
  ];

  const logs = [
    { date: "2026.11.08", content: "《Know My Name (4BDEN EDIT)》Released on SoundCloud" },
    { date: "2026.02.10", content: "《Embers Fall》 80% complete" },
    { date: "2025.12.19", content: "《KBT》Single released" },
    { date: "Before", content: "music uploaded on NetEaseMusic only"},
  ];

  return (
    <main className="min-h-screen bg-transparent text-red-600 font-mono selection:bg-red-600 selection:text-white relative lofi-screen overflow-hidden">
      
      {/* video background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6) contrast(1.2)' }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* 这里的遮罩是为了确保视频加载失败时，背景依然是黑色的 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>        
      </div>

      
      {/* 视觉干扰层 （flicker）*/}
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

        <section aria-labelledby="releases-title" className="mb-16 md:mb-24">
          <h2 id="releases-title" className="mb-6 border-b border-white/10 pb-2 text-xs uppercase tracking-[0.5em] text-white/60">Releases</h2>
          <article className="grid overflow-hidden border border-red-600/30 bg-black/80 sm:grid-cols-[minmax(0,17rem)_1fr]">
            <Image
              src={knowMyNameCover}
              alt="Know My Name (4BDEN EDIT) cover art"
              sizes="(min-width: 640px) 272px, calc(100vw - 48px)"
              className="aspect-square h-auto w-full object-cover"
            />
            <div className="flex flex-col items-start justify-center p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Latest release · Trap / DJ Edit</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                Know My Name <span className="block text-xl text-red-400 md:text-2xl">(4BDEN EDIT)</span>
              </h3>
              <a href={knowMyNameUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 bg-red-700 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
                Listen on SoundCloud <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
          <article className="mt-4 flex flex-wrap items-center justify-between gap-4 border border-red-600/20 bg-black/80 p-5">
            <h3 className="text-lg font-bold text-white">KBT</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-red-300">
              <a href="https://open.spotify.com/track/0khiVD4Zz8ZYyiZxflHSgJ" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white" aria-label="Listen to KBT on Spotify">Spotify</a>
              <a href="https://soundcloud.com/4bden_sc/kbt" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white" aria-label="Listen to KBT on SoundCloud">SoundCloud</a>
              <a href="https://www.youtube.com/watch?v=k9ukN8LVT2A" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white" aria-label="Listen to KBT on YouTube">YouTube</a>
            </div>
          </article>
        </section>

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
