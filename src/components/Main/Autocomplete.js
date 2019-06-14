import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

const DataList = ({ id, options }) => (
    <datalist id={"data-list-" + id}>
      {options.map((o, i) => <option className="opt" key={i}>{o}</option>)}
    </datalist>
  );
class Autocomplete extends Component {
    
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

    

    randomId = () =>
        Math.floor((1 + Math.random()) * 0x100000)
        .toString(16)
        .substring(0);

    state = { id: this.randomId() };
    render() {
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

        return (
            <React.Fragment>
                <DataList id={this.state.id} options={this.props.options} />
                <Form.Control type="text" placeholder="Add members" className="addMember" list={"data-list-" + this.state.id} />
            </React.Fragment>
                
                
            
        )
    }
}

export default Autocomplete;