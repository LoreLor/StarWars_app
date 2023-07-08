import { useState, useEffect } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(0, endIndex));
  }, [data, itemsPerPage, page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPaginatedData(data.slice(0, endIndex));
    }
  }, [data, itemsPerPage, page]);

  return {
    paginatedData,
    nextPage,
  };
};

export default usePagination;
