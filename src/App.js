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

  //state
  const [dob, setDob] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [limit, setLimit] = useState('');
  const [message, setMessage] = useState('');

  let calcTfsa = (event) => {
    event.preventDefault()

    let sum = 0;
    const filterLimit = tfsaArray.filter(item => { return item.year <= dob});
    filterLimit.forEach(item => {sum += item.limit});
    setLimit(sum);


  }

  let reload = () => {
    window.location.reload()
  }




  return (
    <div className="text-3xl p-2">
      <div className="container">
        <h2 className='center text-blue-300 text-3xl' >TFSA Calculator</h2>
        <form>
          <div>
            <label>Birth Year</label>
            <input className="border-2" value={dob} onChange={(event) => setDob(event.target.value)} />
          </div>
          <div>
            <label>Priciple Contributed</label>
            <input className="border-2" value={principle} onChange={(event) => setPrinciple(event.target.value)} />
          </div>
          <div className="space-x-3">
            <button className='btn' onClick={calcTfsa} type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reset</button>
          </div>
        </form>
        <div className='Center'></div>
        <h3>Your Contribution Limit is: {limit}</h3>
        <p>{message}</p>
      </div>
    </div>

  );
}

export default App;
