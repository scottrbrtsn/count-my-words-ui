import React from "react";
import ReactDOM from "react-dom";
import { PolySynth } from "tone";
import { Freeverb } from "tone";
import axios from "axios";

import './App.css';
import { Input } from "./input";

//Browsers do not like mouseHover for audio events.  

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.countMyWords = this.countMyWords.bind(this);
    this.phrase = "enter your phrase";
    this.id = "enter an id";
    this.total = 0;
  }

  async countMyWords() {
    var phrase = {id:this.id, phrase:this.phrases};

    const response = await axios.post(
      'https://count-my-words.herokuapp.com//phrases//count',
      { example: 'data' },
      { headers: { 'Content-Type': 'application/json' } }
    )
    this.total = response.data;
    console.log(this.total)

  }

  render() {
    
    return (
          <div>
          <Input
        id={1}
        label="ID"
        predicted="California"
        locked={false}
        active={false}
        value={this.id}
          />
         <Input
        id={1}
        label="Phrase"
        predicted="California"
        locked={false}
        active={false}
        value={this.phrase}
          />
        <button onClick={this.countMyWords}>
          Count
        </button>
        Your Total: {this.total}
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));