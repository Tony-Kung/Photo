import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';

import {Switch,Route} from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
    <Nav />
{/* exact意思:網址一定要完全符合才跳轉 */}

    <Switch>
      <Route path="/" exact> 
         <Homepage />
      </Route>
      <Route path="/about" exact>
         <About />
      </Route>
     
    </Switch>
    
    <Footer />
    </div>
  );
}

export default App;
