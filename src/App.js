import React, { useState } from 'react';
import Newsfeed from './NewsFeed'
import Sidebar from './Sidebar'
import MainSidebar from './MainSidebar/MainSidebar'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import './App.css';
import Login from './Login/Login.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { findAllByDisplayValue } from '@testing-library/react';


function App() {

 const [ {user}, dispatch] = useStateValue();
  const [showMainSidebar, setshowMainSidebar] = useState(true);
 
  return (
    <div className="App">
      <Router>
        {!user ?(
          <Login/>

        ):(
          <>

        <div className = "Sidebar">
           <Sidebar/>
           <ArrowForwardOutlinedIcon className="hide" onClick={()=> setshowMainSidebar(!showMainSidebar) }/>
        </div>
          
          {showMainSidebar?
           <div className = "MainSidebar">
         <MainSidebar />
        </div>:null}
        
       
            <Switch>
              <Route path = "/room/:roomId">
            
                  <div className="NewsFeed">
                    <Newsfeed/>
                  </div>
              </Route>

               <Route path="/">
                <h1>welcome</h1>
               </Route>

            </Switch>
 </>
        )}
       
         
      </Router>
     
     
    </div>
    // end of App
  );
}

export default App;
