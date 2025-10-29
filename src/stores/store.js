

import { create } from "zustand";


const useFormStore = create((set) => ({
    formFields: [],
    addField: (field) => set((state) => ({
        formFields: [...state.formFields, field]
    })),
    removeField: (index) => set((state) => ({
        formFields: state.formFields.filter((_, i) => i !== index)
    })),
    updateField: (index, updatedField) => set((state) => ({
        formFields: state.formFields.map((field, i) => i === index ? updatedField : field)
    })),
    resetForm: () => set({formFields: []})
}))

export default useFormStore;


