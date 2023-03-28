import { useState } from 'react';
//Modal
import Modal from 'react-modal';
//icon
import { GrClose } from "react-icons/gr";

function Sidebar() {
   const [modalIsOpen, setModalIsOpen]=useState(false)
   const toggleModal=()=>{
      setModalIsOpen(!modalIsOpen)
   }
  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand <b>Colors</b>
          </a>
        </div>
        <div className="description">
          rengler bizim stil vermeyimiz ucun ela ornekdir.bunun en gozeli de flex oyrenmekdir
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
      >
         <button className='modal-close-button' onClick={toggleModal}>
            <GrClose/>
         </button>
         <div> i am a modal</div>
         <h3>About BrandColors</h3>
         <p>her cesid rengleri burdan elde ede bilersiz</p>
         <p>lalalalalalallllllllllllllllllllllllllllllllllllllllllll</p>



      </Modal>
    </>
  );
}
export default Sidebar;
