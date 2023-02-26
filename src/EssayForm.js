import './EssayForm.css';
import React from 'react';

interface IForm {
    handleSubmit: (e) => void
}

const EssayForm = ({ handleSubmit }: IForm) => {
    return (
        <form onSubmit={handleSubmit}>
          <label>
          Story:<br/>
          <textarea name="form" placeholder="Paste your story text here." />
          </label>
          <br/><br/>
          <label>
            Image description text:<br/>
            <input name="caption" type="text" />
          </label><br/><br/>
          <input type="submit" value="Go" className="btn" />
        </form>
    )
}

export default EssayForm;
