import React, { useState, useEffect } from 'react';

function MyFavorites() {
  const [favoriteWebsite, setFavoriteWebsite] = useState(null);

  useEffect(() => {
    const url = window.localStorage.getItem('myFavoriteWebsite');
    setFavoriteWebsite(url);
  }, []);

  return (
    <div>
      <h1>我的最爱</h1>
      {favoriteWebsite && (
        <a href={favoriteWebsite} target="_blank" rel="noopener noreferrer">
          {favoriteWebsite}
        </a>
      )}
    </div>
  );
}

export default MyFavorites;
