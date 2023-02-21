import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import  {useGlobalContext}  from '../context'

const Form = () => {
  const {search, setSearch} = useGlobalContext()
  return (
    <div className='form-con'>
        <form className='form'>            
            <input type='text' placeholder='search your favourite cocktail' className='input' value={search} onChange={(e)=>{
              setSearch(e.target.value)
              console.log(search)
            }}/>
        </form>
    </div>
  )
}

export default Form