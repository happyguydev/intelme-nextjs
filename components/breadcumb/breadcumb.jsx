import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { BreadCumbComponent } from './styles';

const Breadcumb = ({ currentPage }) => {
  return (
    <>
      {currentPage ? (
        <BreadCumbComponent>
          <Link href="dashboard" scroll>
            Dashboard
          </Link>
          <FiChevronRight />
          {currentPage}
        </BreadCumbComponent>
      ) : null}
    </>
  );
};

export default Breadcumb;
