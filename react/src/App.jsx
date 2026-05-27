import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  //first-> side-effect function
  //second -> clean-up function
  //third -> comma separated dependeny list
  
  useEffect(()=>{
    alert('I will run on each render')
  })

    function handleClick(){
      setCount(count+1);
    }

  return (
    <div>
      <button onClick={handleClick}>
      Click Me
      </button>
      <br/>
    Count is: {count}
    </div>
  )
}

export default App
