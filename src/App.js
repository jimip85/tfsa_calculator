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
  const [dob, setDob] = useState('');
  const [principle, setPrinciple] = useState(0);
  const [limit, setLimit] = useState('');

  const calcTfsa = (event) => {
    event.preventDefault()

    let today = new Date().getFullYear();
    let birthYear = new Date(dob).getFullYear();
    let diff = today - birthYear;
    let sum = 0;
    
    //calculation logic
    if (dob == "") {
      alert("Please enter a valid date.");
    } else if (diff < 18) {
      alert("You're younger than the legal TFSA contribution age limit!");
    } else {
      const filterLimit = tfsaArray.filter(item => { return item.year >= birthYear + 18 });
      sum = filterLimit.reduce((accumulator, currentValue) => accumulator + currentValue.limit, 0);
      sum -= principle;
      if (sum < 0) {
        setLimit(sum);
        alert("You've over contributed... Please contact the CRA!")
      } else {
        setLimit(sum);
      }
    };
  }

  let reload = () => {
    // window.location.reload()
    setDob('');
    setPrinciple(0);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="rounded-xl shadow-2xl bg-white bg-opacity-90 p-3 border-2 text-center bg-gradient-to-r from-slate-300">
        <div className='text-4xl font-bold my-6'>
          <span className="text-blue-700 font-extrabold italic">TFSA </span>
          <span className="underline decoration-blue-700 decoration-4 underline-offset-4 italic">Calculator</span>
        </div>
        <form className="space-y-6 text-2xl">
          <div className="grid space-x-3 space-y-2 mx-4">
            <label className="ml-3 font-semibold text-left">Birthday:</label>
            <input className="border-black border-2 rounded-md" type='date' value={dob} onChange={(event) => setDob(event.target.value)} />
          </div>
          <div className="grid space-x-3 space-y-2 mx-4">
            <label className="ml-3 font-semibold text-left">Principle Contributed:</label>
            <input className="border-black border-2 rounded-md" value={principle} onChange={(event) => setPrinciple(event.target.value)} />
          </div>
          <div className="space-x-5 ">
            <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-2xl' onClick={calcTfsa} type='submit'>Submit</button>
            <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-2xl' onClick={reload} type='submit'>Reset</button>
          </div>
        </form>
        <h2 className="text-2xl pt-4">Your Contribution Limit is:</h2>
        <h3 className="opacity-75 grid text-5xl font-semibold rounded w-3/6 bg-center mx-auto h-24 place-content-center drop-shadow-xl">{limit}</h3>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
      </div>
    </div>
  );
}

export default App;
