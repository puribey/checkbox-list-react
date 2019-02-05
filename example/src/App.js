import React, { Component } from 'react'

import CheckBoxes from 'react-checkboxes'
import {inputs, list} from './data'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
        data: {

        }
    }
  }

  onChange = e => {
    const { data } = this.state

    this.setState({
      data: {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }

  render () {
    return (
      <div>
        <CheckBoxes list={list} inputs={inputs} onChange={this.onChange}/>
      </div>
    )
  }
}
