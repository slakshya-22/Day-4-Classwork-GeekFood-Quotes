import React from "react";
import quotes from "../data/quotes.json";
import "../index.css";

function QuotesCard() {
    return (
        <div className="quotes-container">
            {quotes && quotes.length > 0 ? (
                quotes.map((quote, index) => (
                    <div key={index} className="quote-card">
                        <p className="quote">"{quote.quote}"</p>
                        <p className="author">- {quote.author}</p>
                    </div>
                ))
            ) : (
                <p>No quotes available.</p>
            )}
        </div>
    );
}

export default QuotesCard;
