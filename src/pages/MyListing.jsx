import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from '../Context/UserContext';
import Card from '../Component/Card';
import axios from 'axios';

function MyListing() {

    const navigate = useNavigate()

    const { userData } = useContext(userDataContext)

    const [myListings, setMyListings] = useState([])

    useEffect(() => {

        const fetchMyListings = async () => {

            try {

                const result = await axios.get(
                    "http://localhost:8000/api/listing/get"
                )

                const filteredListings = result.data.listing.filter(
                    (list) => list.host === userData?._id
                )

                setMyListings(filteredListings)

            } catch (error) {

                console.log(error)
            }
        }

        if (userData) {

            fetchMyListings()
        }

    }, [userData])

    return (

        <div className='w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative px-[20px]'>

            <div
                className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center'
                onClick={() => navigate("/")}
            >
                <FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' />
            </div>

            <div className='w-[60%] h-[10%] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[50px] md:w-[600px] text-nowrap'>
                MY LISTING
            </div>

            <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]'>

                {
                    myListings.length > 0 ? (

                        myListings.map((list) => (

                            <Card
                                key={list._id}
                                title={list.title}
                                landMark={list.landMark}
                                city={list.city}
                                image1={list.image1}
                                image2={list.image2}
                                image3={list.image3}
                                rent={list.rent}
                                id={list._id}
                                isBooked={list.isBooked}
                                ratings={list.ratings}
                                host={list.host}
                            />

                        ))

                    ) : (

                        <h1 className='text-[25px] text-gray-500 mt-[50px]'>
                            No Listings Found
                        </h1>

                    )
                }

            </div>

        </div>
    )
}

export default MyListing