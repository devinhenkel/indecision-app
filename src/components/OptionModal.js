import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelected}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <div>
            <h3 className="modal__title">Selected Option</h3>
            <p className="modal__body">You should: {props.selectedOption}</p>
            <button 
                onClick={props.clearSelected}
                className="button"
            >
                Close
            </button>
        </div>
    </Modal>
   
);

export default OptionModal;