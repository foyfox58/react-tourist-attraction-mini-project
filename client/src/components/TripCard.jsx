import TagList from "./TagList";
import TripImageGallery from "./TripImageGallery";

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
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md">
      <div className="flex gap-4">
        <TripImageGallery
          photos={trip.photos || []}
          title={trip.title}
        />

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

          <div className="flex gap-4 mb-2">
            <button
              onClick={handleReadMore}
              className="text-blue-600 text-sm hover:underline"
            >
              อ่านต่อ
            </button>

            <button
              onClick={handleCopyLink}
              className="text-blue-600 text-sm hover:underline"
            >
              คัดลอกลิงก์
            </button>
          </div>

          <TagList tags={trip.tags || []} onTagClick={onTagClick} />
        </div>
      </div>
    </div>
  );
};

export default TripCard;
