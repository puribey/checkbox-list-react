# checkbox-list-react

> 

[![NPM](https://img.shields.io/npm/v/react-checkboxes.svg)](https://www.npmjs.com/package/react-checkboxes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Implementation
1. Install
```
npm install --save checkbox-list-react
```

2. Import
```
import CheckBoxes from 'checkbox-list-react'
```

3. Data input
```
list = []
```
```
inputs = {
  lunch: 'Almuerzo',
  breakfast: 'Desayuno',
  snack: 'Merienda',
  dinner: 'Cena',
  foodBag: 'Bolsa de alimentos'
}
```

4. Example Usage

```
export default class CheckboxContainer extends Component {
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

  render() {
    return(
      <div>
        <CheckBoxes list={list} inputs={inputs} onChange={this.onChange} name="comidad"/>
      </div>
    )
  }
}
```
5. What should be rendered 

- [ ] Almuerzo
- [ ] Desayuno
- [ ] Merienda
- [ ] Cena
- [ ] Bolsa de alimentos

6. Output when checked

- [x] Almuerzo
- [x] Desayuno
- [ ] Merienda
- [ ] Cena
- [ ] Bolsa de alimentos

```
['lunch', 'breakfast']
```

## License

MIT © [puribey](https://github.com/puribey)
