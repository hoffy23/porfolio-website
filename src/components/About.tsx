import React from 'react';

import AboutPicture from '../assets/AboutPicture.jpg';

const About: React.FC = () => {

  return (
    <section className='max-w-7xl mx-auto p-8'>

      <div className='flex  flex-col md:flex-row items-center space-y-6 md:space-x-8'>
        <img src={AboutPicture} alt="Picture of Mendel Hoffman"
          className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full border-4 border-white-500 ' />

        <div className='text-center md:text-left'>
          <h2 className='text-3xl font-semibold text-black-700 mb-4'>Mendel Hoffman</h2>
          <p className='text-lg text-grey-700'>
            Hi, I'm Mendel, a passionate Front-end Software Developer based in Sydney, actively seeking a full-time Junior Front-End Developer role.
            I recently graudated with a Bachelor of Information Technology majoring in Software Engineering from La Trobe University with a Distinction WAM,
            gaining a strong foundation in software development. I specialize in front-end technologies and enjoy building responsive, user-freindly
            websites using React, TypeScript and Tailwind CSS. Outside of coding, I stay active with running and cycling, and continuously expand my knowledge by learning
            new technologies.If you're looking for a motivated junior developer to join your team, feel free to reach out - I'd be excited to meet over coffee and discuss
            how I can contribute to your team.
          </p>
        </div>

      </div>
    </section>

  );
};

export default About;
