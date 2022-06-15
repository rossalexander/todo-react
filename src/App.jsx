import {useState} from 'react';
import Another from './Another';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    };

    const someStyle = {
        background: 'blue',
        color: 'white',
        fontSize: '28px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <header className="App-header">
                <Another name="Ross" />
                <div>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </div>

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p style={someStyle}>Hello</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
