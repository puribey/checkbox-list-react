export const parseList = (inputs, list) => {
  return Object.keys(inputs).reduce((acc, key) => {
    acc.push({
      label: inputs[key],
      name: key,
      value: key,
      checked: list.includes(key)
    })
    return acc
  }, [])
}

export const parseInputs = inputs => {
  return inputs.reduce((acc, input) => {
    if (input.checked) {
      acc.push(input.value)
    }
    return acc
  }, [])
}
