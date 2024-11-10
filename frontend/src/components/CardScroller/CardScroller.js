import React from 'react';
import './CardScroller.css'; // Import the CSS file

const CardScroller = () => {
  const data = [
    { id: '1', text: 'Card 1' },
    { id: '2', text: 'Card 2' },
    { id: '3', text: 'Card 3' },
  ];

  return (
    <div className="card-scroller-container">
      <div className="card-scroller">
        {data.map((item) => (
          <div key={item.id} className="card">
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardScroller;