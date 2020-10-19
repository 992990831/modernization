import React, { useContext } from 'react';
import { CounterContext } from '../CustomContext/CounterContext';

export default function Two() {
    const counter = useContext(CounterContext);
   
    return (
        <div style={{border:'1px solid grey', padding:'10px'}}>
            <span style={{marginRight:'10px'}}>Component Two:</span>
            {counter.state.count}
        </div>
    );
}