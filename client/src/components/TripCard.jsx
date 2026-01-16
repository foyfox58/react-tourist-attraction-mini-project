import TagList from "./TagList";
import TripImageGallery from "./TripImageGallery";
import { Link } from "lucide-react";

const truncateDescription = (text = "", maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const TripCard = ({ trip, onTagClick }) => {
  if (!trip) return null;

  const handleReadMore = () => {
    window.open(trip.url, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(trip.url);
    alert("คัดลอกลิงก์เรียบร้อยแล้ว");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Image */}
        <TripImageGallery
          photos={trip.photos || []}
          title={trip.title}
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold mb-2">
            <a
              href={trip.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {trip.title}
            </a>
          </h2>

          <p className="text-gray-600 text-sm mb-2">
            {truncateDescription(trip.description)}
          </p>

          <button
            onClick={handleReadMore}
            className="text-blue-600 text-sm hover:underline mb-2"
          >
            อ่านต่อ
          </button>

          <TagList tags={trip.tags || []} onTagClick={onTagClick} />
        </div>

        {/* Copy link icon (RIGHT SIDE) */}
        <button
          onClick={handleCopyLink}
          title="คัดลอกลิงก์"
          className="shrink-0 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Link size={20} />
        </button>
      </div>
    </div>
  );
};

export default TripCard;
