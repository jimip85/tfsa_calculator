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
  }

  return (
    <div>
      <div className="text-3xl p-2">
        <div className="container">
          <h2 className='center text-blue-300 text-3xl' >TFSA Calculator</h2>
          <form>
            <div>
              <label>Birth Year</label>
              <input className="border-2" type='date' value={dob} onChange={(event) => setDob(event.target.value)} />
            </div>
            <div>
              <label>Priciple Contributed</label>
              <input className="border-2" value={principle} onChange={(event) => setPrinciple(event.target.value)} />
            </div>
            <div className="space-x-3">
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={calcTfsa} type='submit'>Submit</button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={reload} type='submit'>Reset</button>
            </div>
          </form>
          <div className='Center'></div>
          <h3>Your Contribution Limit is: {limit}</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
