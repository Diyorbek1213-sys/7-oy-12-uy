import React, { useState } from 'react'
import useStore from '../useStore'

const AdderForm = () => {
    const [inpValue, setInpValue] = useState('')
    const { tasks, add } = useStore()

    const handleAdd = (event) => {
        event.preventDefault()
        if (inpValue.length < 4) {
            return alert('Task yozuvi 4 tadan kam!')
        }
        add(inpValue)
        setInpValue('')
    }

    return (
        <form className='w-[700px] flex gap-4 justify-center'>
            <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} className='border p-2 rounded-md w-[300px]' type="text" placeholder='Type your tasks...' />
            <button onClick={handleAdd} className='bg-amber-200 text-gray-600 p-3 rounded-md hover:bg-amber-500 hover:text-gray-200 cursor-pointer transition-all'>Add</button>
        </form>
    )
}

export default AdderForm