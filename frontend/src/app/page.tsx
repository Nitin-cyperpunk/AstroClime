"use client";
import React, { useState } from "react";
import Navbar from "./COmponenet/navbar";
import WeatherCard from "./COmponenet/card";
import { useEffect } from "react";

function Page() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,WS2M,PRECTOT&community=RE&longitude=77.2&latitude=28.6&start=20241001&end=20241001&format=JSON"
        );
        const data = await res.json();
        const values = data.properties.parameter;
        setWeather({
          temp: values.T2M["20241001"],
          wind: values.WS2M["20241001"],
          rain: values.PRECTOT["20241001"],
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-between flex-grow px-12 py-16 lg:py-24">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Plan Your <span className="text-blue-600">Perfect Day</span> with Weather Intelligence
          </h2>
          <p className="text-lg text-gray-600  max-w-lg">
            Whether you’re planning a vacation, hiking a trail, or fishing by the lake,
            <strong> AstroClime </strong> helps you know if the day will be
            <span className="font-semibold"> very hot, very cold, very windy, very wet,</span>
            or just plain <span className="font-semibold">uncomfortable</span>.
          </p>
          <div className="flex space-x-4 pt-4">
            <button
              
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              {loading ? "Loading..." : "Fetch Weather Data"}
            </button>
            <button className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="https://source.unsplash.com/800x500/?weather,landscape,sky"
            alt="Weather conditions"
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </section>

      <section id="features" className="px-12 py-20 bg-gray-50 ">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose AstroClime?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Accurate Forecasts</h4>
            <p className="text-gray-600">
              Get personalized predictions powered by Earth observation data for any location and date.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Custom Queries</h4>
            <p className="text-gray-600">
              Search for conditions like <em>very hot</em>, <em>very windy</em>, or <em>very wet</em> tailored to your plans.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Plan Smarter Trips</h4>
            <p className="text-gray-600">
              Take the guesswork out of planning and enjoy safer, more comfortable adventures.
            </p>
          </div>
        </div>
      </section>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          🌤 AstrClime — Weather Data
        </h1>

        {loading && <p className="text-gray-600">Loading weather data...</p>}

        {!loading && weather && (
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Today's Weather</h2>
            <p className="text-lg text-gray-700">
              🌡 Temperature: <span className="font-semibold">{weather.temp} °C</span>
            </p>
            <p className="text-lg text-gray-700">
              💨 Wind Speed: <span className="font-semibold">{weather.wind} m/s</span>
            </p>
            <p className="text-lg text-gray-700">
              🌧 Rainfall: <span className="font-semibold">{weather.rain} mm</span>
            </p>
          </div>
        )}

        {!loading && !weather && (
          <p className="text-red-500">Failed to fetch weather data.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default Page;
