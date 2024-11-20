import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: "Excel", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Power BI", level: "Advanced" },
    { name: "React JS", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" }
  ]

  return (
    <div id="skills" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Skills
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ name, level }, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <p className="text-2xl font-bold">{name}</p>
              <p className="mt-2">{level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills