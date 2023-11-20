import { Component } from "react";
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

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }

    openModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));


  };
  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  };


    render() { 
        const { imageUrlSizeS, imageUrlSizeXL, tags } = this.props;
        const { isModalOpen } = this.state;

        return (
            <>
                <li className={css.imageGalleryItem} onClick={this.openModal}>
                    <img className={css.imageGalleryItemPicture} src={imageUrlSizeS} alt={tags} />
                </li>
                <Modal
        isOpen={isModalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Big Image">
        {/* <button onClick={this.closeModal}>close</button> */}
        <div><img src={imageUrlSizeXL} alt={tags} /></div>
        </Modal>
                
            </>                
        )
    }
}