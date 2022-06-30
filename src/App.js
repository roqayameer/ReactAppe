import "./App.css";
import AppProject7 from "./uescontext/AppProject7";
import Test from "./Eseffect/Test";
import Whatsap from "./Eseffect/ًWhatsap";
import Apifetch from "./ProjectApi/Apifetch";
import Apianther from "./ProjectApi/Apianther";
import Axioce from "./ProjextAxioc/Axioce";
import AxiocPost from "./ProjextAxioc/AxiocPost";
import Axioc_acync_aeait from "./ProjextAxioc/Axioc_acync_aeait";
import Api_Project from "./ReactProjectApi/Api_Project";
import Router_Dom from "./React_Router_Dom/Router_Dom";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppProject3 from "./Project3/AppProject3";
// import AppProject4 from "./Project4/AppProject4";
// import AppProject5 from "./Project5/ArrayUpdate";
// import AppProject2 from "./Project2/AppProject2";
// import AppProject1 from "./Project1/AppProject1";
// import Formsr from "./Project6/Formsr";
// import Multyinput from "./Project6/Multyinput";

function App() {
  return (
    <>
      {/* <AppProject1 /> */}
      {/* <AppProject2/> */}
      {/* <AppProject3/> */}
      {/* <AppProject4/> */}
      {/* <AppProject5/> */}
      {/* <Formsr/> */}
      {/* <Multyinput/> */}
      {/* <AppProject7/> */}
      {/* <Test/> */}
      {/* <Whatsap/> */}
      {/* <Apifetch/> */}
      {/* <Apianther/> */}
      {/* <Axioce/> */}
      {/* <AxiocPost/> */}
      {/* <Axioc_acync_aeait/> */}
      {/* <Api_Project/> */}

      <BrowserRouter>
        <Router_Dom />
      </BrowserRouter>
      
    </>
  );
}

export default App;
