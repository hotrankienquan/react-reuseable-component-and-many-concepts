import { useState } from "react"
import useFormStore from "../../stores/store"

const FormBuilder = () => {

    const {formFields, addField, removeField, updateField, resetForm} = 
    useFormStore()

    const [newField, setNewField] = useState({
        label:'',
        type:'text',
        value:''
    })


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Form Builder</h1>
        <div className="flex flex-col mb-6">
            <input type="text" name="label" placeholder="Field label"
            value={newField.value}
            // onChange={handleFieldChange}
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

            />

            <select name="type" value={newField.type}
            onChange={handleChange}
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="textarea">TextArea</option>
                <option value="date">Date</option>
                <option value="field">Field</option>
            </select>
        </div>
    </div>
  )
}

export default FormBuilder