import React from 'react'
import useNotesStore from '../../stores/notes-store'
import { AiOutlineFileSearch } from 'react-icons/ai'

const Sidebar = () => {
    const { notes, search, selectNote, setSearch } = useNotesStore()

    const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className='w-1/3 bg-white p-4 shadow-lg'>
            <div className='flex items-center mb-4'>
                <AiOutlineFileSearch className='text-xl mr-2' />
                <input type="text" placeholder='Search Notes' value={search} onChange={e => setSearch(e.target.value)}
                    className='w-full border-b focus:outline-none'
                />
            </div>

            {/* render lists */}
            <div>
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note, index) => (<div
                        key={index}
                        onClick={() => selectNote(index)}
                        className='flex items-center p-4 mb-2 rounded-lg shadow-md cursor-pointer border hover:bg-gray-300'
                    >
                        {/*color circle  */}
                        <div style={{
                            backgroundColor: note.color,
                            border: '1px solid #000'
                        }} className='w-4 h-4 rounded-full mr-2' />

                        <div className='truncate' dangerouslySetInnerHTML={{ __html: note.text }}></div>
                    </div>))
                ) : (<p>No New Notes</p>)}
            </div>
        </div>
    )
}

export default Sidebar