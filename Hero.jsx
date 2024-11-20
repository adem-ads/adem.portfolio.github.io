import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Adem Bouteraa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 py-4 max-w-md"
          >
            Business Intelligence Professional
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              View Projects
              <span className="group-hover:rotate-90 duration-300">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-2/3 md:w-full"
        >
          <img src="/profile.jpg" alt="Profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero