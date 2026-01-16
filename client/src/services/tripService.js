const API_BASE_URL = "http://localhost:4001";

export const fetchTrips = async (keywords = "") => {
  const response = await fetch(`${API_BASE_URL}/trips?keywords=${encodeURIComponent(keywords)}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch trips");
  }
  
  const data = await response.json();
  console.log("Response from server:", data);
  return data;
};