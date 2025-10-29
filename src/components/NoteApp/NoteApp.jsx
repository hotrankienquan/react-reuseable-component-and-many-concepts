import React from 'react'
import useNotesStore from '../../stores/notes-store'
import ReactQuill from 'react-quill-new';
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from './Sidebar';

const NoteApp = () => {

    const {
        notes, search, editorContent
        , noteColor, currentNoteIndex,
        setNotes, setSearch,
        setEditorContent, setNoteColor,
        setCurrentNoteIndex, addOrUpdateNote,
        selectNote
    } = useNotesStore();

    return (
        <div className='h-screen flex'>
            {/* {sidebar} */}
            <Sidebar />
            {/* {main area} */}

            <div className='w-2/3 p-8'>
                <ReactQuill placeholder='Write your note here....' theme='snow'
                    className='h-96 bg-white mb-[2rem]'
                    value={editorContent}
                    onChange={setEditorContent}
                />

            <div className="flex ml-[1rem] items-center mt-4 space-x-4">
                <input type="color" value={noteColor} onChange={e => setNoteColor(e.target.value)}
                    className='w-10 h-10 p-1 border rounded-full'
                />
                <p>Choose a note color</p>
            </div>
            {/* save button */}
            <button onClick={addOrUpdateNote}
                className='bg-blue-500 ml-[1rem] text-white py-2 px-4 mt-4 rounded-lg shadow-lg hover:bg-blue-600 flex items-center'
            >
                <AiOutlinePlus className='mr-2' />
                {currentNoteIndex !== null ? 'Update Note' : 'Save Note'}</button>
            </div>
        </div>
    )
}

export default NoteApp