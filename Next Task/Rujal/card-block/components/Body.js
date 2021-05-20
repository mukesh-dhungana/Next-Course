import React, { useRef, useEffect, useState } from 'react'

function Body() {

    const bodyRef = useRef(null)
    const [{ bSubmitted, bText }, setBody] = useState({ bSubmitted: false, bText: '' })

    useEffect(() => {
        if (!bSubmitted) {
            bodyRef.current.focus()
        }
    }, [bSubmitted])

    return (

        <>
            {!bSubmitted ? <textarea
                name="header"
                type="text"
                onChange={(e) => setBody(hea => ({ ...hea, bText: e.target.value }))}
                value={bText}
                className="body"
                placeholder="Type Details ..."
                ref={bodyRef}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        if (!e.shiftKey) {
                            setBody(hea => ({ ...hea, bSubmitted: true }))
                        }
                    }
                }}
            />
                :
                <p
                    className="paragraph"
                    style={{ borderLeft: 0 }}
                    onClick={() => {
                        setBody(th => ({ ...th, bSubmitted: false }))
                    }}>
                    {bText}
                </p>}

        </>
    )
}

export default Body
