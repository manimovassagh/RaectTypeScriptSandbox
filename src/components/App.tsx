import React, { ReactElement } from 'react';
import { Header } from "./Header"
import { Menu } from './Menu'
import { Divider } from "./Divider"
import FormHandler from './formHandler'

export default function App(): ReactElement {

  return (
    <div>
      <Menu />
      <div className="ui container">
        <div className="ui segment center aligned">
          <FormHandler />
        </div>
      </div>
      Just check
    </div>

  )
}
