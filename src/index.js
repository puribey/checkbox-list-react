import React from 'react'
import propTypes from 'prop-types'
import cn from 'classnames'

import './styles.css'

import { parseList, parseInputs } from './helpers'

class CheckBoxes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: [],
      list: []
    }
  }

  componentDidMount() {
    const { inputs, list } = this.props
    const services = parseList(inputs, list)

    this.setState({
      inputs: services,
      list: list
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { inputs } = this.state
    const newList = parseInputs(inputs)

    if (prevState.inputs !== this.state.inputs) {
      return {
        inputs: inputs,
        list: newList
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { inputs } = this.state

    if (snapshot !== null) {
      if (this.props.hasOwnProperty('onChange')) {
        this.props.onChange({
          target: { name: this.props.name, value: inputs }
        })
      }
    }
  }

  onCheck = e => {
    const { inputs } = this.state
    const { value, checked } = e.target

    this.setState({
      inputs: inputs.map(input => ({
        ...input,
        checked: input.value === value ? checked : input.checked
      }))
    })
  }

  render() {
    const { inputs } = this.state
    const { className } = this.props

    return (
      <div className={cn('-select-list', className)}>
        {inputs.map((item, i) => (
          <label key={i} className='custom-checkbox'>
            {item.label}
            <input
              type='checkbox'
              name={item.name}
              className={cn('-input-form__input')}
              onChange={this.onCheck}
              checked={item.checked}
              value={item.value}
            />
            <span className='checkmark' />
          </label>
        ))}
      </div>
    )
  }
}

CheckBoxes.propTypes = {
  list: propTypes.array,
  className: propTypes.string,
  inputs: propTypes.object,
  onChange: propTypes.func,
  name: propTypes.string
}

export default CheckBoxes
