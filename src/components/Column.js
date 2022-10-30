import React from 'react';

const Column = ({ title, url }) => {
  return (
    <div>
      <button>
        <a href={`${url}`} target="_blank" rel="noreferrer">
          {title}
        </a>
      </button>
    </div>
  );
};

export default Column;
