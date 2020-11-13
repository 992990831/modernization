import React, { Suspense, lazy, useState } from 'react';

const data = [1, 2, 3, 4, 5, 6];

const DynamicLazyDemo = () => {
    const [lazyComponent, setLazyComponent] = useState(<></>);

    async function loadComponent(id: number) {
        // const LazyDemo = await lazy(() =>
        //     import(`./SubComponent${id}`)
        //         .catch(() => console.log('Error in importing'))
        // );
        const LazyDemo = await lazy( () => {
            return Promise.all([
                import(`./SubComponent${id}`),
                new Promise(resolve => setTimeout(resolve, 2000))
            ]).then(([moduleExports]) => moduleExports);
        })

        setLazyComponent(<LazyDemo key={id}></LazyDemo>);
    }

    return (
        <>
            {
                data.map(d => {
                    return (
                        <input key={d} type='button' value={`load comopent-${d}`} onClick={() => loadComponent(d)} style={{ marginLeft: '1em' }}></input>
                    );
                })
            }

            <Suspense fallback={<div>延迟2秒加载中</div>}>
                {
                    lazyComponent
                }
            </Suspense>

        </>
    )
}

export default DynamicLazyDemo;