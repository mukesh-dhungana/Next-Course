import React from 'react'
import Header from './Header'
import Body from './Body'

function Block({ deleteBlock }) {

    return (
        <div className="block">
            <span onClick={deleteBlock} style={{ cursor: "pointer", float: "right", marginRight: "12px" }}>x</span>

            <Header deleteBlock={deleteBlock} />
            <div className="line"></div>
            <Body />
        </div>
    )
}

export default Block
