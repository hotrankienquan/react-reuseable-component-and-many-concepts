import { createFileRoute } from '@tanstack/react-router'

import { motion } from 'framer-motion'
import PulsingButton from '../components/Button/PulsingButton'
import Modal from '../components/Modal/Modal'
import Accordion from '../components/Accordion/Accordion'
import ToastNotification from '../components/ToastNotification/ToastNotification'
import BouncingBall from '../components/BouncingBall/BouncingBall'
import FormBuilder from '../components/FormBuilder/FormBuilder'
import NoteApp from '../components/NoteApp/NoteApp'
import Counter from '../components/Counter/Counter'
import AllProduct from '../components/Allproduct/AllProduct'
import { useState } from 'react'
import AddNewProduct from '../components/Addnewproduct/AddNewProduct'

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
  const [counter, setCounter] =useState(0)
  console.log(counter);
  
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

      <div className='mt-4 ml-4'>
        <NoteApp />
      </div>

       <div className='mt-4 ml-4 mb-10'>
        <Counter />
      </div>
          <div>
            <button onClick={() =>setCounter(() => counter + 1)}>change the counter state</button>
          </div>
       <div className='mt-4 ml-4 mb-10'>
        <AllProduct />
      </div>

       <div className='mt-4 ml-4 mb-10'>
        <AddNewProduct />
      </div>
    </div>
  )
}