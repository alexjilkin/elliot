import {useState} from 'react';
import {Speech} from "./Speech";
import { getData, setData } from "../data";
import "./Welcome.css";


export const Welcome = ({onEnd}) => {
    const [currentState, setCurrentState] = useState(0);
    const [name, setName] = useState("");
    
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData('name', name)
        setCurrentState(1)
    }

    const texts = [
        ["Welcome! my name is Elliot. What is yours?"],
        [`Hi ${getData('name')}, I am here to support you.`, 1000, 
        'For example, I can help you to focus your day and write 3 things you would like to accomplish today.', 2000, onEnd]
    ]

    return (
        <span>
           {currentState === 0 &&<Speech text={texts[currentState]}>
                <form onSubmit={handleSubmit}>
                    <input autoFocus autoComplete="off" className="input" type="text" name="name" onChange={handleChange}/>
                    <input type="submit" value="Submit" style={{visibility: 'hidden'}} />
                </form>
            </Speech> }

            {currentState === 1 && <Speech text={texts[currentState]}>
            
            </Speech> }
        </span>
    )
}