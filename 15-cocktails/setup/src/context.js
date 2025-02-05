import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [searchTerm,setSearchTerm] =useState('azzzz');
  const [cocktail,setCocktail] = useState([]);


  const fetchDrinks = async () => {
  setLoading(true)
  try {
    const response = await fetch(`${url}${searchTerm}`)
    const data = await response.json();
    const {drinks} = data;
    if(drinks) {
    } else {
      setCocktail([])
    }
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
useEffect(()=> 
{
  fetchDrinks()
  }, [searchTerm])
}

  return (<AppContext.Provider value={{
    loading,

    setSearchTerm,
    cocktail,
  }}>{children}
  </AppContext.Provider>
  )


// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
