import React, { ReactElement, useContext } from 'react'
import { InputValueContext } from '../context/InputValueContext'

export function Header(): ReactElement {

  const {state} = useContext(InputValueContext)
  function addNumber(){
    return state.inputValue*2
  }
  return (
    <div>
      <h1 >Just to have a header{state.inputValue}</h1>
      <button onClick={()=>addNumber()}>Click to add</button>
    </div>
  )
}
