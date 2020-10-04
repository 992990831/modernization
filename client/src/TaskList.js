import React from 'react';

import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
      {
        getTasks
        {
          id,
            title
        }
      }
`;

export const TaskList = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.getTasks.map(task => {
                return(
                    <div>
                        {task.title}
                    </div>
                )
            })}
        </div>
    )
}