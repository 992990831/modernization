import React from 'react';
import {
    useParams
  } from "react-router-dom";

export const Component01 = (props)=>{
    let { category } = useParams();
    return(
        <div style={{width:'100vw', textAlign:'center'}}>
            { `useParams-${category}`  }
        </div>
    )
}