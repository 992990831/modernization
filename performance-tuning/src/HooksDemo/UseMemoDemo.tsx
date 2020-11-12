import React, { FC, useState, useMemo } from 'react';

export const UseMemoDemo:FC = (props) => {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('Andy');

    let userInitData:UserType = {name:'Bob', age: 35}; 
    const [user, setUser] = useState(userInitData);
    // function timeCostingFun(){
    //     console.log('call time costing fun');
    //     return `blablalba - ${name}`;
    // }

    let result =  useMemo(()=>{
        console.log('call time costing fun');
        return `blablalba - ${name}`;
    }, [name]);

    return(
        <>
            {/* <div> <NameComponent name={name} user={userInitData}></NameComponent> <button onClick={()=>setName(`${name}${age}`)}>Update Name</button> </div> */}
            <div> <NameComponent name={name} user={user}></NameComponent> <button onClick={()=>setName(`${name}${age}`)}>Update Name</button> </div>
            <br />
            <div>{`age - ${ age }`} <button onClick={()=>setAge(age+1)}>Add age</button> </div>
            <br />
            {/* <div>{timeCostingFun()}</div> */}
            <div>{result}</div>
            
        </>
    );
}

type UserType = null | {
    name?: string,
    age?: number
}

export interface NameProps{
    name: string,
    user: UserType
}

const NameComponent:FC<NameProps> = (props) => {
    // function getDescription(){
    //     console.log('call getName');
    //     return `my name is ${props.name}`;
    // }

    // let desc = getDescription();

    let desc = useMemo(()=>{
        console.log('call name component');
        return `my name is ${props.user?.name}, age is ${props.user?.age}`;
    }, [props.user]);

    return(
        <div>
            {desc}
        </div>
    )
}