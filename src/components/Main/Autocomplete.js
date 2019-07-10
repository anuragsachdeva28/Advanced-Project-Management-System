import React, { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";

// const DataList = ({ id, options }) => (
//
// );
class Autocomplete extends Component {
  state = {
    name: ""
  };

  selected = () => {
    console.log(
      "qqqqqqqqqqqqqqqqq",
      document.getElementById("data-list").selectedIndex
    );
  };
  _onChange = event => {
      const name = document.getElementById("empName").value;
      const keys = document.querySelectorAll("#data-list option");
      // console.log(keys)
      keys.forEach((key,item)=>{
          if(key.getAttribute("value").toString().toLowerCase()===name.toString().toLowerCase()) {
              console.log(key.getAttribute("data-id"))
              console.log(key.getAttribute("data-email"))
          }
      })
    // console.log("aaaaaa",key);
  };
  addChange = () => {
    const name = document.getElementById("empName").value;
    let id = "";
    let email= "";
    console.log("see this",name);
      const keys = document.querySelectorAll("#data-list option");
      // console.log(keys)
      keys.forEach((key,item)=>{
          if(key.getAttribute("value").toString().toLowerCase()===name.toString().toLowerCase()) {
              console.log(key.getAttribute("data-id"))
              id=key.getAttribute("data-id");
              console.log(key.getAttribute("data-email"));
              email=key.getAttribute("data-email");
          }
      })
    this.props.onSelection({name,id,email});
  };

  randomId = () =>
    Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(0);

  state = { id: this.randomId() };
  render() {
      // console.log("zzzzzzzzzzzzz",this.props)
    return (
      <React.Fragment>
        <datalist
          id={"data-list"}
          onautocomplete={this.selected}
        >
          {this.props.options.map((employee, id) => (
            <option
              data-id={employee.id}
              data-name={employee.name}
              data-email={employee.email}
              className="opt"
              value={employee.name}
              key={id}
            >
              {employee.name}
            </option>
          ))}
        </datalist>
        <Form.Group as={Row}>
          <Form.Control
            type="text"
            placeholder="Add members"
            className="addMember"
            list={"data-list"}
            id={"empName"}
            onChange={this._onChange}
          />
          <Button variant="secondary" size="sm" onClick={this.addChange}>
            <b>+</b>
          </Button>
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default Autocomplete;

// static propTypes= {
//     suggestions: PropTypes.instaceOf(Array)
// };

// static defaultProperty = {
//     suggestions: []
// };

// constructor(props){
//     super(props);
//     this.state = {
//         activeSuggestion:0,
//         filteredSuggestions: [],
//         showSuggestion: false,
//         userInput: ""
//     };
// }

// onChange = e => {

// };

// onClick = e => {

// };

// onKeyDown = e => {

// };

// const {
//     onChange,
//     onClick,
//     onKeyDown,
//     state: {
//       activeSuggestion,
//       filteredSuggestions,
//       showSuggestions,
//       userInput
//     }
//   } = this;
