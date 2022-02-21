import axios from 'axios';
import React, { useState } from 'react';
import Home from './Component/Home';
import Delete from './Component/Delete';
function App(props) {
  
  return (
    <div>
      <Home/>
      <Delete/>

    </div>
  );
}

export default App;