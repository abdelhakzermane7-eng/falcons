import GhostCursor from '@/components/GhostCursor';
import BubbleMenu from '@/components/BubbleMenu';
import falconBackground from '@/assets/falcon-background.png';

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
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${falconBackground})`,
          backgroundPosition: 'center 30%'
        }}
      />
      
      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      
      {/* Ghost Cursor Effect - on top of background */}
      <div className="absolute inset-0" style={{ height: '100vh', position: 'relative' }}>
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
        />
      </div>
      
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
      
      {/* Hero Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-glow drop-shadow-[0_0_30px_hsl(var(--glow))]">FALCON</span>
            <span className="text-foreground/80">X</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            حرك الماوس لترى التأثير السحري
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-glow text-glow-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--glow)/0.5)] transition-all duration-300 hover:scale-105">
              ابدأ الآن
            </button>
            <button className="px-8 py-3 rounded-full border border-glow/30 text-foreground font-semibold hover:bg-glow/10 transition-all duration-300 hover:border-glow/60">
              اعرف المزيد
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
