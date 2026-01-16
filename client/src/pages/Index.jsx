import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import TripList from "@/components/TripList";
import { useTrips } from "@/hooks/useTrips";

const Index = () => {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [debouncedKeywords, setDebouncedKeywords] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeywords(searchKeywords);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchKeywords]);

  const { data, isLoading, error } = useTrips(debouncedKeywords || "");

  const handleTagClick = (tag) => {
    setSearchKeywords((prev) => {
      const words = prev.trim().split(" ").filter(Boolean);

      if (words.includes(tag)) {
        return prev;
      }

      return prev ? `${prev} ${tag}` : tag;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            เที่ยวไหนดี
          </h1>

          <div className="flex flex-col items-center gap-2">
            <label className="text-gray-600">ค้นหาที่เที่ยว</label>
            <SearchInput
              value={searchKeywords}
              onChange={setSearchKeywords}
            />
          </div>
        </header>

        <main>
          <TripList
            trips={data?.data || []}
            isLoading={isLoading}
            error={error}
            onTagClick={handleTagClick}
          />
        </main>
      </div>
    </div>
  );
};

export default Index;
