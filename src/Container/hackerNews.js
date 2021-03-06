import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import NewsTable from '../Components/newsTable';

import NewsActions from './apiCall';


function HackerNews() {
  const history = useHistory();
  const page = parseInt(useParams().page);

  const [news, setNews] = useState(null);
  const [max, setMax] = useState(100);

  useEffect(() => {
    NewsActions.getData(page).then(d => {
      setNews(d.hits);
      setMax(d.nbHits);
    });
  }, [page]);

  return (
    <NewsTable
      data={news}
      onPaginationChange={(p) => history.push(`/${p}`)}
      page={page}
      max={max}
    />
  );
}

export default HackerNews;
