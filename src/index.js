import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Footer from './footer';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
