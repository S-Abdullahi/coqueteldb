import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const authFetch = axios.create({
        baseURL: url,
        headers: {
            accept: 'application/json'
        }
    })
    
    async function fetchData(){
        const response = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        setData(response.data.drinks)
        console.log(response.data.drinks)
    }

    useEffect(()=>{
        fetchData()
    },[search])

    return <AppContext.Provider value={{data, setData,search, setSearch}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppProvider}