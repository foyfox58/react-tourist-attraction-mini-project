import TripCard from "./TripCard";

const TripList = ({ trips = [], isLoading, error, onTagClick }) => {
  if (isLoading) {
    return <div className="text-center py-8">กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        เกิดข้อผิดพลาด: {error.message}
      </div>
    );
  }

  if (!trips.length) {
    return (
      <div className="text-center py-8 text-gray-600">
        ไม่พบสถานที่ท่องเที่ยว
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {trips.map((trip) => (
        <TripCard
          key={trip.eid}
          trip={trip}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
};

export default TripList;
