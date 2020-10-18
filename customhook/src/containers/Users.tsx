import React, { FC, useRef, useState, useEffect } from 'react';
import { useQueryState } from '../hook/useQueryState';

interface UserModel {
    name?: string;
    age?: number;

}

const mockData: UserModel[] = [
    {
        name: 'Tom',
        age: 30
    },
    {
        name: 'Jerry',
        age: 31
    },
    {
        name: 'Andy',
        age: 32
    },
    {
        name: 'Jeff',
        age: 33
    },
    {
        name: 'Tony',
        age: 34
    },
]

interface FilterState {
    name?: string;
    age?: number;
}

export const Users: FC = (props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const [queryState, setQueryState] = useQueryState<FilterState>();    

    const resetFilter = () => {
        setQueryState({
            name: undefined,
            age: undefined
        });
    };

    const search = () => {
        let filter:FilterState = {
            name: nameRef.current?.value
        }

        setQueryState(filter);
    }

    const [data, setData] = useState(mockData);

    useEffect(()=>{
        if(nameRef.current)
        {
            nameRef.current.value = queryState.name?? '';
        }

        let queryName = queryState.name?.toLowerCase();
        let filteredData = queryState.name? mockData.filter(user => user.name?.toLowerCase().includes(queryName??'')) : mockData;
        setData(filteredData);

    }, [queryState]);

   
    return (
        <>
            <input type="text" ref={nameRef} placeholder='filter by name'></input>  <input type='button' onClick={search} defaultValue='Search' />  <input type='button' onClick={resetFilter} defaultValue='Reset' />
            <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                {
                    data.map(user => {
                        return (
                            <div>{user.name}</div>
                        )
                    })
                }
            </div>
        </>

    )
};