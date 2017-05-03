import React from 'react';
import {Link} from 'react-router';
import Board from './Board'

const MiniProjectContent = () => {
  return (
    <div className="miniProjectContent">
      <Board knightPosition={[0, 0]} />
    </div>
  );
};

export default MiniProjectContent;
