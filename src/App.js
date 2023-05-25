import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import City from './City';

function App() {

  const key = "476a4bdcb910b1a944961d1a3627f504";

  const [city,setCity] = useState();
  const [search,setSearch] = useState("");

  const handleChange =(e)=>{
    e.preventDefault();
    setSearch(e.target.value)
  }

  useEffect(()=>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search])

  console.log(search)

  return (
    <div className="App py-16 h-full">
      <div className='flex flex-col w-1/3 items-center border-4 border-teal-950 mx-auto mt-9 p-8 py-32 rounded'>
        <input placeholder='Write City Name' onChange={handleChange} className='border-4 border-blue-300 mb-8 mt-2 text-center outline-none' type='text'  />
        <City city={city}></City>
      </div>
    </div>
  );
}

export default App;
