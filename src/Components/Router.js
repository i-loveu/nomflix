import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Header from "../Components/Header";

const RouterComponent = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/tv" exact component={TV}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/movie/:id" component={Detail}></Route>
                <Route path="/tv/:id" component={Detail}></Route>
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
)

export default RouterComponent;