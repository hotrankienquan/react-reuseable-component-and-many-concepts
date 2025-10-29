import { motion } from 'framer-motion'
import { useState } from 'react'

const items = [
    {
        title: "title1",
        content: "content1 content1 "
    },
    {
        title: "title1",
        content: "content1 content1"
    },
    {
        title: "title1",
        content: "content1 content1"
    },

]
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <>
                    <div key={index}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full text-left text-black p-2 bg-gray-300 rounded focus:outline-none"
                        >{item.title}</button>

                        <motion.div
                            className='overflow-hidden'
                            initial={{ height: 0 }}
                            animate={{
                                height: openIndex === index ? 'auto' : 0
                            }}
                            transition={{
                                duration: 0.5
                            }}
                        >
                            <h1 className='p-2 bg-gray-200 rounded text-black'
                            >{item.content}</h1>
                        </motion.div>
                    </div>


                </>
            ))}



        </div>
    )
}

export default Accordion