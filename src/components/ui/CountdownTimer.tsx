import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  onExpire?: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      secondes: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      if (!remaining && onExpire) {
        onExpire();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-200 inline-block">
        Offre précommande expirée — Arrivage imminent
      </div>
    );
  }

  return (
    <div className="bg-stone-900 text-white p-3 rounded-lg my-2 shadow-sm">
      <p className="text-[11px] uppercase tracking-wider text-amber-400 font-medium mb-1.5 text-center">
        ⏱️ Fin du tarif précommande dans :
      </p>
      <div className="grid grid-cols-4 gap-1.5 text-center">
        <div className="bg-stone-800 p-1.5 rounded">
          <span className="text-base font-bold text-white block">{timeLeft.jours}</span>
          <span className="text-[9px] uppercase text-stone-400">Jours</span>
        </div>
        <div className="bg-stone-800 p-1.5 rounded">
          <span className="text-base font-bold text-white block">{timeLeft.heures}</span>
          <span className="text-[9px] uppercase text-stone-400">Heures</span>
        </div>
        <div className="bg-stone-800 p-1.5 rounded">
          <span className="text-base font-bold text-white block">{timeLeft.minutes}</span>
          <span className="text-[9px] uppercase text-stone-400">Min</span>
        </div>
        <div className="bg-stone-800 p-1.5 rounded">
          <span className="text-base font-bold text-white block">{timeLeft.secondes}</span>
          <span className="text-[9px] uppercase text-stone-400">Sec</span>
        </div>
      </div>
    </div>
  );
};
