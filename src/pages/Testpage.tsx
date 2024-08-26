import { motion } from "framer-motion";
const Testpage = () => {
  const steps = [
    {
      id: 1,
      title: "Verbinde deinen Shop mit wenigen Klicks",
      img: "https://images.unsplash.com/photo-1714731596406-e144f725acc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3V0ZG9vciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Synchronisiere deine Produkte",
      img: "https://media.istockphoto.com/id/690416076/photo/asian-little-girl-and-parent-planting-young-tree-on-black-soil-together.webp?b=1&s=170667a&w=0&k=20&c=j7zmRaZc7ruTOx4BCEUxM6ziQhyjtpD2zrkRXOn4DuY=",
    },
    {
      id: 3,
      title: "Melde deinen ersten Wareneingang",
      img: "https://media.istockphoto.com/id/1163586960/photo/beautiful-garden-with-green-grass.webp?b=1&s=170667a&w=0&k=20&c=i6b14PGVnpTQezfkAP3Xb26uu6Q_7f5xdvtWxHe3zIw=",
    },
    {
      id: 4,
      title: "Wir kümmern uns um Warenannahme",
      img: "https://media.istockphoto.com/id/1251703149/photo/orange-tree-plantation.webp?b=1&s=170667a&w=0&k=20&c=ukhutBtgtE_kjU-DTtupFlaVUOeIkcZmoS4a8dMyxyQ=",
    },
  ];
    return (
      <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Onboarding</h2>
        <div className="relative">
          <div className="absolute w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 50 C 150 100, 350 0, 500 50 S 650 100, 800 50"
                stroke="#CBD5E1"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="flex items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.2 }}
              >
                <div className="w-1/3">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 ml-4">
                  <h3 className="text-xl font-bold text-gray-700">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Testpage;