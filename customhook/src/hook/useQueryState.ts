import { useEffect, useState } from 'react';
import queryString from 'query-string';
import _ from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';
import { debug } from 'console';

export const useQueryState = <T>() => {
  const history = useHistory();
  const location = useLocation();
  const [parsedQuery, setParsedQuery] = useState<T>({} as T);

  useEffect(() => {
    const query = queryString.parse(location.search);
    setParsedQuery((query as unknown) as T);
  }, [location.search]);

  const updateQuery = (update: Partial<T>) => {
    const oldQuery = queryString.parse(location.search);
    const newQuery = { ...oldQuery, ...update };

    // skip history update if old and new queries are the same
    if (!_.isEqual(oldQuery, newQuery)) {
      history.push({
        search: queryString.stringify(newQuery)
      });
    }
  };

  return [parsedQuery, updateQuery] as const;
};
