import { useEffect, useState } from "react";
import "./app.css";
import { MainPage } from "./Components/Mainpage/MainPage";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  return (
    <div className="appcontainer">
      <MainPage />
      <footer className="mainFooter">
        <p className="mainFooterText">
          © 2025 Simple todo App. Developed by{" "}
          <a
            href="https://www.linkedin.com/in/dhanasekar-ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
            onClick={(e) => {
              notify;
            }}
          >
            Dhanasekar
          </a>
          <ToastContainer />.
        </p>
      </footer>
    </div>
  );
};

export default App;
