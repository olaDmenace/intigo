import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

/**
 * This component is the button component
 */

function Button(props) {
  return (
    <motion.button
      initial={{ opacity: 0, y: '-4vw' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.09, duration: 1.5 }}
      className="bg-[#7700CF] py-2 px-6 rounded-sm gap-2 flex items-center transition ease-in-out delay-150 duration-300 text-white hover:bg-[#8b14e3]">
      {props.text}
      <ArrowRightIcon className='h-4' />
    </motion.button>
  )
}

export default Button