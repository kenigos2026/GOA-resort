"use client";

import { useState } from "react";
import { adCampaigns, adSlots } from "@/content/ads";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "1234") {
      setAuthenticated(true);
    } else {
      alert("Wrong PIN. Try 1234 for demo.");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="bg-white rounded-3xl p-8 luxury-shadow max-w-sm w-full">
          <h1 className="font-cormorant text-2xl font-semibold text-deep-forest mb-2 text-center">
            Admin Access
          </h1>
          <p className="text-sm text-warm-stone text-center mb-6">
            Enter PIN to manage content
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant text-center text-lg tracking-widest mb-4"
              maxLength={4}
            />
            <button
              type="submit"
              className="w-full py-3 bg-verdant text-white font-medium rounded-full hover:bg-verdant-dark transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-xs text-warm-stone/50 text-center mt-4">
            Demo PIN: 1234
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-cormorant text-3xl font-semibold text-deep-forest">
              Admin Dashboard
            </h1>
            <p className="text-sm text-warm-stone">
              Manage ad campaigns and sponsored content
            </p>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="px-4 py-2 text-sm text-warm-stone border border-sage-light/40 rounded-full hover:bg-forest-mist transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Ad Slots */}
        <div className="bg-white rounded-3xl p-8 luxury-shadow mb-8">
          <h2 className="font-cormorant text-2xl font-semibold text-deep-forest mb-6">
            Ad Slots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {adSlots.map((slot) => (
              <div
                key={slot.id}
                className="p-4 bg-forest-mist rounded-2xl"
              >
                <h3 className="font-medium text-deep-forest">{slot.name}</h3>
                <p className="text-xs text-warm-stone mt-1">
                  Placement: {slot.placement}
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-sage-light/30 text-xs rounded-full text-warm-stone">
                  {adCampaigns.length} active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Campaigns */}
        <div className="bg-white rounded-3xl p-8 luxury-shadow">
          <h2 className="font-cormorant text-2xl font-semibold text-deep-forest mb-6">
            Campaigns
          </h2>
          {adCampaigns.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-warm-stone mb-4">
                No campaigns yet. This is a Phase 2 feature.
              </p>
              <p className="text-sm text-warm-stone/60">
                Campaigns can be added here with image banners, start/end
                dates, and placement targeting. The content reads from{" "}
                <code className="bg-forest-mist px-2 py-0.5 rounded text-xs">
                  /content/ads.ts
                </code>
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {adCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 border border-sage-light/30 rounded-2xl"
                >
                  <h3 className="font-medium text-deep-forest">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-warm-stone">
                    {campaign.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
