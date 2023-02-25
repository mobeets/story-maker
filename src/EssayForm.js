import './EssayForm.css';
import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Story:<br/>
          <textarea placeholder="Paste your story text here." value={this.state.value} onChange={this.handleChange} />
        </label><br/><br/>
        <label>
          Image description text:<br/>
          <input type="text" />
        </label><br/><br/>
        <input type="submit" value="Go" class="btn" />
      </form>
    );
  }
}

export default EssayForm;
