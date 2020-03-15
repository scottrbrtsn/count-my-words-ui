import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import './App.css';

//Browsers do not like mouseHover for audio events.  

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.countMyWords = this.countMyWords.bind(this);
    this.state = {
      id: 0,
      phrase: 'enter a phrase to count words',
      total: 0
    };
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePhraseChange = this.handlePhraseChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(e) {
    console.log(e);
    this.setState({ id: e.target.value }); 
   }


  handlePhraseChange(e) {
    this.setState({ phrase: e.target.value }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    this.countMyWords();
  }

  async countMyWords() {
    var phrase = {id:this.state.id, phrase:this.state.phrase};
    console.log('phrase, ', phrase)

    const response = await axios.post(
      'https://count-my-words.herokuapp.com//phrases//count',
      phrase,
      { headers: { 'Content-Type': 'application/json' } }
    )
    this.setState({total: response.data});
    console.log(this.state.total);
  }

  render() {
    
    return (
          <div>
      <form onSubmit={this.handleSubmit}>
    
        <input
        id="id"
        label="ID"
        locked={false}
        active={false}
        value={this.state.id}
        onChange={this.handleIdChange}
          />
         <input
        id="phrase"
        label="Phrase"
        locked={false}
        active={false}
        value={this.state.phrase}
        onChange={this.handlePhraseChange}
          />
         <input type="submit" value="Count" />
      </form>
   
        Your Total: {this.state.total}
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));