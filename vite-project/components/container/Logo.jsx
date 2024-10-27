import React from 'react';


function Logo({ width = '100px' }) {
  return (
    <div>
      <img src='https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok'  alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
