// const CurrentNumber = () => {
//     const [selectedValues, setSelectedValue] = useState(0);

//     const [nextSelectedValue, setNextSelectedValue] = useState();
//     const NextSelectedValue = () => {
//         const candidates = selectedValues
//             .map((selected, index) => (!selected ? index : null))
//             .filter(value => value !== null);
//         return candidates[Math.floor(Math.random() * candidates.length)]; 
//     }



import React, { Component } from 'react';
import './New.css';
import Grid from './Grid.js';
import LastValue from './LastValue.js';

class CurrentNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextSelectedValue: null,
      selectedValues: [true].concat([...Array(90).keys()].map(index => false))
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div>
        <center>
          <button className="GenerateButton" onClick={this.onClick}>
            Tambola
          </button>
          <LastValue value={this.state.nextSelectedValue} />
          <table>
            <tbody>
              <Grid selectedValues={this.state.selectedValues} />
            </tbody>
          </table>
        </center>
      </div>
    );
  }

  onClick() {
    const oldSelectedValues = this.state.selectedValues; // useState => selectedValues
    const nextSelectedValue = this.getNextSelectedValue(oldSelectedValues);
    const newSelectedValues = oldSelectedValues.map((item, index) => {
      if (index === nextSelectedValue) {
        return true;
      }
      return item;
    }); // useState(setState)

    this.setState({
      nextSelectedValue,
      selectedValues: newSelectedValues
    });
  }

  getNextSelectedValue(selectedValues) {
    const candidates = selectedValues
      .map((selected, index) => (!selected ? index : null))
      .filter(value => value !== null);

    return candidates[Math.floor(Math.random() * candidates.length)];
  }
}

export default CurrentNumber;