import React, { Component } from 'react'

import CheckBoxContainer from 'react-checkboxes'
import {inputs, list} from './data'

export default class App extends Component {
  render () {
    return (
      <div>
        <CheckBoxContainer list={list} inputs={inputs}/>
      </div>
    )
  }
}
