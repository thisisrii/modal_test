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
        let content = "The values you have entered as future targets will be deleted if you change the frequency of this promise.";
        let btnText = "Got It";
        let promptType = "error"; //error, success, confirmation, info - determines colour of icon
        let sticky = true;

        return (
            <div>
                <h1>Welcome to Modal Test</h1>
                <button onClick={this.toggleModal}>
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