import './App.css';
import { useEffect, useRef } from 'react';
import {app} from "./Game";
import {UI} from "./ui"

const App = () => {
  const ref = useRef();

  useEffect(() => {
    
    if(ref.current.innerHTML === "") {
      ref.current.appendChild(app.view)
    }
  }, [ref])

  return (
    <div className='container'>  
      <div ref={ref}>

      </div>
      <UI>

      </UI>
    </div>
  );
}

export default App;
