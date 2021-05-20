import React, { useState, useRef } from 'react'

function Header() {
    const headerRef = useRef(null)
    const [{ hSubmitted, hText }, setHeader] = useState({ hSubmitted: false, hText: '' })

    React.useEffect(() => {
        if (!hSubmitted) {
            headerRef.current.focus()
        }
    }, [hSubmitted])

    return (
        <>

            {!hSubmitted ? <input
                name="header"
                type="text"
                onChange={(e) => setHeader(hea => ({ ...hea, hText: e.target.value }))}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        setHeader(hea => ({ ...hea, hSubmitted: true }))
                    }
                }}
                value={hText}
                className="header"
                placeholder="Type Header ..."
                ref={headerRef}
            />
                :
                <h5
                    className="header-text"
                    onClick={() => {
                        setHeader(th => ({ ...th, hSubmitted: false }))
                    }}>
                    {hText}
                </h5>}
        </>
    )
}

export default Header
