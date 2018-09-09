import React, { Component } from "react";
import Modal from './Modal/Modal';
import '../styles/App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };

    }

     toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        // Should be data driven
        let heading = "Future Targets.";
        let content = "Values must be numeric, no more than 13 characters and cannot go beyond the target’s end date.";
        let btnText = "Got It";
        let promptType = "error"; //error, success, confirmation, info - determines colour of icon
        let sticky = true; // flag to change component behavior

        return (
            <div className="wrapper">
                <h1 className="heading">Welcome to Modal Test</h1>
                <button onClick={this.toggleModal} className="button">
                    Open the modal
                </button>
                <Modal promptType={promptType} 
                    btnText={btnText} 
                    heading={heading} 
                    content={content} 
                    sticky={sticky}
                    show={this.state.isOpen} 
                    onClose={this.toggleModal}>
                </Modal>
            </div>
        );
    }
}

export default App;