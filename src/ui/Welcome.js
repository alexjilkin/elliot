import {useState} from 'react';
import {Speech} from "./Speech";
import { getData, setData } from "../data";
import "./Welcome.css";



let name;

export const Welcome = ({onEnd}) => {
    const [currentState, setCurrentState] = useState(0);
    const [name, setName] = useState("");
    
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = () => {
        setData('name', name)
        setCurrentState(1)
    }

    const texts = [
        ["Welcome! my name is Elliot. What is yours?"],
        [`Hi ${getData('name')}, I am here to support you.`, 
        'I can for example help you to write what you would like to acomplish today', 2000, onEnd]
    ]

    return (
        <span>
           {currentState === 0 &&<Speech text={texts[currentState]}>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" name="name" onChange={handleChange}/>
                    <input type="submit" value="Submit" style={{visibility: 'hidden'}} />
                </form>
            </Speech> }

            {currentState === 1 && <Speech text={texts[currentState]}>
            
            </Speech> }
        </span>
    )
}