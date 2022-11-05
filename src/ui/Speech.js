import React from 'react';
import "./Speech.css"
import { TypeAnimation } from 'react-type-animation';

export const Speech = ({text, children}) => {
    return (
        <div className='speech-container'>
            <TypeAnimation sequence={text} wrapper="div"
                cursor={false}
                style={{ fontSize: '1.5em' }}
                omitDeletionAnimation={true}
            />
            {children}
        </div>
    )
}