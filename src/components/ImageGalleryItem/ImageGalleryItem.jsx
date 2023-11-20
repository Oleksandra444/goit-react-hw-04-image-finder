import { useState } from "react";
import css from "../styles.module.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ imageUrlSizeS, imageUrlSizeXL, tags}) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(prevState => (
      !prevState.isModalOpen
    ))
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
            <>
                <li className={css.imageGalleryItem} onClick={openModal}>
                    <img className={css.imageGalleryItemPicture} src={imageUrlSizeS} alt={tags} />
                </li>
                <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Big Image">
        {/* <button onClick={this.closeModal}>close</button> */}
        <div><img src={imageUrlSizeXL} alt={tags} /></div>
        </Modal>
                
            </>                
        )






}