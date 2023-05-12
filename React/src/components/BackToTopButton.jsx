import React from 'react';

function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick} className="btn btn-light back-to-top-btn" id='backtotop'>
      <img src="https://img.onl/huvxd" alt="" />
    </button>
  );
}

export default BackToTopButton;
