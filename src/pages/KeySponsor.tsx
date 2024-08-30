import Marquee from "react-fast-marquee";

interface Sponsor {
  logo: string;
  website: string;
}

const sponsors: Sponsor[]  = [
  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162627/1729.png", website: 'https://sponsor1.com' },
  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162631/1831.png", website: 'https://sponsor1.com' },

  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533.png", website: 'https://sponsor1.com' },

  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162605/1236.png", website: '' },

  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162614/1433.png", website: '' },

  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162639/257.png", website: '' },
  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162609/1332.png", website: '' }, 

  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162622/1628.png", website: '' }, 
  
 
   
  { logo: "https://images-workbench.99static.com/9FFhJYRQsHrcPmfClHW3xoR8Pvo=/99designs-contests-attachments/133/133258/attachment_133258495", website: '' },

  { logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162652/5_big7.png", website: '' },

  { logo: "https://dynamic.brandcrowd.com/asset/logo/cb52f9e5-32ed-4f83-b20a-3aa171749462/logo-search-grid-1x?logoTemplateVersion=1&v=638095294425300000&text=Code+Mates", website: '' },
   

];

const KeySponsor = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10 mb-10 ">
        <h1 className="text-2xl md:text-4xl font-bold mb-5  font-Poppins mobile:text-xl text-center text-gray-800 dark:text-white">
          Leading Key Sponsor Companies
        </h1>
        <p className=" font-Jost mb-10 text-center text-gray-700 text-lg lg:text-xl dark:text-white">
          Our Esteemed Sponsor Companies Shaping the Future of Booking.
        </p>
      <div className=" mx-auto">
        <Marquee className="" direction="left" speed={30}>
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-4"
            >
              <img
                src={sponsor.logo}
                alt= "logo"
                className="w-40 h-32"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default KeySponsor;