import { createFileRoute } from '@tanstack/react-router'

import { motion } from 'framer-motion'
import PulsingButton from '../components/Button/PulsingButton'
import Modal from '../components/Modal/Modal'
import Accordion from '../components/Accordion/Accordion'
import ToastNotification from '../components/ToastNotification/ToastNotification'
import BouncingBall from '../components/BouncingBall/BouncingBall'
import FormBuilder from '../components/FormBuilder/FormBuilder'

export const Route = createFileRoute('/')({
  component: Index,
})

// function Index() {
//   return (
//     <div className="p-2">
//       <h3 className='text-3xl font-bold underline'>Welcome Home!</h3>
//     </div>
//   )
// }

function Index() {
  return (
    <div>
      {/* <motion.div 
          className='box'
          animate={{
            translate: '200px',
            skewX: 20,
            scale: [1, 2]
          }}
          transition={{
            delay:2,
            duration: 2,
            ease:'backIn'
          }}
        >

        </motion.div> */}

      <div className='mx-2'>
        <PulsingButton />
      </div>

      <div className='mt-4 ml-4'>
        <Modal />
      </div>

      <div className='mt-4 ml-4'>
        <Accordion />
      </div>

      <div className='mt-4 ml-4'>
        <ToastNotification />
      </div>

      <div className='mt-4 ml-4'>
        <BouncingBall />
      </div>

      <div className='mt-4 ml-4'>
        <FormBuilder />
      </div>
    </div>
  )
}