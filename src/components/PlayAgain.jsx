import React from 'react'

export default function PlayAgain({ again }) {


    return (
        <div className="menu-item">
            <button className="btn-play" onClick={() => again()}>Play again?</button>
        </div>
    )
}
