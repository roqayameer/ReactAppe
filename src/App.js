import "./App.css";
// import Header from './component/Header';
// import Main from './component/Main';
// import Footer from './component/Footer';
import Props from "./props/Props";
import date from "./props/Data";
import hoteldate from "./Project2/HotelData";
import Hotel from "./Project2/Hotel";
import { useState } from "react";
import { Data } from "@react-google-maps/api";
// one a way
// const allData = (values) => {
//   return (
//     <Props
//       title={values.title}
//       text={values.text}
//       btn={values.btn}
//       imgsrc={values.imgsrc}
//     />
//   );
// };

function App() {
 let curenntTime= new Data().toLocaleTimeString();
 console.log(curenntTime)
 const [time,settime] = useState("time trive")
 const click = ()=>{
 let newtime= new Data().toLocaleTimeString();
 settime(newtime)
}
  return (
    <>
   
      {/* <Header/>
  <Main/> 
  <Footer/>  
  */}
      {/* <div className="container my-5 ">
        <div className="row ">
          {date.map(allData)} one away
          
          {date.map((values) => {
            return (
              <>
                <Props
                id={values.id}
                  title={values.title}
                  text={values.text}
                  btn={values.btn}
                  imgsrc={values.imgsrc}
                />
              </>
            );
          })}
        </div>
      </div> */}
      {/* <div className="contener">
        <div className="Titel">Hotel Room</div> */}
      {/* {hoteldate.map((values) => {
          return (
            <>
              <Hotel
                imgsrc={values.imgsrc}
                title={values.title}
                text={values.text}
                btn={values.btn}
              />
            </>
          );
        })} */}
      {/* <Hotel
                imgsrc="./images/7056.jpg"
                title={333}
                text="hello hoe olde you"
                btn="more"
              /> */}
      {/* </div> */}
      {/* <div className="contener">
        <h1 className="Titel">{mynames}</h1>
        <button className="btn btn-dark" onClick={()=>{setmynames("ameer")}}>
          click
        </button>
      </div> */}
      <div className="contener my-5">
      <h1 className="text-dark">{time}</h1>
      <button onChange={click}></button>
      </div>
    </>
  );
}

export default App;
