import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditListing() {

    const navigate = useNavigate()

    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rent, setRent] = useState("")
    const [city, setCity] = useState("")
    const [landMark, setLandMark] = useState("")
    const [category, setCategory] = useState("")

    // FETCH CURRENT LISTING

    useEffect(() => {

        const fetchListing = async () => {

            try {

                const result = await axios.get(
                    `http://localhost:8000/api/listing/findlistingbyid/${id}`
                )

                const data = result.data

                setTitle(data.title)
                setDescription(data.description)
                setRent(data.rent)
                setCity(data.city)
                setLandMark(data.landMark)
                setCategory(data.category)

            } catch (error) {

                console.log(error)
            }
        }

        fetchListing()

    }, [id])

    // UPDATE LISTING

    const handleUpdate = async (e) => {

        e.preventDefault()

        try {

            const result = await axios.post(
                `http://localhost:8000/api/listing/update/${id}`,
                {
                    title,
                    description,
                    rent,
                    city,
                    landMark,
                    category
                },
                {
                    withCredentials: true
                }
            )

            console.log(result)

            alert("Listing Updated Successfully")

            navigate("/")

setTimeout(() => {

    navigate("/mylisting")

}, 100)

        } catch (error) {

            console.log(error)

            alert(error.response?.data?.message)
        }
    }

    return (

        <div className='w-[100vw] min-h-[100vh] flex items-center justify-center bg-[#f5f5f5]'>

            <form
                onSubmit={handleUpdate}
                className='w-[500px] bg-white p-[30px] rounded-lg shadow-lg flex flex-col gap-[15px]'
            >

                <h1 className='text-[30px] font-bold text-center'>
                    Edit Listing
                </h1>

                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border p-[10px] rounded-lg'
                    required
                />

                <textarea
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='border p-[10px] rounded-lg'
                    required
                />

                <input
                    type="number"
                    placeholder='Rent'
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    className='border p-[10px] rounded-lg'
                    required
                />

                <input
                    type="text"
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='border p-[10px] rounded-lg'
                    required
                />

                <input
                    type="text"
                    placeholder='LandMark'
                    value={landMark}
                    onChange={(e) => setLandMark(e.target.value)}
                    className='border p-[10px] rounded-lg'
                    required
                />

                <select
                    className='w-full border p-2 rounded'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >

                    <option value="">Select Category</option>

    <option value="Villa">Villa</option>

    <option value="Farm House">Farm House</option>

    <option value="Pool House">Pool House</option>

    <option value="Rooms">Rooms</option>

    <option value="Flat">Flat</option>

    <option value="PG">PG</option>

    <option value="Cabins">Cabins</option>

    <option value="Shops">Shops</option>

                </select>

                <button
                    type='submit'
                    className='bg-blue-500 text-white p-[12px] rounded-lg hover:bg-blue-700'
                >
                    Update Listing
                </button>

            </form>

        </div>
    )
}

export default EditListing