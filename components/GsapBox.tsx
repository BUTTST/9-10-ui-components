'use client';

import React, { useEffect, useRef } from 'react';

interface GsapBoxProps {
  children?: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export default function GsapBox({ children, className = '', animation = 'fade' }: GsapBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<any>(null);
  const scrollTriggerRef = useRef<any>(null);

  useEffect(() => {
    const loadGsap = async () => {
      if (!boxRef.current) return;

      try {
        // 動態載入 GSAP 和 ScrollTrigger
        const gsapModule = await import('gsap/dist/gsap');
        const scrollTriggerModule = await import('gsap/dist/ScrollTrigger');
        
        gsapRef.current = gsapModule.gsap;
        scrollTriggerRef.current = scrollTriggerModule.ScrollTrigger;
        
        // 註冊 ScrollTrigger
        gsapRef.current.registerPlugin(scrollTriggerRef.current);

        // 根據動畫類型設定不同的動畫
        const animations = {
          fade: {
            from: { opacity: 0, y: 30 },
            to: { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          },
          slide: {
            from: { x: -100, opacity: 0 },
            to: { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          },
          scale: {
            from: { scale: 0.8, opacity: 0 },
            to: { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
          },
          rotate: {
            from: { rotation: -180, opacity: 0 },
            to: { rotation: 0, opacity: 1, duration: 1.2, ease: 'power2.inOut' },
          },
        };

        const selectedAnimation = animations[animation];

        // 創建動畫
        gsapRef.current.fromTo(
          boxRef.current,
          selectedAnimation.from,
          {
            ...selectedAnimation.to,
            scrollTrigger: {
              trigger: boxRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              markers: false, // 設為 true 可看到觸發點標記
            },
          }
        );
      } catch (error) {
        console.error('GSAP loading error:', error);
      }
    };

    loadGsap();

    // 清理函式
    return () => {
      if (scrollTriggerRef.current && boxRef.current) {
        const triggers = scrollTriggerRef.current.getAll();
        triggers.forEach((trigger: any) => {
          if (trigger.trigger === boxRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [animation]);

  return (
    <div ref={boxRef} className={`gsap-box ${className}`}>
      {children || (
        <div className="p-6 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">GSAP 動畫示例</h3>
          <p className="text-sm opacity-90">
            這個元素會在捲動到視窗 80% 位置時觸發動畫
          </p>
        </div>
      )}
    </div>
  );
}