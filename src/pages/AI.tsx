import { useRef, useState, useEffect } from 'react';
import BubbleMenu from '@/components/BubbleMenu';
import Orb from '@/components/Orb';

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
    href: '/falconcraftx',
    ariaLabel: 'FalconCraftX',
    rotation: 8,
    hoverStyles: { bgColor: '#16a34a', textColor: '#ffffff' }
  },
  {
    label: 'Falkano',
    href: '#',
    ariaLabel: 'Falkano',
    rotation: 8,
    hoverStyles: { bgColor: '#15803d', textColor: '#ffffff' }
  },
  {
    label: 'Ai',
    href: '/ai',
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

const AI = () => {
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/audio/thunder.mp3');
    audioRef.current.loop = true;
    
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
      }
      document.removeEventListener('click', playAudio);
      document.removeEventListener('mousemove', playAudio);
    };
    
    document.addEventListener('click', playAudio);
    document.addEventListener('mousemove', playAudio);
    
    setShowContent(true);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', playAudio);
      document.removeEventListener('mousemove', playAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: '#030a02' }}>
      {/* Sound Control Button */}
      <button
        onClick={toggleMute}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[1002] w-10 h-10 rounded-full bg-green-900/30 border border-green-700/50 flex items-center justify-center text-white hover:bg-green-800/40 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>

      {/* BubbleMenu */}
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

      {/* Orb Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={120}
            forceHoverState={false}
          />
        </div>
      </section>
    </div>
  );
};

export default AI;
