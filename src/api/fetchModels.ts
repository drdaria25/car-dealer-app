import { Model } from '@/types/types';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchModels(
  makeId: string,
  year: string
): Promise<Model[]> {
  try {
    const response = await fetch(
      `${apiUrl}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch models. Status: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.Results || !Array.isArray(data.Results)) {
      throw new Error('Invalid data format received from the API.');
    }

    return data.Results;
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    return [];
  }
}
