import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelected}
        contentLabel="Selected Option"
    >
        <div className="modalwindow">
            <h3>Selected Option</h3>
            <p>You should: {props.selectedOption}</p>
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