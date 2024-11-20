import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Contact
          </motion.h2>
        </div>
        <div className="flex flex-col space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <span className="text-cyan-500">Email:</span>
            <a href="mailto:adem.bouteraa@esen.tn" className="text-gray-300 hover:text-white">adem.bouteraa@esen.tn</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <span className="text-cyan-500">Phone:</span>
            <a href="tel:+21652406466" className="text-gray-300 hover:text-white">+216 52406466</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <span className="text-cyan-500">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/bouteraa-adem-9448781bb" className="text-gray-300 hover:text-white">bouteraa-adem</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4"
          >
            <span className="text-cyan-500">Location:</span>
            <span className="text-gray-300">Bardo, Tunis</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact