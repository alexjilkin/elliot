import {useEffect, useState} from "react";
import "./Goals.css"
import {getData, setData} from "../data";

export const JournalEntry = ({onEnd}) => {
    const [value, setValue] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onEnd(true);
        setData("journal", value)
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="modal" onClick={onEnd}>
            <div className="something" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/window.png')`}} > 
            <div className="main" onClick={e => e.stopPropagation()}>
                Give a short description of how your day went.
                What was good, what was less? 
                <form onSubmit={handleSubmit}>
                    <input autoComplete="off" autoFocus className="input" type="textarea" name="name" value={value} onChange={handleChange}/>
                    <input type="submit" value="Submit" style={{visibility: 'hidden'}} />
                </form> 
                </div>
            </div>
        </div>
    )
}