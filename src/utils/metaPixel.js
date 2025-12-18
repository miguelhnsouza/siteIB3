// utils/metaPixel.js
export const trackEvent = (eventName, parameters = {}) => {
  console.log('Meta Pixel - Track Event:', eventName, parameters);
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  } else {
    console.warn('Meta Pixel not loaded');
  }
};

export const trackCustomEvent = (eventName, parameters = {}) => {
  console.log('Meta Pixel - Track Custom Event:', eventName, parameters);
  if (window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  } else {
    console.warn('Meta Pixel not loaded');
  }
};