import React from 'react'
import { useNavigateParams } from '../../../hooks';

const FilterContext=React.createContext({
});




export function useFilter(){

    return React.useContext(FilterContext)
}

const FilterProvider = ({children}) => {
 
    const myNavigate= useNavigateParams()

    const [filter,setFilter]=React.useState({
        category:[],
        maxRating:"",
        language:[],
    })

    React.useEffect(()=>{

        myNavigate("",filter)

    },[filter,myNavigate])


  return (
    <FilterContext.Provider value={{
        filter:filter,
        setFilter:setFilter
    }}>{children}</FilterContext.Provider>
  )
}

export default FilterProvider