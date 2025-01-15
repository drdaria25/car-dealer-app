export interface Model {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface ModelsProps {
  models: Model[];
}

export interface PageProps {
  params: Promise<{
    makeId: string;
    year: string;
  }>;
}

export interface VehicleMake {
  MakeId: string;
  MakeName: string;
}

export interface NavigationButtonProps {
  href: string;
  label: string;
  isDisabled?: boolean;
}
