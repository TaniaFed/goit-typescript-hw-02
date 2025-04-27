import Modal from 'react-modal'
import { IModal } from './ImageModal.types'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}

Modal.setAppElement('#root')

export const ImageModal = ({ modalIsOpen, closeModal, src, alt }: IModal) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {src && <img src={src} alt={alt} />}
      {/* <img src={src} alt={alt} /> */}
    </Modal>
  )
}
