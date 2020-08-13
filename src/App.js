import React from 'react';
import Navigation from'./Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote'
import Foot from'./Footer';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/quote" component={Quote} />
      <Foot/>
    </div>
    </Router>
   
  );
}

export default App;
