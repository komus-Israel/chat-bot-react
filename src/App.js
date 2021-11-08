import HomePage from "./pages/Homepage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Student from "./pages/Student";

function App() {

  return (

      <Router>
            <div className='main-container'>
            
              
              <Switch>
                
                
                {/* Home page Router */}
                <Route exact path='/'>
                    <Header />  
                    <HomePage />
                </Route>

                <Route exact path='/dashboard/admin'>
                    <Header />
                    <Admin />
                </Route>


                <Route exact path='/dashboard/student'>
                    <Student />
                </Route>


              </Switch>
              
            </div>
      </Router>
      
  )
}

export default App;

