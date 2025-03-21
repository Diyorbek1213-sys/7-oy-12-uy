import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(persist(
    (set) => ({
        tasks: [],
        done: [],
        add: (values) => set((state) => ({ tasks: [...state.tasks, values] })),
        deleteTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
        doneTask: (index) => set((state) => ({
            done: [...state.done, state.tasks[index]],
            tasks: state.tasks.filter((_, i) => i !== index)
        })),
        handleReturnT: (index) => set((state) => ({
            done: state.done.filter((_, i) => i !== index),
            tasks: [...state.tasks, state.done[index]]
        }))
    }),
    { name: 'root' }
))

export default useStore