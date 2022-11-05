import {useState} from 'react';
import './UI.css'
import {Welcome} from "./Welcome";
import {Goals} from "./Goals";

export const UI = () => {
    const [currentState, setCurrentState] = useState(0);
    
    return (
        <div className="ui-container">
            {currentState === 0 && <Welcome onEnd={() => setCurrentState(1)}/>}
            {currentState === 1 && <Goals />}
        </div>
    )
}