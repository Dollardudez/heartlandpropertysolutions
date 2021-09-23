import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import Home from './routes/Home';
import Admin from './routes/Admin';
import PropertyDetail from './routes/PropertyDetail';


/**
 * @summary create a react router for the site
 * 
 * @returns The React router that intercepts these routes
 * from contacting the server and instead displays the correct component
 */
const App = () => {
  return (
       <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/properties/:id" component={PropertyDetail}/>
                </Switch>
            </Router>
        </div>
  );
}

export default App;