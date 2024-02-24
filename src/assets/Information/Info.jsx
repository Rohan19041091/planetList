import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Planet.css';
import PlanetsContainer from '../PlanetsContainer/PlanetsContainer';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const Info = () => {
    const [planets, setPlanets] = useState([]);
    const [nextPage, setNextPage] = useState('');
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('https://swapi.dev/api/planets/?format=json');
        setPlanets(response.data.results);
        setNextPage(response.data.next);
      }
      fetchData();
    }, []);
  
    const loadMorePlanets = async () => {
      const response = await axios.get(nextPage);
      setPlanets([...planets, ...response.data.results]);
      setNextPage(response.data.next);
    };
  
    return (
      <div className="App">
        <h1>Star Wars Planets Directory</h1>
        <PlanetsContainer planets={planets} />
        {nextPage && <LoadMoreButton onClick={loadMorePlanets} />}
      </div>
    );
  }
  

export default Info