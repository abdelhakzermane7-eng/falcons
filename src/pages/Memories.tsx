import DomeGallery from '@/components/DomeGallery';
import BubbleMenu from '@/components/BubbleMenu';

import memory1 from '@/assets/memories/memory-1.png';
import memory2 from '@/assets/memories/memory-2.jpeg';
import memory3 from '@/assets/memories/memory-3.jpg';
import memory4 from '@/assets/memories/memory-4.jpg';
import memory5 from '@/assets/memories/memory-5.jpg';
import memory6 from '@/assets/memories/memory-6.jpg';
import memory7 from '@/assets/memories/memory-7.jpg';
import memory8 from '@/assets/memories/memory-8.jpg';
import memory9 from '@/assets/memories/memory-9.jpg';
import memory10 from '@/assets/memories/memory-10.jpg';

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

const galleryImages = [
  { src: memory1, alt: 'ذكرى 1' },
  { src: memory2, alt: 'ذكرى 2' },
  { src: memory3, alt: 'ذكرى 3' },
  { src: memory4, alt: 'ذكرى 4' },
  { src: memory5, alt: 'ذكرى 5' },
  { src: memory6, alt: 'ذكرى 6' },
  { src: memory7, alt: 'ذكرى 7' },
  { src: memory8, alt: 'ذكرى 8' },
  { src: memory9, alt: 'ذكرى 9' },
  { src: memory10, alt: 'ذكرى 10' },
];

const Memories = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: '#030a02' }}>
      {/* Bubble Menu */}
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

      {/* DomeGallery */}
      <DomeGallery
        images={galleryImages}
        overlayBlurColor="#030a02"
        grayscale={true}
        fit={0.75}
        minRadius={700}
        imageBorderRadius="20px"
        openedImageBorderRadius="20px"
        openedImageWidth="500px"
        openedImageHeight="500px"
      />
    </div>
  );
};

export default Memories;
