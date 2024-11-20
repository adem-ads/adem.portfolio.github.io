import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "MedCare Web Application",
      description: "Designed and developed a web application using UML, MySQL, HTML, CSS, and JS",
      link: "#"
    },
    {
      title: "Production Line Management System",
      description: "Implemented a surveillance and management system using Power BI, Python, and React JS",
      link: "#"
    }
  ]

  return (
    <div id="projects" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Projects
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ title, description, link }, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300">{description}</p>
                <div className="flex items-center justify-center mt-4">
                  <a href={link} className="text-cyan-500 hover:text-cyan-400">View Project →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects