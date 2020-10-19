import React, { useState, useEffect, useReducer, useContext } from 'react';
import { CounterContext } from '../CustomContext/CounterContext';

export default function One() {
    const counter = useContext(CounterContext);
    function increase() {
        counter.dispatch({
            type: 'increase',
            payload: { count: counter.state.count }
        });
    }

    function decrease() {
        counter.dispatch({
            type: 'decrease',
            payload: { count: counter.state.count }
        });
    }

    return (
        <div style={{border:'1px solid grey', padding:'10px'}}>
            <span style={{marginRight:'10px'}}>Component One</span>
            <input type='button' onClick={increase} defaultValue='Increase'></input>
            <input type='button' onClick={decrease} defaultValue='Decrease'></input>
        </div>
    );
}