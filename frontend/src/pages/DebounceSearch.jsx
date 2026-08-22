
import React, { useEffect, useState } from 'react'

import "../styles/debounce.scss"

const DebounceSearch = () => {

    const [loading, setloading] = useState(false)
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")


    const api = "https://jsonplaceholder.typicode.com/users"

    const get_data = async () => {

        try {


            let res = await fetch(`${api}`)

            let data = await res.json()
            setUsers(data)


        } catch (error) {
            console.log(error);
        }
        finally {
            setloading(false)
        }
    }


    const filterdata = users.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))


    useEffect(() => {
        setloading(true)


        const timer = setTimeout(() => {
            get_data()

        }, 3000);

        return () => clearTimeout(timer)

    }, [search])


    const Loader = () => {

        return (
            <div className='Loader-comp'>
                 <div className='loader'></div>
            </div>
        )
    }

    return (
        <div className='debounce-container'>
            <h1>Debounce Search....</h1>

            <div className="inputdiv">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search users....' />
            </div>

            {loading && <Loader />}

            {filterdata?.map((ele) => (
                <div key={ele.id}>
                    <h3>name : {ele.name}</h3>
                    <p>Email : {ele.email}</p>
                    <p>username : {ele.username}</p>
                </div>
            ))}
        </div>
    )
}

export default DebounceSearch