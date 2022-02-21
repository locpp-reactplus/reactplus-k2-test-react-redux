import React from 'react';
import './App.css';
import ListProduct from './components/ListProduct';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='container'>
        <ListProduct />
      </div>
    </div>
  );
}

export default App;
