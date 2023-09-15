import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About</p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Sagar Ingle, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>A dedicated React.js developer with two years of hands-on experience in crafting dynamic and responsive web applications. I'm passionate about building user-friendly interfaces and creating seamless user experiences.</p>
              <p>I'm open to mentorship, collaboration, and taking on new challenges that will help me build a strong foundation in web development. If you're looking for a motivated and eager learner who is committed to becoming a skilled React web developer, I'd love to connect!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
