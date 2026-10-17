import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

const LightFlare = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 2.5] }}
    transition={{ duration: 3, ease: "easeOut" }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-[45] pointer-events-none"
  >
    <div className="absolute inset-0 bg-white rounded-full blur-[120px] opacity-30" />
    <div className="absolute inset-0 bg-yellow-100 rounded-full blur-[60px] opacity-50" />
  </motion.div>
);

const DustParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="dust-particle"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 50 + "px"],
            x: [null, (Math.random() - 0.5) * 50 + "px"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
          }}
        />
      ))}
    </div>
  );
};

const Invitation = ({ onToggleDetails, showDetails }: { onToggleDetails: (e?: React.MouseEvent<HTMLElement>) => void; showDetails: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center w-full h-full"
    >
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="animate-float relative"
      >
        {/* Card Container */}
        <div className="bg-[#fffdfa] backdrop-blur-sm p-12 md:p-16 rounded-sm shadow-2xl border-[1px] border-[#bf953f] max-w-lg w-full relative overflow-hidden">
          {/* Double Border Frame */}
          <div className="absolute inset-4 border border-[#bf953f]/40 pointer-events-none" />
          <div className="absolute inset-2 border-[3px] border-double border-[#bf953f]/60 pointer-events-none" />

          {/* Corner Ornaments */}
          <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#bf953f]">
              <path d="M0 0 L100 0 L100 5 L5 5 L5 100 L0 100 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 rotate-180 pointer-events-none opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#bf953f]">
              <path d="M0 0 L100 0 L100 5 L5 5 L5 100 L0 100 Z" />
            </svg>
          </div>

          {/* Subtle gold shimmer overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-tr from-transparent via-[#fcf6ba] to-transparent -translate-x-full animate-[shine_8s_infinite]" />

          <div className="space-y-8 font-amiri text-[#2c2c2c] relative">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl md:text-3xl font-aref gold-text"
            >
              دعوة زفاف
            </motion.h2>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1.2 }}
                className="text-4xl md:text-6xl font-aref text-[#b38728] leading-tight"
              >
                <span className="gold-text block mb-2">R</span>
                <span className="text-3xl font-amiri block text-[#a67c2e]">&</span>
                <span className="gold-text block mt-2">L</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-reem leading-relaxed">مع بداية قصة حبٍ تحمل الفرح والحنان، نتشرف بدعوتكم لحضور يوم زفافنا</p>
              <div className="flex items-center justify-center gap-6">
                <div className="h-[1px] w-12 bg-[#bf953f]/40" />
                <div className="flex flex-col items-center">
                  <span className="text-sm uppercase tracking-[0.3em] text-[#bf953f] mb-1">19/11</span>
                  <p className="text-5xl md:text-6xl font-aref gold-text font-bold">19</p>
                  <span className="text-sm uppercase tracking-[0.3em] text-[#bf953f] mt-1">NOV</span>
                </div>
                <div className="h-[1px] w-12 bg-[#bf953f]/40" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="pt-8"
            >
              <button
                onClick={onToggleDetails}
                className="inline-block p-4 border border-[#bf953f] rounded-full hover:bg-[#bf953f]/10 transition-colors cursor-pointer group"
              >
                <span className="text-sm tracking-[0.2em] font-reem uppercase group-hover:tracking-[0.3em] transition-all">
                  {showDetails ? 'إغلاق التفاصيل' : 'عرض التفاصيل'}
                </span>
              </button>
            </motion.div>

          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#bf953f]" />
        <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#bf953f]" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#bf953f]" />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#bf953f]" />
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (!showInvitation) {
      console.log("Opening doors...");
      setIsOpen(true);
      setShowInvitation(true);
      if (!isAudioStarted) {
        startAudio();
      }

      window.setTimeout(() => {
        setIsOpen(false);
      }, 2400);
    }
  };

  const handleDetailsToggle = (e?: React.MouseEvent<HTMLElement>) => {
    if (e) {
      e.stopPropagation();
    }
    setShowDetails(prev => !prev);
  };

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
      setIsAudioStarted(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden select-none touch-none">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-24 h-24 border-2 border-[#bf953f] rounded-full flex items-center justify-center"
            >
              <div className="w-16 h-16 border-t-2 border-[#bf953f] rounded-full animate-spin" />
            </motion.div>
            <p className="mt-8 text-[#bf953f] font-reem tracking-[0.3em] animate-pulse">PREPARING EXPERIENCE</p>
            <p className="mt-2 text-[#bf953f]/60 text-xs font-reem tracking-widest uppercase">Best experienced with sound</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        src="/wedding-song.mp3"
      />

      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out"
        style={{
          backgroundImage: `url('/interior.jpg')`,
          transform: showInvitation ? 'scale(1.05)' : 'scale(1.15)',
          filter: showInvitation ? 'blur(0px) brightness(0.8)' : 'blur(20px) brightness(0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <DustParticles />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none z-[60] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content Layer */}
      <AnimatePresence>
        {showInvitation && (
          <>
            <LightFlare />
            <Invitation onToggleDetails={handleDetailsToggle} showDetails={showDetails} />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showInvitation && showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl rounded-[2rem] border border-[#bf953f] bg-[#fffdfa] p-8 shadow-2xl text-right"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-3xl font-aref gold-text">تفاصيل الدعوة</h2>
                <button
                  onClick={handleDetailsToggle}
                  className="rounded-full border border-[#bf953f] px-4 py-2 text-sm font-reem text-[#bf953f] hover:bg-[#bf953f]/10 transition-colors"
                >
                  إغلاق
                </button>
              </div>

              <details open className="mt-6 rounded-3xl border border-[#bf953f]/50 bg-white/90 p-6 shadow-inner">
                <summary className="cursor-pointer text-lg font-reem text-[#bf953f]">معلومات الحفل</summary>
                <div className="mt-5 space-y-4 text-[#2c2c2c]">
                  <p className="font-amiri text-lg"><span className="font-bold">المكان:</span> دار ضباط النقل - كورنيش النيل - أمام قصر محمد علي - شبرا</p>
                  <p className="font-amiri text-lg"><span className="font-bold">القاعة:</span> قاعة اللوتس</p>
                  <p className="font-amiri text-lg"><span className="font-bold">التاريخ:</span> يوم 19/11</p>
                  <p className="font-amiri text-lg"><span className="font-bold">الوقت:</span> من 7 مساءً إلى 11 مساءً</p>
                </div>
              </details>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gate Scene Overlay */}
      {!showInvitation && (
        <motion.div
          onTap={handleOpen}
          onClick={handleOpen}
          className={`absolute inset-0 z-[70] cursor-pointer ${isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}
        >
          <div className="relative w-full h-full flex perspective-1000">

            {/* Left Door */}
            <motion.div
              initial={false}
              animate={{ rotateY: isOpen ? -110 : 0 }}
              transition={{ duration: 4, ease: [0.4, 0, 0.2, 1] }}
              className="door-left relative w-1/2 h-full cursor-pointer preserve-3d"
            >
              <div
                className="absolute inset-0 bg-cover bg-right border-r border-[#bf953f]/50 shadow-2xl"
                style={{ backgroundImage: `url('/gate.jpg')` }}
              >
                <div className="absolute inset-0 bg-black/30" />
                {/* Left Handle Ornament */}
                <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-32 flex items-center justify-end z-10">
                  <div className="w-1 h-24 bg-[#bf953f]/80 rounded-full" />
                  <div className="w-4 h-4 bg-[#bf953f] rounded-full absolute right-[-2px] shadow-lg" />
                </div>
              </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
              initial={false}
              animate={{ rotateY: isOpen ? 110 : 0 }}
              transition={{ duration: 4, ease: [0.4, 0, 0.2, 1] }}
              className="door-right relative w-1/2 h-full cursor-pointer preserve-3d"
            >
              <div
                className="absolute inset-0 bg-cover bg-left border-l border-[#bf953f]/50 shadow-2xl"
                style={{ backgroundImage: `url('/gate.jpg')` }}
              >
                <div className="absolute inset-0 bg-black/30" />
                {/* Right Handle Ornament */}
                <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-32 flex items-center justify-start z-10">
                  <div className="w-1 h-24 bg-[#bf953f]/80 rounded-full" />
                  <div className="w-4 h-4 bg-[#bf953f] rounded-full absolute left-[-2px] shadow-lg" />
                </div>
              </div>
            </motion.div>

            {/* Tap to Open Hint */}
            {!isOpen && !showInvitation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="p-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                  <p className="text-white font-reem text-lg tracking-[0.4em] uppercase mb-4">Tap to Enter</p>
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Play className="text-[#bf953f] fill-[#bf953f] w-8 h-8" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Audio Toggle */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[100] p-3 rounded-full bg-black/50 border border-[#bf953f]/50 text-[#bf953f] backdrop-blur-md hover:bg-[#bf953f]/20 transition-all"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Glowing Light Transition */}
      <AnimatePresence>
        {showInvitation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, times: [0, 0.4, 1] }}
            className="absolute inset-0 z-40 bg-white pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
