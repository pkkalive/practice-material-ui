import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import theme from './ui/Theme';
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path ="/" component= {() => <div>HOME</div>}/>
                <Route exact path ="/services" component= {() => <div>SERVICES</div>}/>
                <Route exact path ="/revolution" component= {() => <div>THE REVOLUTION</div>}/>
                <Route exact path ="/about" component= {() => <div>ABOUT US</div>}/>
                <Route exact path ="/contact" component= {() => <div>CONTACT US</div>}/>
                <Route exact path ="/profile" component= {() => <div>MY PROFILE</div>}/>
                <Route exact path ="/logout" component= {() => <div>LOGOUT</div>}/>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
