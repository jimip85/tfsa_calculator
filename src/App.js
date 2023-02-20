import React, { useState } from 'react';

const tfsaArray = [
  {
    "year": 2009,
    "limit": 5000,
  },
  {
    "year": 2010,
    "limit": 5000,
  },
  {
    "year": 2011,
    "limit": 5000,
  },
  {
    "year": 2012,
    "limit": 5000,
  },
  {
    "year": 2013,
    "limit": 5500,
  },
  {
    "year": 2014,
    "limit": 5500,
  },
  {
    "year": 2015,
    "limit": 10000,
  },
  {
    "year": 2016,
    "limit": 5500,
  },
  {
    "year": 2017,
    "limit": 5500,
  },
  {
    "year": 2018,
    "limit": 5500,
  },
  {
    "year": 2019,
    "limit": 6000,
  },
  {
    "year": 2020,
    "limit": 6000,
  },
  {
    "year": 2021,
    "limit": 6000,
  },
  {
    "year": 2022,
    "limit": 6000,
  },
  {
    "year": 2023,
    "limit": 6500,
  },
];

function App() {

  //defining states
  const [dob, setDob] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [limit, setLimit] = useState('');

  let calcTfsa = (event) => {
    event.preventDefault()

    let today = new Date().getFullYear();
    let birthYear = new Date(dob).getFullYear();
    let diff = today - birthYear;
    let sum = 0;

    if (diff < 18) {
      alert("You are under the legal age to contribute to the TFSA program");
    } else {
      const filterLimit = tfsaArray.filter(item => { return item.year >= birthYear + 18 });
      filterLimit.forEach(item => { sum += item.limit });
      sum -= principle;
      if (sum < 0) {
        setLimit(sum);
        alert("You've over contributed... Please contact CRA!")
      } else {
        setLimit(sum);
      }
    };

  }

  let reload = () => {
    window.location.reload()
  };

  return (
      <div class="container max-w-lg my-24 mx-auto space-y-6 rounded-md shadow-2xl bg-gradient-to-r from-slate-100 p-3 border-2 text-center">
        <h1 className='text-3xl font-bold my-6'>TFSA Calculator</h1>
        <form className="space-y-6 text-2xl">
          <div className="grid space-x-3 space-y-2 mx-4">
            <label className="ml-3 font-semibold text-left">Birthday:</label>
            <input className="border-black border-2 rounded-md" type='date' value={dob} onChange={(event) => setDob(event.target.value)} />
          </div>
          <div className="grid space-x-3 space-y-2 mx-4">
            <label className="ml-3 font-semibold text-left">Principle Contributed:</label>
            <input className="border-black border-2 rounded-md" value={principle} onChange={(event) => setPrinciple(event.target.value)} />
          </div>
          <div className="space-x-5">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-2xl' onClick={calcTfsa} type='submit'>Submit</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-2xl' onClick={reload} type='submit'>Reset</button>
          </div>
        </form>
        <h2 className="text-2xl">Your Contribution Limit is:</h2>
        <h3 className="opacity-75 grid text-3xl rounded w-3/6 bg-center mx-auto h-24 place-content-center drop-shadow-xl">{limit}</h3>
      </div>
  );
}

export default App;
