import {useEffect, useState} from "react";
import "./Goals.css"
import {getData, setData} from "../data";

export const Goals = ({onEnd}) => {
    const [goal, setGoal] = useState("")
    const [goals, setGoals] = useState([])
    const handleChange = (event) => {
        setGoal(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGoals([...goals, goal])
        setGoal("")
    }

    useEffect(() => {
        if (goals.length === 3) {
            setTimeout(() => {
                onEnd()
                setData("goals", goals)
            }, 2000)

        }
    }, [goals])

    return (
        <div className="modal" >
            <div className="something" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/window.png')`}} > 
            <div className="main">
                Hei again, try and find 3 things you would like to accomplish today. 
                It can be anything - Do homework, clean your room or just sleep longer.
                <ul>
                    {goals.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
                {goals.length < 3 ? 
                <form onSubmit={handleSubmit}>
                    <input autoComplete="off" autoFocus className="input" type="text" name="name" value={goal} onChange={handleChange}/>
                    <input type="submit" value="Submit" style={{visibility: 'hidden'}} />
                </form> : 
                <span style={{marginTop: 20}}>
                    Yaaaaay thank you.
                </span>}
                </div>
            </div>
        </div>
    )
}