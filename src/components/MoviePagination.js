import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'semantic-ui-react';
import { onChangeSearch } from '../actions';

const MoviePagination = () => {
  const { totalResults, searchString, activePage } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const handlePaginationChange = ({ activePage }) => {
    dispatch(onChangeSearch(searchString, activePage));
  };

  return (

    <>
      <Pagination
        activePage={activePage}
        onPageChange={handlePaginationChange}
        totalPages={Math.ceil(totalResults / 20)}
        ellipsisItem={null}
        disabled={totalResults <= 20}
      />
    </>
  );
};

export default MoviePagination;
