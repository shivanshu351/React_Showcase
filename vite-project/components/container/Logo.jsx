import React from 'react';


function Logo({ width = '100px' }) {
  return (
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuegR-oFwm9sVx_Cu22G73eMYp7Nm9NGbOw&s'  alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
