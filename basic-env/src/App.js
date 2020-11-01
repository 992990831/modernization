import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* {`${process.env.NODE_ENV}-${process.env.Tag}`}  */}
      {JSON.stringify(process.env)}
    </div>
  );
}

export default App;
