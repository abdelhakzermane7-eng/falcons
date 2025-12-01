import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import GhostCursor from '@/components/GhostCursor';
import BubbleMenu from '@/components/BubbleMenu';
import Lightning from '@/components/Lightning';
import LaserFlow from '@/components/LaserFlow';

import falconImage from '@/assets/falcon.png';
import falconRevealImage from '@/assets/falcon-reveal.png';
import falconTeamImage from '@/assets/falcon-team.png';

const menuItems = [
  {
    label: 'البداية',
    href: '/',
    ariaLabel: 'البداية',
    rotation: -8,
    hoverStyles: { bgColor: '#22c55e', textColor: '#ffffff' }
  },
  {
    label: 'FalconCraftX',
    href: '#about',
    ariaLabel: 'FalconCraftX',
    rotation: 8,
    hoverStyles: { bgColor: '#16a34a', textColor: '#ffffff' }
  },
  {
    label: 'Falkano',
    href: '#projects',
    ariaLabel: 'Falkano',
    rotation: 8,
    hoverStyles: { bgColor: '#15803d', textColor: '#ffffff' }
  },
  {
    label: 'Ai',
    href: '#blog',
    ariaLabel: 'Ai',
    rotation: 8,
    hoverStyles: { bgColor: '#166534', textColor: '#ffffff' }
  },
  {
    label: 'الذكريات',
    href: '/memories',
    ariaLabel: 'الذكريات',
    rotation: -8,
    hoverStyles: { bgColor: '#14532d', textColor: '#ffffff' }
  }
];

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const revealImgRef = useRef<HTMLImageElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Browser blocked
        });
      }
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Browser blocked autoplay
        });
      }
    };

    // Try on first user interaction
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('mousemove', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className="relative w-full bg-background">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/audio/thunder.mp3"
        loop
        preload="auto"
      />

      {/* Ghost Cursor Effect - covers entire page */}
      <GhostCursor
        color="#4ade80"
        brightness={1.2}
        edgeIntensity={0}
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.15}
        bloomRadius={1.2}
        bloomThreshold={0.02}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
        zIndex={20}
        style={{ position: 'fixed', inset: 0 }}
      />
      
      {/* Bubble Menu - on top of everything */}
      <BubbleMenu
        logo={<span className="text-glow font-bold text-xl tracking-wider">FALCON</span>}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="hsl(var(--card))"
        menuContentColor="hsl(var(--glow))"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      {/* Audio Control Button - center top */}
      <button
        onClick={toggleAudio}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-[1001] w-12 h-12 md:w-14 md:h-14 rounded-full bg-card shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
        aria-label={isPlaying ? 'إيقاف الصوت' : 'تشغيل الصوت'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-glow" />
        ) : (
          <VolumeX className="w-6 h-6 text-glow" />
        )}
      </button>

      {/* Hero Section - First screen with video background */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/40" style={{ zIndex: 1 }} />
      </section>

      {/* Lightning Section - appears when scrolling down */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black" style={{ zIndex: 15 }}>
        {/* Lightning Effect - Dark Green */}
        <div className="absolute inset-0">
          <Lightning
            hue={140}
            xOffset={0.3}
            speed={0.8}
            intensity={1.2}
            size={1}
          />
        </div>
        
        {/* Falcon Image - Left side */}
        <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 z-10">
          <img 
            src={falconImage} 
            alt="Falcon" 
            className="w-64 h-auto md:w-96 lg:w-[500px] drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          />
        </div>

        {/* Text Content - Right side */}
        <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-[1010] max-w-md lg:max-w-lg text-right" dir="rtl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
            فريق فالكون الرياضي
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            نحن نصنع روح التحدي و نبني فريقا يجمع <span className="text-glow font-bold">المهارة</span> . <span className="text-glow font-bold">الشغف</span> . <span className="text-glow font-bold">الطموح</span> . <span className="text-glow font-bold">القوة</span>
          </p>
        </div>
      </section>

      {/* LaserFlow Section - Bottom section */}
      <section 
        className="relative min-h-screen w-full overflow-hidden"
        style={{ zIndex: 25, backgroundColor: '#030a02' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        {/* Overlay to block GhostCursor in this section */}
        <div className="absolute inset-0" style={{ zIndex: 21, backgroundColor: '#030a02' }} />
        
        {/* LaserFlow Effect - Dark Green */}
        <div className="absolute inset-0" style={{ zIndex: 22 }}>
          <LaserFlow
            horizontalBeamOffset={0.1}
            verticalBeamOffset={0.0}
            color="#166534"
            flowSpeed={0.35}
            wispDensity={1.2}
            fogIntensity={0.5}
          />
        </div>

        {/* Team Falcons Image - Bottom */}
        <img 
          src={falconTeamImage} 
          alt="Team Falcons" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl object-contain drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]"
          style={{ zIndex: 30 }}
        />

        {/* Falcon Image with Interactive Reveal Effect */}
        <img
          ref={revealImgRef}
          src={falconRevealImage}
          alt="Falcon Reveal"
          className="absolute w-full pointer-events-none"
          style={{
            top: '-50%',
            zIndex: 23,
            mixBlendMode: 'lighten',
            opacity: 0.4,
            // @ts-ignore
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 80px, rgba(255,255,255,0.6) 160px, rgba(255,255,255,0.25) 240px, rgba(255,255,255,0) 320px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 80px, rgba(255,255,255,0.6) 160px, rgba(255,255,255,0.25) 240px, rgba(255,255,255,0) 320px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          } as React.CSSProperties}
        />
      </section>
    </div>
  );
};

export default Index;
