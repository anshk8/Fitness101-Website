import React, { useState } from 'react';
import { QuoteCard } from './QuoteCard';

//Storing Data of Quotes
const localQuotes = [
    { text: 'The only bad workout is the one that didn’t happen.', author: 'Unknown' },
    { text: 'Push yourself because no one else is going to do it for you.', author: 'Unknown' },
    { text: 'Great things never come from comfort zones.', author: 'Unknown' },
    { text: 'You must sacrifice for your goals, or your goal becomes the sacrifice', author: 'Unknown' },
    { text: 'Being unhealthy is hard, being healthy is hard... choose your hard.', author: 'Unknown' },
];

const Quotes = () => {

    const [quote, setQuote] = useState(localQuotes[0].text)
    const [author, setAuthor] = useState(localQuotes[0].author)




    function newQuote() {

        const randomNumber = Math.floor(Math.random() * localQuotes.length);
        setQuote(localQuotes[randomNumber].text)
        setAuthor(localQuotes[randomNumber].author)


    }

    return (
        <div id="motivation" className='quotes-container'>
            <h1>Motivational Quote Machine</h1>

            <h4>
                Some of us want a better physique, a better mental health, or simply a new activity to do.
                Many of us have different motivations to better ourselves and it is important for you to find yours!

            </h4>

            <QuoteCard setQuote={newQuote} quote={quote} author={author} />


        </div>
    );
}

export default Quotes;
