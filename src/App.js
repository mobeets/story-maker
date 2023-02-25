import './App.css';
import React from 'react';
import EssayForm from './EssayForm';
import Story from './Story';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.page = 'story';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.page === "form" && <EssayForm />}
          {this.page === "story" && <Story content={'test page 1\nIllustration:dinosaurs\n\n test page 2'} />}
        </header>
      </div>
    );
  }
}

export default App;
