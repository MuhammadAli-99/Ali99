import './App.css';
import Alert from './components/Alert';
//import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
//import {
 // BrowserRouter as Router,
  //Switch,
 //Route
//} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
  })
  setTimeout(()=>
  {
    setAlert(null)
  },2000);
  }
  const toggleMode=()=>{
     if(mode==='light')
     {
      setMode('dark');
      document.body.style.backgroundColor='#030d2c';
      showAlert("Dark mode has been enabled", "success")
     }
  else
{
setMode('light');
document.body.style.backgroundColor='white';
showAlert("Light mode has been enabled", "success")

}
  }
  return (
<>
 
{/*<Navbar title="TestApplication" aboutText="About"/>
<Navbar/>*/}
{/*<Router>*/}
<Navbar title="TestApplication" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3"> 
{/*<Switch>*/}
{/*<Route exact path="/about">
            <AboutUs/>
          </Route>
        {/*<Route exact path="/">*/}
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/*</Route>
        </Switch>*/}
</div>
{/*</Router>*/}
 </> 
  );
}

export default App;
