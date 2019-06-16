import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
};

export default Layout;