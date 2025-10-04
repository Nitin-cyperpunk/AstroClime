"use client";
import React from "react";

interface WeatherCardProps {
  temp: number;
  wind: number;
  rain: number;
}

export default function WeatherCard({ temp, wind, rain }: WeatherCardProps) {
  return (
    <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8 text-center w-80">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Today's Report</h2>
      <p className="text-lg text-gray-900">
        🌡 Temperature: <span className="font-semibold">{temp} °C</span>
      </p>
      <p className="text-lg text-gray-900">
        💨 Wind Speed: <span className="font-semibold">{wind} m/s</span>
      </p>
      <p className="text-lg text-gray-900">
        🌧 Rainfall: <span className="font-semibold">{rain} mm</span>
      </p>
    </div>
  );
}
