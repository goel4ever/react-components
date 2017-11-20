import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import Footer from './footer/Footer';
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
