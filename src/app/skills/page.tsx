import React from "react";

const skills = [
  { name: "HTML", logo: "/icons/html.png" },
  { name: "CSS", logo: "/icons/css.png" },
  { name: "JAVA SCRIPT", logo: "/icons/js.png" },
  { name: "NODE JS", logo: "/icons/nodejs.png" },
  { name: "REACT JS", logo: "/icons/reactjs.png" },
  { name: "VUE", logo: "/icons/vue.png" },
  { name: "NEXT JS", logo: "/icons/nextjs.png" },
  { name: "TAILWIND CSS", logo: "/icons/t.png" },
  { name: "JAVA", logo: "/icons/java.png" },
  { name: "SQL", logo: "/icons/sql.png" },
  { name: "MONGODB", logo: "/icons/mongodb.png" },
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="bg-gray-300 text-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        My Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-5 text-black place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-400 w-32 h-32 p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-sm text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
