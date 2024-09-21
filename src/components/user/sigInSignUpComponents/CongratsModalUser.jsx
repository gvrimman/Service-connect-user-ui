/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CongratsModal from "../../reUsableComponents/CongratsModal";
import congrats_user_icon from '../../../assets/congrats_user_icon.svg'




function CongratsModalUser({ isOpen, handleCloseModal }) {
    const buttonConfig = {
  label: "Go Back",
  type: "button",
  btnWidth: "50%", // Dynamic button width
  btnHeight: "50px", // Dynamic button height
};

const modalConfig = {
  title: 'Congrats',
  message: 'Your profile has been successfully added',
  img: congrats_user_icon,
}
  return (
    <div>
      <CongratsModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      title={modalConfig.title}
      message={modalConfig.message}
      img={modalConfig.img}
      buttonConfig={buttonConfig}
      />
    </div>
  )
}

export default CongratsModalUser
