import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeScreen from './views/HomeScreen_Container/HomeScreen'
import AboutScreen from './views/Aboutpage_Container/AboutScreen'
import LoginScreen from './views/Auth_Container/LoginScreen_Container/LoginScreen'



const AuthenticatedRoutes =()=>{
 return( <Switch>
    <Route  exact path="/" component={AboutScreen}/>
  </Switch>
 )}


 const UnAuthenticatedRoutes =()=>{
  return( <Switch>
     <Route  exact path="/" component={HomeScreen}/>
     <Route  exact path="/login" component={LoginScreen}/>
   </Switch>
  )}


const App = () => {

  const isAuth = false ;


  return (
    <div>
<Router>

        {isAuth ?
          (
            <AuthenticatedRoutes />
          )
          :
          (
            <UnAuthenticatedRoutes />
          )
        }

</Router>

    </div>
  );
}

export default App;
