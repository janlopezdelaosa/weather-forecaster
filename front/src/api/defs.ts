export const apiBase = "http://localhost:3000";

export interface LocationData {
  country: string;
  name: string;
  slug: string;
}

export type ForecastData = {
  date: string;
  hourly: number[];
  locationSlug: string;
};
