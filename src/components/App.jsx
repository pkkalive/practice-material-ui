import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import * as ReactRouter from 'react-router-dom';
import theme from './ui/Theme';
import Header from "./ui/Header";
import SearchBar from "./ui/SearchBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <ReactRouter.BrowserRouter>
            <Header />
            <SearchBar />
            <ReactRouter.Switch>
                <ReactRouter.Route exact path ="/" component= {() => <div>HOME</div>}/>
                <ReactRouter.Route exact path ="/services" component= {() => <div>SERVICES</div>}/>
                <ReactRouter.Route exact path ="/revolution" component= {() => <div>THE REVOLUTION</div>}/>
                <ReactRouter.Route exact path ="/about" component= {() => <div>ABOUT US</div>}/>
                <ReactRouter.Route exact path ="/contact" component= {() => <div>CONTACT US</div>}/>
                <ReactRouter.Route exact path ="/profile" component= {() => <div>MY PROFILE</div>}/>
                <ReactRouter.Route exact path ="/logout" component= {() => <div>LOGOUT</div>}/>
            </ReactRouter.Switch>
        </ReactRouter.BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
