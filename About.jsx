import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            About
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mt-10"
        >
          Motivated and experienced business intelligence professional with a proven track record in data systems management and using business intelligence to drive growth. Currently pursuing a degree in E-Business at ESEN, with expected completion in 2024.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mt-4"
        >
          I have experience in various roles including Administrative Team Leader and Data Analyst at ISIE, and Field Supervisor at Institut El Amouri. My expertise includes Excel, Python, Power BI, React JS, MySQL, and various web technologies.
        </motion.p>
      </div>
    </div>
  )
}

export default About