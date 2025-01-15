'use client';

import { ModelsProps } from '@/types/types';

export default function Models({ models }: ModelsProps) {
  return (
    <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-lg">
      {models.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map((model, index) => (
            <li
              key={`${model.Model_ID}-${index}`}
              className="p-4 bg-gray-800   text-white rounded-lg shadow-md hover:shadow-white transition-shadow"
            >
              <h2 className="text-lg font-medium">{model.Model_Name}</h2>
              <p className="text-sm text-gray-400">
                Model ID: {model.Model_ID}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 text-center">No models available</p>
      )}
    </div>
  );
}
