
const facilities = [
  {
    name: 'Main Hall',
    description: 'A versatile hall suitable for various sports and events, equipped with the latest facilities.',
    image: 'https://img.freepik.com/free-photo/navratri-highly-detailed-interior-decoration_23-2151193718.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    features: ['Multi-sport area', 'Seating for 500', 'Modern sound system'],
  },
  {
    name: 'Swimming Pool',
    description: 'An Olympic-sized swimming pool with state-of-the-art water filtration and temperature control systems.',
    image: 'https://img.freepik.com/free-photo/umbrella-chair-around-outdoor-swimming-pool-neary-sea-hotel-resort_74190-9809.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    features: ['Olympic size', 'Temperature controlled', 'Lifeguard on duty'],
  },
  {
    name: 'Tennis Court',
    description: 'Well-maintained outdoor and indoor tennis courts with professional-grade surfaces.',
    image: 'https://img.freepik.com/premium-photo/tennis-background-image-sports-background_1022029-99642.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    features: ['Indoor & Outdoor', 'Professional surface', 'Night lighting'],
  },
  {
    name: 'Gym',
    description: 'A fully-equipped gym with the latest fitness machines, free weights, and personal trainers.',
    image: 'https://img.freepik.com/free-photo/muscular-man-doing-push-ups-one-hand_7502-4775.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    features: ['Latest equipment', 'Personal trainers', 'Open 24/7'],
  },
];

const FacilityCard = ({ facility }: { facility: typeof facilities[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={facility.image} alt={facility.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{facility.name}</h3>
        <p className="text-gray-700 mt-2">{facility.description}</p>
        <ul className="mt-4 space-y-2">
          {facility.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-[#E8B86D]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeaturedFacilities = () => {
  return (
    <section className="mt-20 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800">Featured Facilities</h2>
        <p className="text-center text-lg lg:text-xl mt-4 mb-8 text-gray-700">
          Explore our top-notch facilities that cater to all your sports and fitness needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFacilities;
