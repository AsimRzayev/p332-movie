import React from 'react'

const FilterContext=React.createContext({
    filter:{
        category:[],
        maxRating:null,
        language:null,
        startDate:null,
        endDate:null
    },
    setFilter:null
});

export function useFilter(){

    return React.useContext(FilterContext)
}

const FilterProvider = ({children}) => {

    const [filter,setFilter]=React.useState({
        category:[],
        maxRating:null,
        language:null,
        startDate:null,
        endDate:null
    })

  return (
    <FilterContext.Provider value={{
        filter:filter,
        setFilter:setFilter
    }}>{children}</FilterContext.Provider>
  )
}

export default FilterProvider