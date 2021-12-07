
import React, { useReducer } from 'react';
import reducer, {initialState} from '../reducers';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { addToMemory, applyNumber, changeOperation, clearDisplay, clearMemory, memoryToTotal } from '../actions';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleNum = (value) => {
    dispatch(applyNumber(value));
  }

  const handleOper = (value) => {
    dispatch(changeOperation(value))
  }
  
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  }

  const handleAddToMemory = () => {
    dispatch(addToMemory());
  }

  const handleMemoryToTotal = () => {
    dispatch(memoryToTotal());
  }

  const handleClearMemory = () => {
    dispatch(clearMemory());
  }

    
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> Operation</span>
              <span id="memory"><b>Memory:</b> Memory</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => handleAddToMemory()}  value={"M+"}/>
              <CalcButton onClick={() => handleMemoryToTotal()} value={"MR"}/>
              <CalcButton onClick={() => handleClearMemory()}  value={"MC"}/>
            </div>

            <div className="row">
            <CalcButton onClick={() => handleNum(1)} value={1}/>
              <CalcButton onClick={() => handleNum(2)} value={2}/>
              <CalcButton onClick={() => handleNumr(3)} value={3}/>
            </div>

            <div className="row">
            <CalcButton onClick={() => handleNum(4)} value={4}/>
              <CalcButton onClick={() => handleNum(5)} value={5}/>
              <CalcButton onClick={() => handleNum(6)} value={6}/>
            </div>

            <div className="row">
            <CalcButton onClick={() => handleNum(7)} value={7}/>
              <CalcButton onClick={() => handleNum(8)} value={8}/>
              <CalcButton onClick={() => handleNum(9)} value={9}/>

            </div>

            <div className="row">
            <CalcButton onClick={() => handleOper("+")} value={"+"}/>
              <CalcButton onClick={() => handleOper("*")} value={"*"}/>
              <CalcButton onClick={() => handleOper("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton  onClick={handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;