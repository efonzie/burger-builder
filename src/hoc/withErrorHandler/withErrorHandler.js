import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount () {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            })
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                 this.setState({error: error});
            });
        }

        componentWillUnmount() {
            console.log('will unmount', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.error}
                        closeModal={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
    }
};

export default withErrorHandler;