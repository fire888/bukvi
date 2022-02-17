import React, { useState, useRef } from 'react';
import './App.scss';
import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom'
import Home from "./page/home";
import Burger from './component/header/burger'
import Menu from './component/header/menu'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import About from "./page/about";
import Cases from "./page/cases";
import Contacts from "./page/contacts";
import Cursor from "./component/cursor";
import AgentstStudio from "./page/cases/PageCases/AgentstStudio";
import Octo from "./page/cases/PageCases/Octo";
import Nebar from "./page/cases/PageCases/Nebar";
import Hihaco from "./page/cases/PageCases/Hihaco";
import Union from "./page/cases/PageCases/Union";
import Stomx from "./page/cases/PageCases/Stomx";
import Chb from "./page/cases/PageCases/Chb";
import { useOnClickOutside } from './hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";



function App({ location }) {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));



    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div className="burger" ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                            <div className="main page-main-inner">
                                <Switch>
                                    <Route path="/tests/200103_site/02/" exact component={Home} />
                                    <Route path="/About" exact component={About} />
                                    <Route path="/Cases" exact component={Cases} />
                                    <Route path="/Cases/AgentstStudio" exact component={AgentstStudio} />
                                    <Route path="/Cases/Octo" exact component={Octo} />
                                    <Route path="/Cases/Nebar" exact component={Nebar} />
                                    <Route path="/Cases/Hihaco" exact component={Hihaco} />
                                    <Route path="/Cases/Union" exact component={Union} />
                                    <Route path="/Cases/Stomx" exact component={Stomx} />
                                    <Route path="/Cases/Chb" exact component={Chb} />
                                    <Route path="/Contacts" exact component={Contacts} />
                                </Switch>
                                <Cursor />
                            </div>
            </ThemeProvider>
        </>
    );
}
export default withRouter(App);
