import React from 'react';

const videos = [
  
  {
    link: 'https://www.youtube.com/watch?v=lv4xrmvdamY',
    heading: 'Foods to Avoid During Pregnancy, and WHAT TO EAT instead.',
    description: `
      Learn which foods to avoid during pregnancy and what to eat to maintain a healthy weight. Discover the superfood for pregnancy.
    `,
    thumbnail: 'https://img.youtube.com/vi/lv4xrmvdamY/maxresdefault.jpg'
  },
  {
    link: 'https://www.youtube.com/watch?v=cfn04QUO4B8',
    heading: 'What to Expect in Your First Trimester of Pregnancy',
    description: `
      Congratulations! This week-by-week guide will take you through the developments, symptoms, and things to consider during your first trimester.
    `,
    thumbnail: 'https://img.youtube.com/vi/cfn04QUO4B8/maxresdefault.jpg'
  },
  {
    link: 'https://www.youtube.com/watch?v=F_ssj7-8rYg',
    heading: 'The Surprising Effects of Pregnancy',
    description: `
      Discover how pregnancy changes every organ in the body and what we still don’t know about it.
    `,
    thumbnail: 'https://img.youtube.com/vi/F_ssj7-8rYg/maxresdefault.jpg'
  },
  {
    link: 'https://www.youtube.com/watch?v=Vm_zY2IC78c',
    heading: 'OB-GYNs Debunk 25 Pregnancy Myths',
    description: `
      High-risk OBGYNs debunk 25 common pregnancy myths and explain important truths about pregnancy.
    `,
    thumbnail: 'https://img.youtube.com/vi/Vm_zY2IC78c/maxresdefault.jpg'
  },
  {
    link: 'https://www.youtube.com/watch?v=izOa3-AX8zQ',
    heading: 'Pregnancy - How a Wonder is Born! (Animation)',
    description: `
      This animation shows how a small miracle is born, from fertilization to birth.
    `,
    thumbnail: 'https://img.youtube.com/vi/izOa3-AX8zQ/maxresdefault.jpg'
  },
  {
    link: 'https://www.youtube.com/watch?v=-g7Eny101sk',
    heading: 'The MOST Important Video for Pregnant Women',
    description: `
      Learn about the relationship between micronutrients and your genes, and the importance of getting these micronutrients in your diet—especially while pregnant. Discover why eating right during pregnancy is crucial for your baby's health.
    `,
    thumbnail: 'https://img.youtube.com/vi/-g7Eny101sk/maxresdefault.jpg'
  },
];

const VideoCard = ({ heading, description, link, thumbnail }) => {
  return (
    <div className="p-2 rounded-xl shadow-lg bg-white flex flex-col items-center text-center h-full">
      <img src={thumbnail} alt={heading} className="mb-4 rounded-xl w-full h-48 object-cover" />
      <h3 className="text-xl font-bold mb-4">{heading}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="bg-primaryColor text-white font-semibold py-2 px-4 rounded-full">
          Watch Now
        </button>
      </a>
    </div>
  );
};

const VideoPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Pregnancy and Maternity Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
