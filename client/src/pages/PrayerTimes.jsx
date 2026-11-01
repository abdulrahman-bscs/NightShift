import React, { useState, useEffect } from 'react';
import PageShell from '../components/layout/PageShell';
import { Compass, Clock, MapPin, Sparkles, AlertCircle } from 'lucide-react';

const cities = [
  { name: 'Lahore, Pakistan', lat: 31.5204, lng: 74.3587, timezone: 'Asia/Karachi' },
  { name: 'Karachi, Pakistan', lat: 24.8607, lng: 67.0011, timezone: 'Asia/Karachi' },
  { name: 'Islamabad, Pakistan', lat: 33.6844, lng: 73.0479, timezone: 'Asia/Karachi' },
  { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, timezone: 'Asia/Dubai' },
  { name: 'London, UK', lat: 51.5074, lng: -0.1278, timezone: 'Europe/London' }
];

export default function PrayerTimes() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [timings, setTimings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchTimings = async () => {
      setLoading(true);
      setError(null);
      try {
        const today = new Date();
        const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        const res = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=${selectedCity.lat}&longitude=${selectedCity.lng}&method=1`);
        if (!res.ok) throw new Error('Could not calculate astronomical prayer times');
        const data = await res.json();
        setTimings(data.data.timings);
      } catch (err) {
        setError('Astronomical timing service unavailable. Please check internet connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchTimings();
  }, [selectedCity]);

  const prayerNames = [
    { key: 'Fajr', label: 'FAJR', desc: 'Dawn twilight' },
    { key: 'Sunrise', label: 'SUNRISE', desc: 'Solar daybreak' },
    { key: 'Dhuhr', label: 'DHUHR', desc: 'Noon solar zenith' },
    { key: 'Asr', label: 'ASR', desc: 'Late afternoon' },
    { key: 'Maghrib', label: 'MAGHRIB', desc: 'Sunset dusk' },
    { key: 'Isha', label: 'ISHA', desc: 'Nightfall' }
  ];

  return (
    <PageShell>
      <div className="container section-spacing" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <span className="eyebrow" style={{ color: 'var(--color-emerald)' }}>COMMUNITY UTILITY</span>
        <h1 className="headline-serif" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
          PRAYER TIMES.
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Accessible astronomical calculation retained as an educational utility feature. Select your location to view calculated times based on University of Islamic Sciences (Karachi) calculation standards.
        </p>

        {/* City Selector */}
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '1.5rem', borderRadius: '2px', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin size={18} style={{ color: 'var(--color-crimson)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-ivory)' }}>LOCATION:</span>
            <select
              value={selectedCity.name}
              onChange={(e) => setSelectedCity(cities.find(c => c.name === e.target.value))}
              style={{
                backgroundColor: 'var(--color-base)',
                border: '1px solid var(--border-delicate)',
                color: 'var(--color-ivory)',
                padding: '0.5rem 1rem',
                borderRadius: '2px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {cities.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>
            <Clock size={16} />
            <span>LOCAL CLOCK: {currentTime}</span>
          </div>
        </div>

        {/* Timings List */}
        {loading ? (
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '3rem', textAlign: 'center', color: 'var(--color-muted)' }}>
            Calculating astronomical timings...
          </div>
        ) : error ? (
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', textAlign: 'center', border: '1px solid var(--color-crimson)', color: 'var(--color-ivory)' }}>
            <AlertCircle size={24} style={{ color: 'var(--color-crimson)', margin: '0 auto 0.5rem auto' }} />
            <p>{error}</p>
          </div>
        ) : timings && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {prayerNames.map(p => (
              <div
                key={p.key}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--border-delicate)',
                  padding: '1.75rem',
                  borderRadius: '2px'
                }}
              >
                <span className="eyebrow" style={{ color: p.key === 'Maghrib' ? 'var(--color-crimson)' : 'var(--color-muted)', marginBottom: '0.4rem' }}>
                  {p.label}
                </span>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  {timings[p.key]}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-muted)' }}>
          Method: University of Islamic Sciences, Karachi • Standard Astronomical Solar Zenith Calculation
        </div>
      </div>
    </PageShell>
  );
}
