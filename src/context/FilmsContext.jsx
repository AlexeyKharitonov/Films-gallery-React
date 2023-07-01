import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../constants/urls';

const FilmsContext = createContext([]);

export const FilmsContextProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log('Fetch data error', error);
    }
  }, []);

  return <FilmsContext.Provider value={[]}>{children}</FilmsContext.Provider>;
};
