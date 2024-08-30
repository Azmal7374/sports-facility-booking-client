import { Carousel } from "@material-tailwind/react";

const Carosuel = () => {
    return (
        <div>
             <Carousel
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
             transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="https://t3.ftcdn.net/jpg/00/02/77/90/240_F_2779017_89NtlIoBLDjb80jcU0WtHIoBUr5yqr.jpg"
        alt="image 1"
        className="h-[600px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/front-view-football-trainer-teaching-children_23-2149742028.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="image 2"
        className="h-[600px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/premium-photo/portrait-group-tennis-players-court-sunset_1308172-160206.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="image 3"
        className="h-[600px] w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/muscular-man-doing-push-ups-one-hand_7502-4775.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
        alt="image 3"
        className="h-[600px] w-full object-cover"
      />
    </Carousel>
        </div>
    );
};

export default Carosuel;