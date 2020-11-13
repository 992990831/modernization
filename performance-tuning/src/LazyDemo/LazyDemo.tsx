import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
//const About = lazy(() => import('./About'));
const About = lazy(() => {
    return Promise.all([
        import("./About"),
        new Promise(resolve => setTimeout(resolve, 3000))
    ])
        .then(([moduleExports]) => moduleExports);
});

const LazyDemo = () => {
    return (
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default LazyDemo;