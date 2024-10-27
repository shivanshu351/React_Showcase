import React from 'react';


function Logo({ width = '100px' }) {
  return (
    <div>
      <img src='https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
