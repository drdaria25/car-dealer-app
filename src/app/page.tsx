'use client';

import { useState, useEffect } from 'react';
import { fetchMakes } from '@/api/fetchMakes';
import { VehicleMake } from '@/types/types';
import NavigationButton from '@/components/navigationButton';
import Spinner from '@/components/spinner';

export default function Home() {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const loadMakes = async () => {
      const cachedMakes = localStorage.getItem('makes');
      if (cachedMakes) {
        setMakes(JSON.parse(cachedMakes));
      } else {
        const fetchedMakes = await fetchMakes();
        setMakes(fetchedMakes);
        localStorage.setItem('makes', JSON.stringify(fetchedMakes));
      }
    };

    loadMakes();
  }, []);

  return (
    <div className="h-fit w-1/2 text-white flex flex-col items-center p-8 ">
      <div className="h-fit w-1/2 text-white flex flex-col items-center p-8 space-y-10 bg-gray-800 bg-opacity-50 rounded-xl">
        <h1 className="text-4xl font-extrabold text-yellow-400 tracking-wide">
          🚗 Car Dealer App
        </h1>
        <p className="text-lg  text-center">
          Select your dream car make and model year!
        </p>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md space-y-6">
          <div>
            <label
              htmlFor="makes"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Select Vehicle Make
            </label>
            {makes.length > 0 ? (
              <select
                id="makes"
                className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                <option value="">Select Vehicle Make</option>
                {makes.map((make) => (
                  <option key={make.MakeId} value={make.MakeId}>
                    {make.MakeName}
                  </option>
                ))}
              </select>
            ) : (
              <div className="flex items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="years"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Select Model Year
            </label>
            {currentYear ? (
              <select
                id="years"
                className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Select Model Year</option>
                {Array.from({ length: currentYear - 2014 }, (_, i) => (
                  <option key={i} value={2015 + i}>
                    {2015 + i}
                  </option>
                ))}
              </select>
            ) : (
              <div className="flex items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>
        </div>

        <div>
          <NavigationButton
            href={`/result/${selectedMake}/${selectedYear}`}
            label="Next"
            isDisabled={!selectedMake || !selectedYear}
          />
        </div>
      </div>
    </div>
  );
}
