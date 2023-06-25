import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'
// import { useContext } from 'react'
// import { AppContext } from './context'
//import { useGlobalContext } from './context'
import "./App.css";
const App = () => {
 
  return (
    <>
   
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App
