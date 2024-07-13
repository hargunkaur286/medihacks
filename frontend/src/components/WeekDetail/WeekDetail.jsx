import React from 'react';
import { useParams } from 'react-router-dom';
import weekContent from "../../assets/data/weekContent";

const WeekDetail = () => {
  const { weekNumber } = useParams();
  const week = weekContent.find(w => w.week === parseInt(weekNumber));

  if (!week) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Week not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-primaryColor">{week.title}</h1>
        <div className="text-lg space-y-4 whitespace-pre-wrap">
          {week.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekDetail;
