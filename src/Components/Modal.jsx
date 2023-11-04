/* eslint-disable */

import './Modal.css';

export default function Modal({children, isOpen, closeModal}){
    const handleModalContainerClick = (e) => e.stopPropagation();

    return(
        <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <div className="closeContainer">
                    <button className="modal-close" onClick={closeModal}>X</button>
                </div>
                {children}
            </div>
        </article>
    )
}