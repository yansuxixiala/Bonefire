import React from 'react';

function LinkButton() {
  const handleClick = () => {
    window.location.href = 'http://localhost:3000/North';
  };

  return (
    <button onClick={handleClick} class="btn btn-success" id="btn-sz">
      前往了解
    </button>
  )
}

export default LinkButton;
