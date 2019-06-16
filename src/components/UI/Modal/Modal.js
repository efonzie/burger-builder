import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal] componentWillUpdate');
    }

    render() {
        return (<React.Fragment>
            <Backdrop show={this.props.show} hide={this.props.closeModal}></Backdrop>
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div >
        </React.Fragment>
        )
    }
}

export default Modal;