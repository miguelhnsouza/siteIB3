// hooks/useMetaTracking.js
import { useEffect } from 'react';
import { trackCustomEvent } from '../utils/metaPixel';
import { useUTMTracking } from './useUTMTracking';

export const useMetaTracking = () => {
  const { utmParams, getStoredUTM } = useUTMTracking();

  useEffect(() => {
    const currentUTM = Object.keys(utmParams).length > 0 ? utmParams : getStoredUTM();

    trackCustomEvent('View', currentUTM);

    const timers = [30, 60, 120];
    const timeouts = timers.map(seconds => {
      return setTimeout(() => {
        trackCustomEvent('Time_On_Page', { time: seconds, ...currentUTM });
      }, seconds * 1000);
    });

    // Scroll Tracking
    let scrollTracked = { 25: false, 50: false, 75: false, 100: false };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

      [25, 50, 75, 100].forEach(percent => {
        if (scrollPercent >= percent && !scrollTracked[percent]) {
          trackCustomEvent('Scroll', { percentage: percent, ...currentUTM });
          scrollTracked[percent] = true;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};