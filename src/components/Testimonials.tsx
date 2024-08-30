
const testimonials = [
  {
    name: 'John Doe',
    title: 'Fitness Enthusiast',
    feedback:
      'The facilities here are top-notch! Booking is a breeze, and I love the variety of sports activities available.',
    avatar: 'https://img.freepik.com/premium-photo/man-warming-up-morning-workout-outdoors_739463-3834.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    title: 'Tennis Player',
    feedback:
      'I had an amazing experience using the tennis courts. The booking process was seamless, and the staff was very accommodating.',
    avatar: 'https://img.freepik.com/free-photo/person-playing-tennis-game-winter-time_23-2149274766.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    rating: 4,
  },
  {
    name: 'Alex Johnson',
    title: 'Swimmer',
    feedback:
      'The swimming pool is fantastic! Clean, well-maintained, and easily accessible through the booking system.',
    avatar: 'https://img.freepik.com/free-photo/medium-shot-waterpolo-player-with-equipment_23-2151202976.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-[#c37f13]' : 'text-gray-700'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.906c.969 0 1.371 1.24.588 1.81l-3.97 2.888a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.97-2.888a1 1 0 00-1.176 0l-3.97 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.485 10.1c-.783-.57-.38-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
};

const CustomerTestimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800">What Our Customers Say</h2>
        <p className="text-center text-lg lg:text-xl mt-4 mb-8 text-gray-700">
          Hear from those who have experienced our top-notch facilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#CEDF9F] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-800">{testimonial.feedback}</p>
              <div className="mt-4">
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
