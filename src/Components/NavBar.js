import React from 'react';

function NavBar() {
  return (
    // <a href="#" class="no-underline hover:underline ...">Link</a>

    <div className='"w-screen p-3 text-white bg-gradient-to-tr from-red-900 via-red-500 to-yellow-500 shadow fixed'>
      BETA | 
      <a href="/#" className="no-underline hover:underline">
        How It Works?
      </a>
    </div>
  );
}

export default NavBar;
