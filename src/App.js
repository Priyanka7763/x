//import logo from './logo.svg';
//import './App.css';
 import React, { useState,useEffect } from 'react';
 import './Tic-Tac/Tic-Tac.css'
 import SquarComponent from './Tic-Tac/SquarComponent'

const  initialState = ["","","","","","","","","",""];

function App() {

 const [gameState,setGameState] = useState(initialState);

  const [isXChance,setIsXChance] =useState(false);

   const  onSquareClicked=(index) =>{
     let strings = Array.from(gameState);
     strings[index] = isXChance ? "X" : "0";
     setGameState(strings);
     setIsXChance(!isXChance);

   }

     useEffect(() => {
     const winner = checkWinner();
         if(winner){
        alert(`Ta da ! ${winner} has won the Gamme!`)
        setGameState(initialState)
      }

     },[gameState])

     const checkWinner = ()=>{
      const Lines = [
              [0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6],
      ];
       for (let i=0; i<Lines.length; i++){
        const [a,b,c] = Lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a]=== gameState[c]){
          return gameState[a];
        }
       
       }
         return null;
       }


  return (
    <div className="app-header">
      <p className='heading-text'>React Tic Tac Toe - 2022</p>
      <div className='row jc-center'>
       <SquarComponent   className='b-bottom-right'  state={gameState[0]}  onClick={()=>onSquareClicked(0)}/>
       <SquarComponent   className='b-bottom-right' state={gameState[1]}   onClick={()=>onSquareClicked(1)}/>
       <SquarComponent    className='b-bottom' state={gameState[2]}        onClick={()=>onSquareClicked(2)}/>
      </div>
      <div className='row jc-center'>
      <SquarComponent   className='b-bottom-right' state={gameState[3]}  onClick={()=>onSquareClicked(3)} />
      <SquarComponent   className='b-bottom-right' state={gameState[4]}  onClick={()=>onSquareClicked(4)}/>
      <SquarComponent    className='b-bottom'  state={gameState[5]}      onClick={()=>onSquareClicked(5)}/>
      </div>
      <div className='row jc-center'>
      <SquarComponent    className='b-right' state={gameState[6]}     onClick={()=>onSquareClicked(6)}/>
      <SquarComponent    className='b-right' state={gameState[7]}   onClick={()=>onSquareClicked(7)}/>
      <SquarComponent   state={gameState[8]} onClick={()=>onSquareClicked(8)}/>
      </div>
       <button className='clear-button' onClick={()=>setGameState(initialState)}>Clear Game</button> 
       
    </div>
  );
}

export default App;
