import { useState } from 'react'
import './App.css'

function App() {
  let [city, setCity] = useState("")
  let [data, setData] = useState("")
  let [temp, setTemp] = useState("")
  let [cond, setCond] = useState("")
  let [icon, setIcon] = useState("")
  let [loading,setLoading] = useState(false)
  let [form,setForm] = useState(false)
  
  const inputHandle = (e) => {
    let inputSearch = e.target.value;
    setCity(inputSearch)
  } 
  
  const weatherFunction = async (e) => {
    e.preventDefault()
    useState(true)
   try {
    
     let key = "0949266f128cb4050101212f1defb902"
     let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric `;
     let response = await fetch(apiURL)
     let data1 = await response.json()
     let convert = data1.name
     setData(data1.name)
     setTemp(data1.main.temp)
     setCond(data1.weather[0].description)
     setIcon(data1.weather[0].icon)
     console.log(cond);
    } catch (error) {
      alert("city Not found")

     }finally{
      setLoading(false)
     }
     
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-red-400 to-purple-500 flex items-center justify-center p-5">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>Weather App</h1>
          <form onSubmit={weatherFunction} className="flex flex-col items-center">
            <input
              type="text"
              className='w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors'
              onChange={inputHandle}
              placeholder='Search city'
            />
            <button
              className='mt-4 bg-gradient-to-tr w-1/2  from-red-400 to-purple-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors'
              disabled={loading}
            >
              {
                loading?"loading...": "search"
              }
              
            </button>
          </form>
          <p className='mt-6 text-3xl font-bold text-center text-gray-800'>City : {data}</p>
          <p className='mt-6 text-3xl font-bold text-center text-gray-800'>Temp : {temp}</p>
          <p className='mt-6 text-3xl font-bold text-center text-gray-800'>Clouds : {cond}</p>
          <p className='mt-6 text-3xl font-bold text-center text-gray-800'>{icon}</p>
        </div>
      </div>
    </>
  )
}

export default App
