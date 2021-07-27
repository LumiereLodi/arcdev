import React, {useState} from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./ui/Theme";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./ui/Home";
import Try from "./ui/Try.js"
// import Button from "@material-ui/core/Button";
// import Test from "./Test";
// import MenuIcon from "@material-ui/icons/Menu"
import Footer from "./ui/Footer"

function App(prop) {

        //passing an icon to a child component.
    // const icon = (
    //     <Fragment>
    //         <MenuIcon/>
    //     </Fragment>
    //
    // )

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);
    return (
      
      <ThemeProvider theme={theme}>
          <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>


          <Router>

              <Switch>

                  <Route  exact path="/" component={Home}/>
                  <Route  exact path="/services" component={()=> <div>service</div>}/>
                  <Route  exact path="/customsoftware" component={()=> <div>custom</div>}/>
                  <Route  exact path="/mobileapps" component={()=> <div>mobile</div>}/>
                  <Route  exact path="/websites" component={()=> <div>websites</div>}/>
                  <Route  exact path="/revolution" component={()=> <div>revolution</div>}/>
                  <Route  exact path="/about" component={()=> <div>about</div>}/>
                  <Route  exact path="/contact" component={()=> <div>contact</div>}/>
                  <Route  exact path="/estimate" component={()=> <div>estimate</div>}/>


              </Switch>
                <div style={{height:"845px" }}></div>
              <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
          </Router>

          {/*<Test icon={icon}/>*/}
      </ThemeProvider>

  );
}

export default App;
