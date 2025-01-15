import { VehicleMake } from '@/types/types';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchMakes(): Promise<VehicleMake[]> {
  try {
    const response = await fetch(
      `${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`
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

    return data.Results;
  } catch (error) {
    console.error('Failed to fetch vehicle makes:', error);
    return [];
  }
}
