import React from 'react'


//Finish this
export const QuoteCard = ({ quote, author, setQuote }) => {
    return (
        <div className='quote-box'>
            <h3>"{quote}"</h3>
            <p>{author ? `- ${author}` : ''}</p>
            <button onClick={setQuote}>Get New Quote</button>

        </div>
    )
}
