import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const Gallery = () => {
  const data = [
    {
      label: "Cricket",
      value: "cricket",
      images: [
        {
          imageLink:
            "https://t3.ftcdn.net/jpg/00/02/77/90/240_F_2779017_89NtlIoBLDjb80jcU0WtHIoBUr5yqr.jpg",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702207.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702212.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RACG0dG_fCT_hhm-4X8l04Jc3wP4ErgFocK6GWGEOnw_lZulWQerqVawHM5rvNF3uXI&usqp=CAU",
        },
        {
          imageLink:
            "https://cdn.britannica.com/09/182109-050-2C066432/Quinton-De-Kock-New-Zealand-Ross-Taylor-March-24-2015.jpg",
        },
      ],
    },
    {
      label: "Football",
      value: "football",
      images: [
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyDPi5ewgz2K6R1UzKUaP8UjUtDRDNjx74w&s",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tqVw0ELoCyiwjvsDbUAMmJwvc5n0QtTs6A&s",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJB22GIaIpXohwlph9sN7JSTrR65SbYDvEw&s",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/view-soccer-ball-field-grass_23-2150887547.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1163586960/photo/beautiful-garden-with-green-grass.webp?b=1&s=170667a&w=0&k=20&c=i6b14PGVnpTQezfkAP3Xb26uu6Q_7f5xdvtWxHe3zIw=",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/front-view-football-trainer-teaching-children_23-2149742028.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
      ],
    },
    {
      label: "Tennis",
      value: "tennis",
      images: [
        {
          imageLink:
            "https://img.freepik.com/premium-photo/write-about-doubles-match-where-teamwork-communication-lead-victory_1308549-13604.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/premium-photo/portrait-group-tennis-players-court-sunset_1308172-160206.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/close-up-tennis-rackets-balls-ground_23-2148218722.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/premium-photo/tennis-player-preparing-serve-with-racket_1106493-444817.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiojUnSoij9t55S7l-M54iMPdcd-BVfRnshg&s",
        },
        {
          imageLink:
            "https://image.shutterstock.com/image-photo/yellow-tennis-ball-racket-lies-260nw-2454442559.jpg",
        },
      ],
    },
    {
      label: "Gym",
      value: "gym",
      images: [
        {
          imageLink:
            "https://img.freepik.com/free-photo/muscular-man-doing-push-ups-one-hand_7502-4775.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/portrait-young-sportsman-making-cardio-workout-drinking-water-gym_496169-2716.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/premium-photo/gym-sports-room-artificial-intelligence-generative_1302830-127.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/premium-photo/man-training-with-battle-ropes-one-man-strong-man-exercising-with-battle-ropes-gym_629685-101224.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
          "https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989961.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114219.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
      ],
    },
   
    {
      label: "Swimming",
      value: "swimming",
      images: [
        {
          imageLink:
            "https://img.freepik.com/free-photo/male-athlete-playing-water-polo-indoor-pool_23-2150579131.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://t4.ftcdn.net/jpg/02/21/29/19/240_F_221291956_GULkGJM534EK509EoATKSS6mSxqXbKQh.jpg",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/swimmer-with-cap-goggles-swimming-water_23-2148687603.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/male-swimmer-swimming-butterfly-stroke_171337-7613.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/close-up-man-swimming-lake_23-2148648269.jpg?t=st=1724998520~exp=1725002120~hmac=510747d81b7f40f1aadce8d2e8dbdd4e377e2002d97527ed1a6c070c353386af&w=1060",
        },
        {
          imageLink:
            "https://img.freepik.com/free-photo/close-up-athlete-swimming_23-2150845596.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid",
        },
      ],
    },
  ];

  return (
    <div className="mx-20  mt-14">
      <h2 className="text-2xl text-center font-bold text-gray-800 lg:text-4xl dark:text-white mb-6">
        Explore our Image Gallery
      </h2>
      <Tabs value="cricket">
        <TabsHeader
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}
            placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
         placeholder="" 
         onPointerEnterCapture={() => {}} 
         onPointerLeaveCapture={() => {}}
        className="grid grid-cols-1 gap-4 ">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index}>
                  <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
export default Gallery;