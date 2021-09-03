import React, { useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { PriorityComponent, Stars } from './styles';

const Priority = ({ priority, action }) => {
  const styles = Stars();

  return (
    <>
      <PriorityComponent>
        {priority === 1 ? (
          <BsStar className={styles.emptyStar} />
        ) : priority === 3 ? (
          <BsStarHalf />
        ) : priority === 5 ? (
          <BsStarFill />
        ) : null}
      </PriorityComponent>
    </>
  );
};

export default Priority;
