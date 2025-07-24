import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  };

const PaintingSection = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
            <img src="/paintings.jpg" width='400px' height='400px' />
        </Modal>
        
    )
}

export default PaintingSection