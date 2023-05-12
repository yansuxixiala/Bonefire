import React from 'react';

function MyFavoriteButton() {
  const handleAddToFavorites = () => {
    window.localStorage.setItem('myFavoriteWebsite', window.location.href);
  };

  return (
    <button onClick={handleAddToFavorites}>添加到我的最爱</button>
  );
}

export default MyFavoriteButton;
