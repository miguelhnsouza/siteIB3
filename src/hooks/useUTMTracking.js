// hooks/useUTMTracking.js
import { useEffect, useState } from 'react';

export const useUTMTracking = () => {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utm = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
    };

    // Filtrar apenas os que existem
    const filteredUtm = Object.fromEntries(
      Object.entries(utm).filter(([key, value]) => value !== null)
    );

    setUtmParams(filteredUtm);

    // Armazenar no localStorage para persistência
    if (Object.keys(filteredUtm).length > 0) {
      localStorage.setItem('utm_params', JSON.stringify(filteredUtm));
    }
  }, []);

  // Função para obter UTM do localStorage se não houver na URL
  const getStoredUTM = () => {
    const stored = localStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  };

  return { utmParams, getStoredUTM };
};