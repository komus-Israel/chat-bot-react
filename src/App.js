import HomePage from "./pages/Homepage";
import {BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Student from "./pages/Student";


function App() {

  return (

    <BrowserRouter>
       <Router>
            <div className='main-container'>
            
              
              <Switch>
                
                
                {/* Home page Router */}
                <Route exact path='/' component={HomePage} />
                    
          

                <Route exact path='/dashboard/admin'>
                    <Header />
                    <Admin />
                </Route>


                <Route exact path='/dashboard/student' render={
                      props=> {
                          if (!localStorage.getItem('token')){
                            return <Redirect to= '/'
                            />
                          } else {
                            return <Student props={props}/>
                          }
                      }
                    }
                  />
              </Switch>
              
            </div>
      </Router>
    </BrowserRouter>
     
    
  )
}

export default App;

