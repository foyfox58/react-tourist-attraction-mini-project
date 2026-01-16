import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "@/services/tripService";

export const useTrips = (keywords) => {
  return useQuery({
    queryKey: ["trips", keywords],
    queryFn: () => fetchTrips(keywords),
  });
};
