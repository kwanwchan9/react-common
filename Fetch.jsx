import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fetch = () => {
  const [data, setData] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  // const getDataFromAPI = async () => {
  //   const res = await axios(url)
  //   setData(res.data)
  // }

  const getDataFromAPI = () => {
    axios.get(url).then((res) => {
      setData(res.data) // return array of data
    })
  }

  useEffect(() => {
    getDataFromAPI()
  }, [])

  return (
    <div>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fetch
