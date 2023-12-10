import Counter from './components/Counter';
import React, { useState } from 'react';
import DataContext, { data } from './data/DataContext';
import Basic from './components/Basic';
import Another from './components/Another';

function App() {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="container">
        <div className='text-center'>
          <Counter />
          <Basic />
          <Another />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
