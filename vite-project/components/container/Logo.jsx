import React from 'react';


function Logo({ width = '100px' }) {
  return (
    <div>
      <img src='/logoFolder/logos.jpg'  alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
