import Image from 'next/image';
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
            <Image src="/paintings.jpg" alt="" width={400} height={400} />
        </Modal>
        
    )
}

export default PaintingSection