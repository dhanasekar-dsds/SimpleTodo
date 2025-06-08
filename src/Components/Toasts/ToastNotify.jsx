// ToastNotify.js
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastNotify = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};

export const notifySuccess = (message) => {
  toast.success(message || "Success!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Bounce,
    theme: "light",
  });
};
