import React from 'react';
import ReactTooltip from 'react-tooltip';

const Column = ({ title, url, desc ,id}) => {
  return (
    <div className="link">
      <button data-tip data-for={desc}>
        <a href={`${url}`} id={id} target="_blank" rel="noreferrer">
          {title}
        </a>
      </button>
      <ReactTooltip id={desc} place="top" effect="solid">
        <p>{desc}</p>
      </ReactTooltip>
    </div>
  );
};

export default Column;
