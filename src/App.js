
import React from 'react';
import './App.css';
import Form from './Form/view/form';
import {useState} from 'react';
import DataDisplay from './Form/view/DataDisplay';

function App() {;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectOption, setSelectOption] = useState({});


  return (
    <div className="App">
    
    <div className='div1'>
      <button className='btn' onClick={() => setIsFormOpen(true)}>Open From </button>
      
    </div>
    
    <div className='div-con2'> <div className='div2'> <DataDisplay/> </div>
    <div className='div3'>  {isFormOpen && <Form setIsFormOpen={setIsFormOpen} selectOption={selectOption}  setSelectOption={setSelectOption} />} </div></div>
   
    </div>
  );
}

export default App;
