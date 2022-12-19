import { useContext } from "react"

import { PagesRoutes } from './routes/Route';
import { ToastContainer } from 'react-toastify';
import { ModalContext } from './context/ModalContext.tsx/ModalContext';
import 'react-toastify/dist/ReactToastify.css'

import { ModalPopUp } from "./component/ModalPopUp/ModalPopUp";

function App() {
  const { modalOpen } = useContext(ModalContext)

  return (
    <>
      <PagesRoutes />
      <ToastContainer />
      { modalOpen && <ModalPopUp /> }
    </>
  );
}

export default App;
