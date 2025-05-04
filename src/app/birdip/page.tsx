"use client";

import React, { useEffect, useState } from "react";

const IPSTACK_ACCESS_KEY = "YOUR_IPSTACK_KEY"; // <-- Replace with your real key
const EBIRD_API_KEY = "YOUR_EBIRD_API_KEY";   // <-- Replace with your real key

export default function BirdIPSection() {
  const [ipInfo, setIpInfo] = useState<any>(null);
  const [birdData, setBirdData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIpInfo() {
      try {
        // Get user's IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipJson = await ipRes.json();
        const ip = ipJson.ip;

        // Get geolocation info
        const locRes = await fetch(
          `https://api.ipstack.com/${ip}?access_key=${IPSTACK_ACCESS_KEY}`
        );
        const locJson = await locRes.json();
        setIpInfo(locJson);

        // Fetch bird data from eBird API
        if (locJson.latitude && locJson.longitude) {
          const ebirdRes = await fetch(
            `https://api.ebird.org/v2/data/obs/geo/recent?lat=${locJson.latitude}&lng=${locJson.longitude}&key=${EBIRD_API_KEY}`
          );
          if (ebirdRes.ok) {
            const birds = await ebirdRes.json();
            setBirdData(birds.slice(0, 5));
          }
        }
      } catch (err) {
        setIpInfo({ error: "Could not fetch IP/location info" });
      } finally {
        setLoading(false);
      }
    }
    fetchIpInfo();
  }, []);

  // Google Maps embed URL
  const mapUrl =
    ipInfo && ipInfo.latitude && ipInfo.longitude
      ? `https://www.google.com/maps?q=${ipInfo.latitude},${ipInfo.longitude}&z=6&output=embed`
      : "";

  return (
    <section>
      <div className="header" style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img src="https://lottie.host/a7b594a9-29d9-41c9-9533-1c83b6a726bd/xojU6TM6gx.lottie" alt="bird" width={60} height={60} />
        <h1>Bird IP</h1>
        <img src="https://lottie.host/a7b594a9-29d9-41c9-9533-1c83b6a726bd/xojU6TM6gx.lottie" alt="bird" width={60} height={60} />
      </div>
      <div className="index-container">
        <div className="ip-card">
          <div className="grid-container" style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            <div className="grid-item" style={{ flex: 1, minWidth: 300 }}>
              <main>
                <div>
                  <h3>Your IP address:</h3>
                  <div className="ip-box">
                    <p>{ipInfo?.ip || "Unknown"}</p>
                  </div>
                </div>
                <div>
                  <h3>Your IP information:</h3>
                  <div className="ip-box">
                    <p>
                      {ipInfo
                        ? `${ipInfo.city || ""}, ${ipInfo.region_name || ""}, ${ipInfo.country_name || ""}`
                        : "Unknown"}
                    </p>
                  </div>
                </div>
                <div>
                  <h3>Local Birds:</h3>
                  <div className="ip-box">
                    {loading ? (
                      <p>Loading...</p>
                    ) : birdData && birdData.length > 0 ? (
                      <div className="top-birds-container">
                        {birdData.map((bird, idx) => (
                          <div key={idx} className="bird-list">
                            <span className="rank">{idx + 1}</span>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(
                                bird.comName || bird.speciesCode || "bird"
                              )}`}
                            >
                              <span className="bird-name">{bird.comName || bird.speciesCode}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No recent bird sightings found.</p>
                    )}
                  </div>
                </div>
              </main>
              <div className="btn" style={{ marginTop: 16 }}>
                <a href="https://ebird.org/explore" target="_blank" rel="noopener noreferrer">
                  More Local Birds
                </a>
              </div>
            </div>
            <div className="grid-item" style={{ flex: 1, minWidth: 300 }}>
              {mapUrl && (
                <iframe
                  id="map"
                  className="map"
                  src={mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 8 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}