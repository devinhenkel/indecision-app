import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.clearSelected}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            <p>You should: {props.selectedOption}</p>
            <button onClick={props.clearSelected}>Close</button>
        </Modal>
);

export default OptionModal;