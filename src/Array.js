

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

  let count = 0;
  for (element in tfsaArray) {
    count = count + element.limit;
  }
  console.log(count);