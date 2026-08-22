

import React, { useState } from 'react'
import "../../styles/charactercounter.scss"


const CharacterCounter = () => {

    const [text, setText] = useState("")

    const MAX_CHARS = 50

    const charCount = text.length

    const remaininCount = MAX_CHARS - charCount

    // const wordsCount = text.trim() == "" ? 0 : text.trim().split(/\s+/).length

    const wordsCount = text.split(" ").filter((ele) => ele !== "").length

    const linesCount = text.split() == "" ? 0 : text.split("\n").length


    return (
        <div className='character-counter'>


            <h2>Character Counter  : {text} </h2>

            <p>Type below to see live character, word and line counts</p>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='start typing....'
                rows={8}
                aria-label="Text to count"
            />

            <div className="stats">
                <div className="stat">
                    <span className="label">Characters</span>
                    <span className="value">{charCount}</span>
                </div>
                <div className="stat">
                    <span className="label">Words</span>
                    <span className="value">{wordsCount}</span>
                </div>
                <div className="stat">
                    <span className="label">Lines</span>
                    <span className="value">{linesCount}</span>
                </div>
                {/* <div className={`stat remaining ${isNearLimit ? "warn" : ""} ${isOverLimit ? "over" : ""}`}> */}
                <div className="stat">
                    <span className="label">Remaining</span>
                    <span className="value">{remaininCount}</span>
                </div>
            </div>

            <div className="actions">
                <button type="button" onClick={() => setText("")} disabled={text.length === 0}>
                    Clear
                </button>
                <span className="limit-hint">Limit: {MAX_CHARS} characters</span>
            </div>



        </div>
    )
}

export default CharacterCounter