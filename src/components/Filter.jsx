import React from 'react'


export const Filter = ({handleInput}) => {
    return (
        <div>
            <input type="text" placeholder="Name" onChange={(e) => handleInput(e.target.value)}/>
        </div>
    )
}
