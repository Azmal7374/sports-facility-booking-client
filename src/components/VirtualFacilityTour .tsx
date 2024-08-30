import { useState } from 'react';

type TourName = 'Main Hall' | 'Swimming Pool' | 'Tennis Court' | 'Gym';

const VirtualFacilityTour = () => {
  const [currentTour, setCurrentTour] = useState<TourName>('Main Hall');

  const tourData: Record<TourName, string> = {
    'Main Hall': 'https://www.youtube.com/embed/JSjS4lvpSLU?si=lS97VdSbRH9z1mm2',
    'Swimming Pool': 'https://www.youtube.com/embed/UmIYanq5gH8?si=EKv8tFwxtx0H19GT',
    'Tennis Court': 'https://www.youtube.com/embed/oyxhHkOel2I?si=Sg5DB-hP0kQPvlrc',
    'Gym': 'https://www.youtube.com/embed/HQfF5XRVXjU?si=PAIXiKMQIoMqPzZ-',
  };

  const renderTourButtons = () => {
    return (
      <div className="flex justify-center space-x-4">
        {Object.keys(tourData).map((tour) => (
          <button
            key={tour}
            onClick={() => setCurrentTour(tour as TourName)}
            className={`px-4 py-2 rounded-md font-bold ${
              currentTour === tour ? 'bg-[#E8B86D] text-white' : 'bg-[#CEDF9F] text-black hover:bg-[#E8B86D]'
            }`}
          >
            {tour}
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="mt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800">Virtual Facility Tour</h2>
        <p className="text-center text-lg lg:text-xl mt-4 mb-8 text-gray-700">
          Take a virtual tour of our top facilities to see what we offer!
        </p>
        {renderTourButtons()}
        <div className="mt-8 flex justify-center">
          <iframe
            width="800"
            height="450"
            src={tourData[currentTour]}
            title={`${currentTour} Virtual Tour`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualFacilityTour;
