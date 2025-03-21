import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(persist(
    (set) => ({
        tasks: [],
        add: (values) => set((state) => ({ tasks: [...state.tasks, values] })),
        deleteTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) }))
    }),
    { name: 'root' }
))

export default useStore