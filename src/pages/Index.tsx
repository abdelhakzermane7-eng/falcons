import { useEffect, useRef } from 'react';
import GhostCursor from '@/components/GhostCursor';
import BubbleMenu from '@/components/BubbleMenu';

const menuItems = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#22c55e', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#16a34a', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#15803d', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#blog',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#166534', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#14532d', textColor: '#ffffff' }
  }
];

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Browser blocked autoplay, will try again on interaction
        });
      }
    };

    // Try to play immediately
    playAudio();

    // Also try on first user interaction
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
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/audio/thunder.mp3"
        loop
        preload="auto"
      />

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
    </div>
  );
};

export default Index;
