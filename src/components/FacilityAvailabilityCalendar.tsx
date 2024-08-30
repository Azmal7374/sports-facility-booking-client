import  { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';

const FacilityAvailabilityCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Example booked dates
  const bookedDates = [
    new Date(2024, 7, 5),
    new Date(2024, 7, 17),
    new Date(2024, 7, 21),
  ];

  // Example availability data for selected date
  const availabilityData = {
    morning: true,
    afternoon: false,
    evening: true,
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center py-4">
        <button className="bg-white border border-[#E8B86D]  hover:bg-[#E8B86D] px-6 py-2 font-bold rounded-lg" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          Previous
        </button>
        <div className="text-lg font-bold text-gray-800">{format(currentMonth, 'MMMM yyyy')}</div>
        <button className="bg-white border border-[#E8B86D]  hover:bg-[#E8B86D] px-6 py-2 font-bold rounded-lg"  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          Next
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center py-2 text-gray-800" key={i}>
          {format(addDays(startDate, i), 'EEE')}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        days.push(
          <div
            className={`p-4 mt-2 text-center rounded-lg cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? 'text-gray-800 '
                : isSameDay(day, selectedDate)
                ? 'bg-[#E8B86D] text-gray-800 font-bold' 
                : bookedDates.some((bookedDate) => isSameDay(bookedDate, day))
                ? 'bg-[#CEDF9F] text-gray-800 font-bold'
                : 'bg-gray-200 text-black font-bold hover:bg-[#E8B86D] hover:text-black'
            }`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="grid grid-cols-7 gap-2" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
    // Logic to fetch availability for the selected date could be added here
  };

  const renderAvailability = () => {
    return (
      <div className="mt-6 text-center">
        <h3 className="text-lg text-gray-800 font-bold">Selected Date: {format(selectedDate, 'MMMM d, yyyy')}</h3>
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-700">Availability:</h4>
          <div className="mt-2">
            <span
              className={`inline-block px-4 py-2 rounded-md ${
                availabilityData.morning ? 'bg-white border border-[#E8B86D]  hover:bg-[#E8B86D]  font-bold rounded-lg ' : 'bg-red-400'
              } text-black`}
            >
              Morning: {availabilityData.morning ? 'Available' : 'Booked'}
            </span>
          </div>
          <div className="mt-2">
            <span
              className={`inline-block px-4 py-2 rounded-md ${
                availabilityData.afternoon ? 'bg-[#CEDF9F]' : 'border border-[#CEDF9F] bg-[#CEDF9F]  font-bold rounded-lg '
              } text-black`}
            >
              Afternoon: {availabilityData.afternoon ? 'Available' : 'Booked'}
            </span>
          </div>
          <div className="mt-2">
            <span
              className={`inline-block px-4 py-2 rounded-md ${
                availabilityData.evening ? 'border border-[#CEDF9F] bg-[#CEDF9F]  font-bold rounded-lg' : 'bg-red-400'
              } text-black`}
            >
              Evening: {availabilityData.evening ? 'Available' : 'Booked'}
            </span>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary">
            Book Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="">
      <div className="container  mt-10 mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white text-center">Check Facility Availability</h2>
        <div className="mt-4 bg-white rounded-lg shadow p-6 border border-[#CEDF9F]">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
        {renderAvailability()}
      </div>
    </section>
  );
};

export default FacilityAvailabilityCalendar;
