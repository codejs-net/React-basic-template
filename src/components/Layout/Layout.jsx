import React from 'react';
import useStyles from "./style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container  className={classes.container}>
                {children}
                </Container>
            </main>  
            <Footer/>
        </div>
    )
}
export default Layout;
