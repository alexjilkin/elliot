import React from "react";
import "./Goals.css"

export const Goals = () => {

    return (
        <div className="modal" >
            <div style={{backgroundImage: "url('/assets/window.png')"}} > 
                <form>
                    <input className="input" type="text" name="name" />
                </form>
            </div>
        </div>
    )
}