import BubbleMenu from '@/components/BubbleMenu';
import Orb from '@/components/Orb';
import SplashCursor from '@/components/SplashCursor';

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
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: '#030a02' }}>
      {/* SplashCursor Effect */}
      <SplashCursor />

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
      <section className="relative w-full h-screen flex flex-col items-center justify-center" style={{ zIndex: 20 }}>
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={120}
            forceHoverState={false}
          />
        </div>
        
        {/* Text Content */}
        <div className="text-center mt-8" style={{ zIndex: 30 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            قريبا....
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            راح اطول ترا
          </p>
        </div>
      </section>
    </div>
  );
};

export default AI;
