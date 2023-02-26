import './App.css';
import React from 'react';
import EssayForm from './EssayForm';
import Story from './Story';
import useFormQuery from "./hooks";

const App = () => {
  const { handleSubmit, caption, query, pageBreak } = useFormQuery();

  return (
    <div className="App">
      <header className="App-header">
        {query.length === 0 && <EssayForm handleSubmit={handleSubmit} />}

        {query.length > 0 &&
          <Story
            content={ query }
            pageSplitStr={ pageBreak }
            pictureSplitStr={ caption }
          />
        }
      </header>
    </div>
  );
}

export default App;
