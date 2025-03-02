import { BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout/Layout";
import './App.css'

// import { ToastContainer } from "react-toastify";
// continue it
export default function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
            <Layout />
      </BrowserRouter>
    </div>
  )
}