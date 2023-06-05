import React, { useState } from 'react'

function Calculator() {
  
  //use state
  const[result,setResult]=useState('');

  //onclick Function
  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value)); 
  }
  
  //Clear Function
  const clearDisplay=()=>{
    setResult("");
  }

  //Result Function
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  
 

  return (
    
<div>

   <div className='flex justify-center items-center mt-2 '>
       <div className='bg-blue-500 ml-64 h-96 w-60 mx-48 mt-24 rounded'>
         <h1 className='text-2xl text-center my-4 h-2 font-bold' >Calculator</h1> 
          <div>
    <input type="text" placeholder='0000000' className='border border-white text-center ml-7 mt-4 h-8' value={result} />
   </div>
   <div className='gird grid-cols-4 mx-5 mt-5  justify-center items-center' >
    <input type="button" value="7" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-1 mt-4' onClick={clickHandler}/>
    <input type="button" value="8" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-2' onClick={clickHandler}/>
    <input type="button" value="9" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border' onClick={clickHandler}/>
    <input type="button" value="/" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-2' onClick={clickHandler}/>
    <input type="button" value="4" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-1 mt-3' onClick={clickHandler}/>
    <input type="button" value="5" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-2' onClick={clickHandler}/>
    <input type="button" value="6" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border' onClick={clickHandler}/>
    <input type="button" value="*" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-2 content-center' onClick={clickHandler}/>
    <input type="button" value="1" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-1 mt-3' onClick={clickHandler}/>
    <input type="button" value="2" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-2' onClick={clickHandler}/>
    <input type="button" value="3" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border' onClick={clickHandler}/>
    <input type="button" value="-" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-2' onClick={clickHandler}/>
    <input type="button" value="AC" className='text-4xl font-serif text-white w-12 h-12 rounded-2xl bg-black border mx-1 ' onClick={clearDisplay}/>
    <input type="button" value="0" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border mx-1 mt-4' onClick={clickHandler}/>
    <input type="button" value="=" className='text-4xl font-bold text-white w-8 h-12 rounded-2xl bg-black border mx-2' onClick={calculate}/>
    <input type="button" value="+" className='text-4xl font-bold text-white w-10 h-12 rounded-2xl bg-black border' onClick={clickHandler}/>

   </div>
       </div>
       
   
       </div>
  
  

   </div>
   
  )
}


export default Calculator
