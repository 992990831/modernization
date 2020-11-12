import React, { FC, useState, useCallback } from 'react';

export const UseCallbackDemo:FC = (props) => {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('Andy');

    const onNameClick = useCallback(()=>{
        console.log('click name button');
    }, [name]);

    return(
        <>
            <div> <MemoNameComponent name={name} click={onNameClick}></MemoNameComponent></div>
            <br />
            <div>{`age - ${ age }`} <button onClick={()=>setAge(age+1)}>Add age</button> </div>
           
        </>
    );
}

interface NameProps{
    name: string,
    click: ()=>void
}

const NameComponent:FC<NameProps> = (props) => {
    console.log('call name component')
    return(
        <button onClick={props.click}>
           {props.name}
        </button>
    )
}

const MemoNameComponent = React.memo(NameComponent);