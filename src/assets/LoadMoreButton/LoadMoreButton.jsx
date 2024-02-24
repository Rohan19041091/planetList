// LoadMoreButton.js
import React from 'react';

function LoadMoreButton({ onClick }) {
  return (
    <button className="load-more" onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreButton;
