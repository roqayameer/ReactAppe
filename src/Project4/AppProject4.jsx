import React, { useState } from "react";

export default function AppProject4() {
  const [darkmode, setDarkmode] = useState({
    color: "#000",
    backgroundColor: "#fff",
  });
  const changColor = () => {
    if (darkmode.color === "#000") {
      setDarkmode({ color: "#fff", backgroundColor: "#000" });
    }else{
      setDarkmode({ color:"#000",backgroundColor:"#fff"})
    }
  };
  return (
    <>
      {" "}
      <div className="container-fluid text-center">
        <button className="btn btn-outline-dark my-3" onClick={changColor}>
          Dark Mode
        </button>
        <div className=" jumbotron text-center" style={darkmode}>
          <h1 className=" display - 4 "> Project5 </h1>
          <p className=" lead ">
            {" "}
            This is a simple hero unit , a simple jumbotron - style component
            for calling extra attention to featured content or information .
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It uses utility classNamees for typography and spacing to space
            content out within the larger container .{" "}
          </p>
          <h1 className=" display - 4 "> Project5 </h1>
          <p className=" lead ">
            {" "}
            This is a simple hero unit , a simple jumbotron - style component
            for calling extra attention to featured content or information .
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It uses utility classNamees for typography and spacing to space
            content out within the larger container .{" "}
          </p>
          <h1 className=" display - 4 "> Project5 </h1>
          <p className=" lead ">
            {" "}
            This is a simple hero unit , a simple jumbotron - style component
            for calling extra attention to featured content or information .
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It uses utility classNamees for typography and spacing to space
            content out within the larger container .{" "}
          </p>
          <h1 className=" display - 4 "> Project5 </h1>
          <p className=" lead ">
            {" "}
            This is a simple hero unit , a simple jumbotron - style component
            for calling extra attention to featured content or information .
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It uses utility classNamees for typography and spacing to space
            content out within the larger container .{" "}
          </p>
          <h1 className=" display - 4 "> Project5 </h1>
          <p className=" lead ">
            {" "}
            This is a simple hero unit , a simple jumbotron - style component
            for calling extra attention to featured content or information .
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It uses utility classNamees for typography and spacing to space
            content out within the larger container .{" "}
          </p>
          <h1 className=" display - 4 "> Project5 </h1>
          <p className=" lead ">
            {" "}
            This is a simple hero unit , a simple jumbotron - style component
            for calling extra attention to featured content or information .
          </p>
          <hr className="my-4" />
          <p>
            {" "}
            It uses utility classNamees for typography and spacing to space
            content out within the larger container .{" "}
          </p>
        </div>
      </div>
    </>
  );
}
