export const someAsyncCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("from async call");
        }, 2000);
    });
}