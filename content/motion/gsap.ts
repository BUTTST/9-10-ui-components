import { ExampleItem } from '@/components/ExampleCard';

export const gsapExamples: ExampleItem[] = [
  {
    id: 'basic-tween',
    title: '基本 Tween 動畫',
    description: 'GSAP 基礎動畫設定',
    badges: ['GSAP', 'Tween', '動畫'],
    deps: '需要客戶端載入 GsapBox',
    demo: `<GsapBox animation="fade" />`,
    code: `import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function BasicTween() {
  const boxRef = useRef(null);
  
  useEffect(() => {
    // 基本 tween
    gsap.to(boxRef.current, {
      x: 100,
      rotation: 360,
      duration: 2,
      ease: 'power2.inOut'
    });
  }, []);
  
  return <div ref={boxRef} className="w-20 h-20 bg-blue-500" />;
}

// from 動畫
function FromAnimation() {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'back.out(1.7)'
    });
  }, []);
  
  return <div ref={elementRef}>動畫元素</div>;
}

// fromTo 動畫
function FromToAnimation() {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(elementRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  }, []);
  
  return <div ref={elementRef}>縮放動畫</div>;
}

// Timeline 動畫
function TimelineAnimation() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to('.box1', { x: 100, duration: 1 })
      .to('.box2', { y: 100, duration: 1 }, '-=0.5')
      .to('.box3', { rotation: 360, duration: 1 }, '<');
  }, []);
  
  return (
    <div ref={containerRef}>
      <div className="box1">盒子1</div>
      <div className="box2">盒子2</div>
      <div className="box3">盒子3</div>
    </div>
  );
}`,
    explain: `
      <h4>GSAP 基礎方法</h4>
      <ul>
        <li><strong>gsap.to()</strong>：動畫到目標狀態</li>
        <li><strong>gsap.from()</strong>：從指定狀態動畫到當前</li>
        <li><strong>gsap.fromTo()</strong>：指定起始和結束狀態</li>
        <li><strong>timeline()</strong>：建立時間軸動畫</li>
      </ul>
    `,
    prompt: `請使用 GSAP 建立基本 tween 動畫，包含 to、from、fromTo 和 timeline`,
  },
  {
    id: 'scrolltrigger',
    title: 'ScrollTrigger 捲動動畫',
    description: '捲動觸發的動畫效果',
    badges: ['GSAP', 'ScrollTrigger', '捲動'],
    deps: '需要客戶端載入 GsapBox',
    demo: `<GsapBox animation="slide" />`,
    code: `import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 基本 ScrollTrigger
function ScrollAnimation() {
  const boxRef = useRef(null);
  
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 400,
      rotation: 360,
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: true // 開發時顯示標記
      }
    });
  }, []);
  
  return (
    <div ref={boxRef} className="w-20 h-20 bg-purple-500">
      捲動我
    </div>
  );
}

// 視差效果
function ParallaxEffect() {
  useEffect(() => {
    gsap.utils.toArray('.parallax-layer').forEach((layer: any, i) => {
      gsap.to(layer, {
        yPercent: -100 * (i + 1),
        scrollTrigger: {
          trigger: '.parallax-container',
          start: 'top top',
          scrub: i * 0.5 + 1
        }
      });
    });
  }, []);
  
  return (
    <div className="parallax-container relative h-screen">
      <div className="parallax-layer absolute inset-0 bg-blue-500" />
      <div className="parallax-layer absolute inset-0 bg-purple-500" />
      <div className="parallax-layer absolute inset-0 bg-pink-500" />
    </div>
  );
}

// 進場動畫
function RevealAnimation() {
  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);
  
  return (
    <div>
      <div className="reveal">第一個區塊</div>
      <div className="reveal">第二個區塊</div>
      <div className="reveal">第三個區塊</div>
    </div>
  );
}`,
    explain: `
      <h4>ScrollTrigger 設定</h4>
      <ul>
        <li><strong>trigger</strong>：觸發元素</li>
        <li><strong>start/end</strong>：開始/結束位置</li>
        <li><strong>scrub</strong>：與捲動同步</li>
        <li><strong>pin</strong>：固定元素</li>
        <li><strong>toggleActions</strong>：控制播放行為</li>
      </ul>
    `,
    prompt: `請使用 GSAP ScrollTrigger 建立捲動觸發動畫，包含視差和進場效果`,
  },
  {
    id: 'pin-scrub',
    title: 'Pin 與 Scrub 效果',
    description: '固定元素與捲動同步動畫',
    badges: ['GSAP', 'Pin', 'Scrub'],
    deps: '需要客戶端載入 GsapBox',
    demo: `<GsapBox animation="scale" />`,
    code: `import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Pin 效果
function PinSection() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=500',
      pin: true,
      pinSpacing: true
    });
    
    // 在 pin 期間的動畫
    gsap.to('.pinned-content', {
      scale: 1.5,
      rotation: 360,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=500',
        scrub: 1
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="pinned-content">
        固定內容
      </div>
    </section>
  );
}

// 水平捲動
function HorizontalScroll() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray('.panel');
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + container.offsetWidth
      }
    });
  }, []);
  
  return (
    <div ref={containerRef} className="flex">
      <div className="panel w-screen h-screen bg-red-500">面板 1</div>
      <div className="panel w-screen h-screen bg-green-500">面板 2</div>
      <div className="panel w-screen h-screen bg-blue-500">面板 3</div>
    </div>
  );
}

// 文字動畫
function TextReveal() {
  useEffect(() => {
    const splitText = new SplitText('.reveal-text', { type: 'chars' });
    
    gsap.from(splitText.chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      scrollTrigger: {
        trigger: '.reveal-text',
        start: 'top 80%',
        scrub: false,
        toggleActions: 'play none none reverse'
      }
    });
  }, []);
  
  return (
    <h1 className="reveal-text text-6xl font-bold">
      GSAP 文字動畫
    </h1>
  );
}`,
    explain: `
      <h4>進階 ScrollTrigger</h4>
      <ul>
        <li><strong>pin</strong>：捲動時固定元素</li>
        <li><strong>scrub</strong>：動畫與捲動同步</li>
        <li><strong>snap</strong>：吸附到特定位置</li>
        <li><strong>pinSpacing</strong>：保留固定空間</li>
      </ul>
    `,
    prompt: `請建立 GSAP pin 和 scrub 效果，包含固定區塊、水平捲動和文字顯示動畫`,
  },
];