import React from 'react';
import { Link } from 'react-router-dom';
import week1 from '../assets/images/week1.png';
import week2 from '../assets/images/week2.png';
import week3 from '../assets/images/week3.png';
import week4 from '../assets/images/week4.png';
import week5 from '../assets/images/week5.png';
import week6 from '../assets/images/week6.png';
import week7 from '../assets/images/week7.png';
import week8 from '../assets/images/week8.png';
import week9 from '../assets/images/week9.png';
import week10 from '../assets/images/week10.png';
import week11 from '../assets/images/week11.png';
import week12 from '../assets/images/week12.png';
import week13 from '../assets/images/week13.png';
import week14 from '../assets/images/week14.png';
import week15 from '../assets/images/week15.png';
import week16 from '../assets/images/week16.png';
import week17 from '../assets/images/week17.png';
import week18 from '../assets/images/week18.png';
import week19 from '../assets/images/week19.png';
import week20 from '../assets/images/week20.png';
import week21 from '../assets/images/week21.png';
import week22 from '../assets/images/week22.png';
import week23 from '../assets/images/week23.png';
import week24 from '../assets/images/week24.png';
import week25 from '../assets/images/week25.png';
import week26 from '../assets/images/week26.png';
import week27 from '../assets/images/week27.png';
import week28 from '../assets/images/week28.png';
import week29 from '../assets/images/week29.png';
import week30 from '../assets/images/week30.png';
import week31 from '../assets/images/week31.png';
import week32 from '../assets/images/week32.png';
import week33 from '../assets/images/week33.png';
import week34 from '../assets/images/week34.png';
import week35 from '../assets/images/week35.png';
import week36 from '../assets/images/week36.png';
import week37 from '../assets/images/week37.png';
import week38 from '../assets/images/week38.png';
import week39 from '../assets/images/week39.png';
import week40 from '../assets/images/week40.png';

const weeks = [
  { week: 1, image: week1 },
  { week: 2, image: week2 },
  { week: 3, image: week3 },
  { week: 4, image: week4 },
  { week: 5, image: week5 },
  { week: 6, image: week6 },
  { week: 7, image: week7 },
  { week: 8, image: week8 },
  { week: 9, image: week9 },
  { week: 10, image: week10 },
  { week: 11, image: week11 },
  { week: 12, image: week12 },
  { week: 13, image: week13 },
  { week: 14, image: week14 },
  { week: 15, image: week15 },
  { week: 16, image: week16 },
  { week: 17, image: week17 },
  { week: 18, image: week18 },
  { week: 19, image: week19 },
  { week: 20, image: week20 },
  { week: 21, image: week21 },
  { week: 22, image: week22 },
  { week: 23, image: week23 },
  { week: 24, image: week24 },
  { week: 25, image: week25 },
  { week: 26, image: week26 },
  { week: 27, image: week27 },
  { week: 28, image: week28 },
  { week: 29, image: week29 },
  { week: 30, image: week30 },
  { week: 31, image: week31 },
  { week: 32, image: week32 },
  { week: 33, image: week33 },
  { week: 34, image: week34 },
  { week: 35, image: week35 },
  { week: 36, image: week36 },
  { week: 37, image: week37 },
  { week: 38, image: week38 },
  { week: 39, image: week39 },
  { week: 40, image: week40 }
];

const WeekCard = ({ week, image }) => {
  return (
    <Link to={`/week/${week}`}>
      <div className="p-4 rounded-xl shadow-lg bg-white flex flex-col items-center text-center transition transform hover:shadow-2xl">
        <img src={image} alt={`Week ${week}`} className="mb-4 rounded-xl w-full h-32 object-cover" />
        <h3 className="text-xl font-bold">Week {week}</h3>
      </div>
    </Link>
  );
};

const MaternityCalendar = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Maternity Calendar</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {weeks.map((week) => (
            <WeekCard key={week.week} week={week.week} image={week.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaternityCalendar;
