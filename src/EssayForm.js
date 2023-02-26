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
            Image caption:<br/>
            <input name="caption" type="text" defaultValue="illustration: " />
          </label><br/><br/>
          <label>
            Page break:<br/>
            <input name="page" type="text" defaultValue="\n\n\n" />
          </label><br/><br/>
          <input type="submit" value="Go" className="btn" />
        </form>
    )
}

export default EssayForm;
