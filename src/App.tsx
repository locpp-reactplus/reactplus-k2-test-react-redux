import { Routes, Route, Link } from 'react-router-dom'
import React from 'react';
import Add from './component/Add'
import Delete from './component/Delete';
import List from './component/List';
import Update from './component/Update';

const App: React.FC = () => {
  return (
    <div className="App">
      <List/>
      <Routes>
         <Route path='/add' element={<Add/>}/>
         <Route path='/update' element={<Update/>}/>
         <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </div>
  );
}

export default App;
