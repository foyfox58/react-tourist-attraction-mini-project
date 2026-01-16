const TripImageGallery = ({ photos = [], title }) => {
    if (!photos.length) {
      return (
        <div className="w-32 h-24 bg-gray-200 rounded-lg
                        flex items-center justify-center text-sm text-gray-500">
          ไม่มีรูป
        </div>
      );
    }
  
    const mainImage = photos[0];
    const thumbnails = photos.slice(1, 4);
  
    return (
      <div className="flex gap-2">
        <div className="w-32 h-24 shrink-0">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
  
        <div className="flex gap-1">
          {thumbnails.map((photo, index) => (
            <div key={index} className="w-16 h-24 shrink-0">
              <img
                src={photo}
                alt={`${title}-${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TripImageGallery;
  