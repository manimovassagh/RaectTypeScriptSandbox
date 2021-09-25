import React, { ReactElement } from 'react';
import { InputValueProvider } from '../context/InputValueContext';
import { Header } from "./Header"
import { Menu } from './Menu'



export default function App(): ReactElement {

  return (

    <InputValueProvider>
      <div>
        <Menu />
        <Header />
        Just check
      </div>
    </InputValueProvider>


  )
}
