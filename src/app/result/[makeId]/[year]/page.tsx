import { fetchModels } from '@/api/fetchModels';
import { PageProps } from '@/types/types';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import NavigationButton from '@/components/navigationButton';
import Spinner from '@/components/spinner';

const Models = dynamic(() => import('@/components/models'));


export default async function ResultPage({ params }: PageProps) {
  const { makeId, year } = await params;

  const models = await fetchModels(makeId, year);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      }
    >
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto p-8">
          <NavigationButton href="/" label="Back" isDisabled={false} />
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mt-8">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">
              Vehicle Models
            </h1>
            <div className="p-4">
              <Models models={models} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
export async function generateStaticParams() {
  try {
    const response = await fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch makes. Status: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.Results || !Array.isArray(data.Results)) {
      throw new Error('Invalid data format received from the API.');
    }

    const years = Array.from(
      { length: new Date().getFullYear() - 2014 },
      (_, i) => (2015 + i).toString()
    );

    const params = [];

    for (const make of data.Results.slice(0, 5)) {
      for (const year of years) {
        params.push({
          makeId: String(make.MakeId),
          year,
        });
      }
    }

    return params;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}
