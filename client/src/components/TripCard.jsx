import { Link } from "lucide-react";
import TagList from "./TagList";

const truncateDescription = (text = "", maxLength = 120) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const TripCard = ({ trip, onTagClick }) => {
  if (!trip) return null;

  const photos = trip.photos || [];
  const mainImage = photos[0];
  const thumbnails = photos.slice(1, 4);

  const handleReadMore = () => {
    window.open(trip.url, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(trip.url);
    alert("คัดลอกลิงก์เรียบร้อยแล้ว");
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md">
      <div className="flex gap-4">
        {/* รูปใหญ่ซ้าย */}
        <div className="w-72 h-52 shrink-0">
          {mainImage ? (
            <img
              src={mainImage}
              alt={trip.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg" />
          )}
        </div>

        {/* Content ขวา */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Title */}
          <h2 className="text-lg font-semibold">
            <a
              href={trip.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {trip.title}
            </a>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-1">
            {truncateDescription(trip.description)}
          </p>

          {/* อ่านต่อ */}
          <button
            onClick={handleReadMore}
            className="text-red-500 text-sm underline hover:decoration-1 mt-1 self-start"
          >
            อ่านต่อ
          </button>

          {/* หมวด */}
          <div className="mt-2">
            <TagList tags={trip.tags || []} onTagClick={onTagClick} />
          </div>

          {/* รูปเล็กด้านล่าง */}
          {thumbnails.length > 0 && (
            <div className="flex gap-2 mt-3">
              {thumbnails.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${trip.title}-${index}`}
                  className="w-24 h-16 object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 🔵 icon คัดลอกลิงก์ มุมล่างขวา */}
      <button
        onClick={handleCopyLink}
        title="คัดลอกลิงก์"
        className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
      >
        <Link size={20} />
      </button>
    </div>
  );
};

export default TripCard;
