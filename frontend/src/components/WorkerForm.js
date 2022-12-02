import { useState } from "react";
import {useAuthContext} from '../hooks/useAuthContext'

const WorkerForm = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [error, setError] = useState(null)
    const {user} = useAuthContext()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            setError("Musisz być zalogowany")
            return
        }

        const worker = {name, position}

        const response = await fetch ('/api/employee/workers/add', {
            method: 'POST',
            body: JSON.stringify(worker),
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type':'application/json'
            }
        })
        // we get back response as json and storing it it json
        const json = await response.json()
     
        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setName('')
            setPosition('')
            setError(null)
            console.log('new worker added', json)
        }
    
} 


    return ( 
        <div className="flex justify-center h-30 max-w-[1240px] mx-auto px-4 text-white">
        <form className="w-3/4 md:w-1/2 shadow-md rounded px-2 pt-6 pb-3 mb-4" onSubmit={handleSubmit}>
            <h3 className="py-4 text-xl">Dodaj nowego pracownika:</h3>
            
            <label className="block text-gray-500 text-sm py-2">Imię i Nazwisko: </label>
            <input className="text-black w-[100%]"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
             />

            <label className="block text-gray-500 text-sm py-2">Stanowisko: </label>
            <input className="text-black w-[100%]"
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
             />

            <div class="flex justify-center">
             <button className="bg-gray-500 hover:bg-[#00df9a] transition-all duration-500 text-white rounded py-2 px-5 m-8"> Dodaj pracownika</button>
            </div>
        </form>
        </div>
     );
}
 
export default WorkerForm;