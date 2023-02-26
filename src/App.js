import './App.css';
import React from 'react';
import EssayForm from './EssayForm';
import Story from './Story';
import useFormQuery from "./hooks";

const App = () => {
  const { handleSubmit, caption, query } = useFormQuery();

  return (
    <div className="App">
      <header className="App-header">
        {query.length === 0 && <EssayForm handleSubmit={handleSubmit} />}

        {query.length > 0 &&
          <Story
            content={ query }
            pictureSplitStr={ caption }
          />
        }
      </header>
    </div>
  );
}

export default App;
