import React from 'react';
import './App.css';
import Counter from './packages/counter'
import Icons from './packages/Icons';
import Toast from './packages/Toast';
import ModalExample from './packages/ModalExample';

function App() {
  return (
    <div className="App">
    <ModalExample/>
    <Toast/>
    <Icons/>
    <Counter/>
    </div>
  );
}

export default App;
