import React from 'react';
import '../../styles/Modal.css';

class Modal extends React.Component {

  clickOnBackdrop = () => {
    // If NOT sticky user should be able to click on backdrop to dismiss pop-up
     if(!this.props.sticky && this.props.show){
        this.props.onClose();
        // Get and then kill all timeouts, so that modal doesn't reappear
        let id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
     }
  }

  componentDidUpdate(){
    if(!this.props.sticky && this.props.show){
        //If NOT sticky and is currently displaying disappear after 5000 milliseconds
        setTimeout(() => {
            this.props.onClose();  
        }, 5000);
        

    }
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (

      <div className="backdrop" onClick={this.clickOnBackdrop}>
        <div className="modal">
          <div className="future-targets"></div>
          <h1 className="heading">{this.props.heading}</h1>
          <p className="content">{this.props.content}</p>
        {
            // If sticky don't display button and disappear 
            // after a certain amount of time.
        }
        {this.props.sticky &&
             <button className="button" onClick={this.props.onClose}>
            {this.props.btnText}
            </button>}
        </div>
      </div>
    );
  }


}

export default Modal;