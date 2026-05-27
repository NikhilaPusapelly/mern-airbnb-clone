import React, { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { authDataContext } from './AuthContext'

export const userDataContext = createContext()

function UserContext({ children }) {

    const { serverUrl } = useContext(authDataContext)

    const [userData, setUserData] = useState(null)

    const getCurrentUser = async () => {

        try {

            let result = await axios.get(
                serverUrl + "/api/user/currentuser",
                { withCredentials: true }
            )

            setUserData(result.data.user)

        } catch (error) {

            console.log(error)

            setUserData(null)
        }
    }

    useEffect(() => {

    const token = document.cookie

    if (token) {

        getCurrentUser()
    }

}, [])

    let value = {
        userData,
        setUserData,
        getCurrentUser
    }

    return (
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    )
}

export default UserContext