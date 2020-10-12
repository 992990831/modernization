import React, { useEffect, useState } from "react";

// function someAsyncCall(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("from async call");
//         }, 2000);
//     });
// }

const Home = (props) => {
    // useEffect(async ()=>{
    //     setName("Andy");

    //     let result = await someAsyncCall();
    //     setName(result);
    // }, []);

    // useEffect(()=>{
    //     setName("Andy");

    //     someAsyncCall().then((result)=>{
    //         setName(result);
    //     });
        
    // }, []);

    const [name, setName] = useState("Tom");

    return (
        <div className="App-about">
            <h2>{`hello ${name}`}</h2>
        </div>
    )
}

export default Home;
