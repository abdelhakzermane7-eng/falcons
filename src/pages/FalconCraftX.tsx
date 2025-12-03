import { useEffect, useRef, useState } from 'react';
import BubbleMenu from '@/components/BubbleMenu';
import BounceCards from '@/components/BounceCards';
import Stack from '@/components/Stack';
import ScrollReveal from '@/components/ScrollReveal';
import card1 from '@/assets/falconcraftx/card-1.png';
import card2 from '@/assets/falconcraftx/card-2.png';
import card3 from '@/assets/falconcraftx/card-3.png';
import card4 from '@/assets/falconcraftx/card-4.png';
import card5 from '@/assets/falconcraftx/card-5.png';
import flauncherxIcon from '@/assets/flauncherx-icon.png';

const menuItems = [
  {
    label: 'البداية',
    href: '/',
    ariaLabel: 'البداية',
    rotation: 8,
    hoverStyles: { bgColor: '#14532d', textColor: '#ffffff' }
  },
  {
    label: 'FalconCraftX',
    href: '/falconcraftx',
    ariaLabel: 'FalconCraftX',
    rotation: -4,
    hoverStyles: { bgColor: '#166534', textColor: '#ffffff' }
  },
  {
    label: 'Falkano',
    href: '#falkano',
    ariaLabel: 'Falkano',
    rotation: 6,
    hoverStyles: { bgColor: '#15803d', textColor: '#ffffff' }
  },
  {
    label: 'Ai',
    href: '#ai',
    ariaLabel: 'Ai',
    rotation: -6,
    hoverStyles: { bgColor: '#22c55e', textColor: '#000000' }
  },
  {
    label: 'الذكريات',
    href: '/memories',
    ariaLabel: 'الذكريات',
    rotation: -8,
    hoverStyles: { bgColor: '#14532d', textColor: '#ffffff' }
  }
];

const cardImages = [card1, card2, card3, card4, card5];

const transformStyles = [
  "rotate(8deg) translate(-320px)",
  "rotate(4deg) translate(-160px)",
  "rotate(0deg)",
  "rotate(-4deg) translate(160px)",
  "rotate(-8deg) translate(320px)"
];

const stackImages = [
  { id: 1, img: flauncherxIcon },
  { id: 2, img: flauncherxIcon },
  { id: 3, img: flauncherxIcon },
  { id: 4, img: flauncherxIcon }
];

const flauncherFeatures = `مميزات FlauncherX

واجهة جميلة مناسبة لكلان فالكون

فيها اللغة العربية

تقدر تنزل مودات و ريسورس باكس و الخ ..... من داخل اللانشر نفسه

واجهة سهلة لكل مستخدم اما المستخدم المحترف او المبتدئ

تقدر تنقل عالمك من اي نسخة اللعبة داخل لانشر و تعدل عليه

تقدر تسوي لقطة شاشة في لانشر

تقدر تغير سكينك داخل لانشر

تقدر تدخل اي سيرفر ماينكرافت بكل سهولة

لانشر مناسب للاجهزة الضعيفة بدون مشاكل و اذا في لاق تقدر تتحكم من استهلاك لانشر و تخليه ابطئ على جهازك

و المزيد .......`;

const FalconCraftX = () => {
  const [showCards, setShowCards] = useState(false);
  const [showStack, setShowStack] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cardsRef.current && entry.isIntersecting && !showCards) {
            setShowCards(true);
          }
          if (entry.target === stackRef.current && entry.isIntersecting && !showStack) {
            setShowStack(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    if (stackRef.current) {
      observer.observe(stackRef.current);
    }

    return () => observer.disconnect();
  }, [showCards, showStack]);

  return (
    <div className="relative w-screen min-h-[200vh] overflow-x-hidden" style={{ backgroundColor: '#030a02' }}>
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

      {/* Hero Section with Video */}
      <section className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/falconcraftx-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to bottom, transparent, #030a02)',
            zIndex: 1 
          }}
        />
      </section>

      {/* BounceCards Section */}
      <section 
        ref={cardsRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center py-20"
        style={{ zIndex: 10 }}
      >
        {/* Title */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center relative z-10"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
        >
          كل اسبوع افضل صورة داخل مدينة فالكون
        </h2>

        {/* BounceCards */}
        {showCards && (
          <BounceCards
            className="custom-bounceCards"
            images={cardImages}
            containerWidth={900}
            containerHeight={400}
            animationDelay={0.3}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        )}
      </section>

      {/* FLauncherX Section */}
      <section 
        ref={stackRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center py-20"
        style={{ zIndex: 10, backgroundColor: '#030a02' }}
      >
        {/* Title */}
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-4 text-center"
          style={{ textShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
        >
          FLauncherX
        </h2>
        <p 
          className="text-lg md:text-xl text-green-400 mb-16 text-center"
          style={{ textShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }}
        >
          راح يكون في لانشر خاص بكلان فالكون
        </p>

        {/* Stack Effect */}
        {showStack && (
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cardDimensions={{ width: 250, height: 250 }}
            cardsData={stackImages}
          />
        )}
      </section>

      {/* ScrollReveal Section - Features */}
      <section dir="rtl" className="relative w-full min-h-screen flex items-center justify-center py-20 px-8" style={{ zIndex: 10, backgroundColor: '#030a02' }}>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={8}
          containerClassName="max-w-3xl"
          textClassName="text-white text-base md:text-lg leading-loose whitespace-pre-line"
        >
          {flauncherFeatures}
        </ScrollReveal>
      </section>
    </div>
  );
};

export default FalconCraftX;
