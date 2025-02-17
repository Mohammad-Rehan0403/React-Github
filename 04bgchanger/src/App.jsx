import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }

  // insted of above function u can directly use "setColor" function

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>{setColor('red')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'red'}}>RED</button>
          <button onClick={()=>{setColor('green')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'green'}}>GREEN</button>
          <button onClick={()=>{setColor('yellow')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'yellow'}}>YELLOW</button>
          <button onClick={()=>{setColor('orange')}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'orange'}}>ORANGE</button>
        </div>
      </div>
    </div>
  )
}

export default App
