import React from 'react';
import portfolioAPI from '../serviceApi/services.api';
import { useEffect } from 'react';
import { useState } from 'react';

const Test = () => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await portfolioAPI.getAll();
      setFilter(response);
      console.log(response);
    }

    fetchData();
  }, []);

  return (
    <div>
      {filter.map((item, index) => (
        <div key={index.id}>
          <button>{item.service_title}</button>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Test;
