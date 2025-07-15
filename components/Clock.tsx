'use client';

import { useEffect, useState } from 'react';
import IconWrapper from './wrappers/IconWrapper';

function Clock() {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime(); // run immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // avoid server-side mismatch

  return (
    <span className="font-mono text-xs text-white">
      {time}
    </span>
  );
}


export default function StickyClock() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <IconWrapper>
        <Clock />
      </IconWrapper>
    </div>
  );
}