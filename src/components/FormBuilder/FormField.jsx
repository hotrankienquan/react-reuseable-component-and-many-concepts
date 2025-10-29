
const FormField = ({
    field, index, onUpdate, onRemove
}) => {

    const handleChange = (e) => {
        onUpdate(index, { ...field, value: e.target.value })
    }

    const handleFileChange = (e) => {
        onUpdate(index, {
            ...field,
            value: e.target.files ? Array.from(e.target.files).map((file) => file.name).join(", ") : ""
        })
    }
    return (
        <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
            <label className="block mb-2 text-lg font-medium text-gray-700">
                {field.label}
            </label>

            {field.type === 'textarea' ? (
                <textarea value={field.value} onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ) : field.type === 'file' ? (
                <input type="file" onChange={handleFileChange}
                    className="border border-gray-300 rounded-lg"
                />
            ) : (<input type={field.type}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={field.value === 'file' ? '' : field.value}
                onChange={handleChange}
            />)}

            <button type="button" onClick={() => onRemove(index)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
            >Remove</button>


        </div>
    )
}

export default FormField