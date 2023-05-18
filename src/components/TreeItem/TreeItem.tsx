import React, { useState } from 'react';
import './TreeItem.scss';
import { log } from 'console';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TreeItem: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log('click');
    
  };

  return (
    <div>
      <div className='category__wrap'>
        <div className="category">Categories</div>
        <button className="category__btn" onClick={handleButtonClick} tabIndex={0}>+</button>

      </div>
    </div>
  );
}

export default TreeItem;