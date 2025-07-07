'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0x9333ea, // Purple-600
          backgroundColor: 0x000000,
          amplitudeFactor: 2,
          xOffset: 0.0,
          yOffset: 0.0,
          size: 1.50,
          speed: 0.30
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute inset-0 -z-10">
      {children}
    </div>
  );
} 