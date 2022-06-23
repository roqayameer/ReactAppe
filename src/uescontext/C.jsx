import React,{useContext} from "react";
import { Language, FrontEnd } from "..";
export default function C() {
  const lang= useContext(Language)
  const fro=useContext(FrontEnd)
  return (
    <div>
      {/* <Language.Consumer>
        {(fullname) => {
          return (
            <>
              <FrontEnd.Consumer>
                {(front) => {
                  return <>{front} is not used</>;
                }}
              </FrontEnd.Consumer>
              <h1>my name {fullname}</h1>
            </>
          );
        }}
      </Language.Consumer> */}

      <h1>{lang} and {fro}</h1>
    </div>
  );
}
