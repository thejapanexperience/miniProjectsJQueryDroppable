import React from 'react';
import {Link} from 'react-router';
import MiniProjectContent from './MiniProjectContent';

const MiniProject = () => {
  return (
    <div className="section1Box">
      <div className="section1">
        <h2 className="titleText">Drag and Drop</h2>
        <p className="bodyText">
          Testing a simple drag and drop interface with an eye towards creating education games for Eduku.
        </p>
        <MiniProjectContent />
      </div>

    </div>
  );
};

export default MiniProject;
